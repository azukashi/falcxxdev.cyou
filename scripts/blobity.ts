import useBlobity from 'blobity';

export const blobity = () => {
    onMounted(() => {
        new useBlobity({
            invert: true,
            dotColor: '#3CCF91',
            font: 'Lexend',
            fontSize: 13,
        });
    });
};
