import { SanityProjectDetails } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

export const urlFor = (source: string) => {
    const builder = imageUrlBuilder(useSanity().config as SanityProjectDetails);
    return builder.image(source).auto('format');
};
