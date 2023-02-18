import { useShow } from "@pankod/refine-core";
import {
    Show,
    Heading,
    NumberField,
    TextField,
    DateField,
} from "@pankod/refine-chakra-ui";

export const PostShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    return (
        <Show isLoading={isLoading}>
            <Heading as="h5" size="sm" mt={4}>
                Id
            </Heading>
            <NumberField value={record?.id ?? ""} />

            <Heading as="h5" size="sm" mt={4}>
                Title
            </Heading>
            <TextField value={record?.title} />

            <Heading as="h5" size="sm" mt={4}>
                Content
            </Heading>
            <TextField value={record?.content} />

            <Heading as="h5" size="sm" mt={4}>
                Created At
            </Heading>
            <DateField value={record?.createdAt} />

            <Heading as="h5" size="sm" mt={4}>
                Published At
            </Heading>
            <DateField value={record?.publishedAt} />

            <Heading as="h5" size="sm" mt={4}>
                Locale
            </Heading>
           <TextField value={record?.locale} />
        </Show>
    );
};
