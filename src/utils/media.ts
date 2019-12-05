/* eslint-disable @typescript-eslint/camelcase */
import { PixelRatio, Platform } from 'react-native';
import ImagePicker, { Image } from 'react-native-image-crop-picker';
import { FileForUpload } from '../api/types';
import { FileSnapshotIn } from '../store/File';
import { MediaSnapshotIn } from '../store/Content/Media';
import { THUMBNAILS_ADDRESS } from '../api/address';

export enum MediaSourceNames {
    Gallery,
    Camera,
}

export enum MediaTypes {
    Photo,
    Video,
}

export interface Dimensions {
    width: number;
    height: number;
}

export interface AspectRatio {
    X: number;
    Y: number;
}

export function getInstagramAspectRatio(width: number, height: number): AspectRatio {
    if (width < height) return { X: 4, Y: 5 };
    if (width > height) return { X: 1.91, Y: 1 };
    return { X: 1, Y: 1 };
}

export function getFileName(path: string): string {
    return '' + path.split('/').pop();
}

export function getMediaType({ file }: MediaSnapshotIn): MediaTypes {
    if (file.type.includes('video')) {
        return MediaTypes.Video;
    }
    return MediaTypes.Photo;
}

export function getFileNameWithoutExtension(path: string): string {
    const fileName = getFileName(path);
    if (fileName) {
        return '' + fileName.split('.').shift();
    }
    return fileName;
}

export function makeThumbnailPath(fileName: string, { width, height }: Dimensions): string {
    return `${THUMBNAILS_ADDRESS}/${fileName}?width=${width}&height=${height}`;
}

export function isVideo(media: MediaSnapshotIn): boolean {
    return getMediaType(media) === MediaTypes.Video;
}

export function getThumbnailPath(media: MediaSnapshotIn, dimensions: Dimensions): string {
    const {
        file: { url },
    } = media;
    if (url.startsWith('http')) {
        const fileName = isVideo(media) ? getFileNameWithoutExtension(url) + '.png' : getFileName(url);
        return makeThumbnailPath(fileName, dimensions);
    }
    return url;
}

export function convertImageToFileSnapshotIn({ path, mime, filename, width, height }: Image): FileSnapshotIn {
    return {
        width,
        height,
        id: 0,
        url: path,
        type: mime,
        label: getFileName(path) || filename,
    };
}

function convertImageToMedia(image: Image): MediaSnapshotIn {
    const file = convertImageToFileSnapshotIn(image);
    return {
        file,
        id: 0,
        sequence_number: 0,
    };
}

export function makeFileForUpload({ url, label, type }: FileSnapshotIn): FileForUpload {
    return {
        name: label,
        uri: Platform.OS === 'android' ? url : url.replace('file://', ''),
        type,
    };
}

function convertPixelsToDp(pixels: number): number {
    return pixels / PixelRatio.get();
}

export function getDpDimensions({ width, height }: Dimensions): Dimensions {
    return { width: convertPixelsToDp(width), height: convertPixelsToDp(height) };
}

export function getLimitedDimensions({ width, height }: Dimensions, maxWidth: number, maxHeight: number): Dimensions {
    if (width > height || (width === height && maxWidth < maxHeight)) {
        const ratio = width / maxWidth;
        return { width: maxWidth, height: height / ratio };
    } else {
        const ratio = height / maxHeight;
        return { width: width / ratio, height: maxHeight };
    }
}

export async function pickImages(source: MediaSourceNames): Promise<MediaSnapshotIn[]> {
    try {
        const images =
            source === MediaSourceNames.Gallery
                ? await ImagePicker.openPicker({ multiple: true })
                : [await ImagePicker.openCamera({})];
        return (images as Image[]).map(convertImageToMedia);
    } catch {
        return [];
    }
}

export async function cropImage(media: MediaSnapshotIn, width?: number, height?: number): Promise<MediaSnapshotIn> {
    if (getMediaType(media) !== MediaTypes.Photo) {
        return media;
    }
    return convertImageToMedia(
        await ImagePicker.openCropper({
            path: media.file.url,
            width,
            height,
        }),
    );
}

export async function cropImageWithAspectRatio(
    media: MediaSnapshotIn,
    { X, Y }: AspectRatio,
): Promise<MediaSnapshotIn> {
    const { width, height } = media.file;
    if (height < width) {
        return await cropImage(media, (X * height) / Y, height);
    } else {
        return await cropImage(media, width, (Y * width) / X);
    }
}

export async function cropImages(
    medias: MediaSnapshotIn[],
    aspectRatio: AspectRatio = { X: 1, Y: 1 },
): Promise<MediaSnapshotIn[]> {
    try {
        const croppedMedias: MediaSnapshotIn[] = [];
        for (const media of medias) {
            if (getMediaType(media) !== MediaTypes.Photo) {
                croppedMedias.push(media);
                continue;
            }
            croppedMedias.push(await cropImageWithAspectRatio(media, aspectRatio));
        }
        return croppedMedias;
    } catch {
        return [];
    }
}
