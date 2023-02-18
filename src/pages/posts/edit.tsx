import React from "react";
import {
    Edit,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
} from "@pankod/refine-chakra-ui";
import { useForm } from "@pankod/refine-react-hook-form";

export const PostEdit = () => {
    const {
        refineCore: { formLoading, queryResult },
        saveButtonProps,
        register,
        resetField,
        formState: { errors },
    } = useForm();

    const postsData = queryResult?.data?.data;

    return (
        <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
            <FormControl mb="3" isInvalid={!!(errors as any)?.id}>
                <FormLabel>Id</FormLabel>
                <Input
                    disabled
                    type="number"
                    {...register("id", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.id?.message as string}
                </FormErrorMessage>
            </FormControl>
            
            <FormControl mb="3" isInvalid={!!(errors as any)?.title}>
                <FormLabel>Title</FormLabel>
                <Input
                    type="text"
                    {...register("title", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.title?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.content}>
                <FormLabel>Content</FormLabel>
                <Input
                    type="text"
                    {...register("content", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.content?.message as string}
                </FormErrorMessage>
            </FormControl>
         
            <FormControl mb="3" isInvalid={!!(errors as any)?.createdAt}>
                <FormLabel>Created At</FormLabel>
                <Input
                    disabled
                    {...register("createdAt", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.createdAt?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.updatedAt}>
                <FormLabel>Updated At</FormLabel>
                <Input
                    disabled
                    {...register("updatedAt", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.updatedAt?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.publishedAt}>
                <FormLabel>Published At</FormLabel>
                <Input
                    disabled
                    {...register("publishedAt", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.publishedAt?.message as string}
                </FormErrorMessage>
            </FormControl>

            <FormControl mb="3" isInvalid={!!(errors as any)?.locale}>
                <FormLabel>Locale</FormLabel>
                <Input
                    disabled
                    type="text"
                    {...register("locale", {
                        required: "This field is required",
                    })}
                />
                <FormErrorMessage>
                    {(errors as any)?.locale?.message as string}
                </FormErrorMessage>
            </FormControl>
        </Edit>
    );
};
