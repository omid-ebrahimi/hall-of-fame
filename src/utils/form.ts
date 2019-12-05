import { InferType, ObjectSchema, ValidationError } from 'yup';
import { useCallback, useEffect, useState } from 'react';

export type Validatable<T = {}> = T & {
    error?: ValidationError;
    validate: () => void;
};

export type Form<Data = {}> = Data & {
    submit: () => Promise<boolean>;
    isSubmitting: boolean;
};

export function useValidation<T extends ObjectSchema>(validationSchema: T, obj: InferType<T>): Validatable {
    const [error, setError] = useState<ValidationError>();
    const validate = useCallback((): void => {
        validationSchema
            .validate(obj)
            .then((): void => setError(undefined))
            .catch(setError);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, Object.values(obj));

    useEffect((): void => {
        validate();
    }, [validate]);
    return { error, validate };
}

export function useForm(onSubmit: () => Promise<boolean>): Form {
    const [isSubmitting, setIsSubmitting] = useState(false);
    async function submit(): Promise<boolean> {
        setIsSubmitting(true);
        try {
            return await onSubmit();
        } catch (error) {
            return false;
        } finally {
            setIsSubmitting(false);
        }
    }
    return { isSubmitting, submit };
}
