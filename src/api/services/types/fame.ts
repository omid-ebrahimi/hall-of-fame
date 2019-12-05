export interface FameDto {
    id: string;
    name: string;
    dob: string;
    image: string;
}

export interface GetFameListResponse {
    data: {
        list: FameDto[];
    };
}
