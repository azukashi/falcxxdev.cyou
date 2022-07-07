type Waifus = {
    name: { jp?: string; en: string };
    from?: string;
    link: string;
    fromLink?: string;
}[];

const waifus: Waifus = [
    {
        name: {
            en: 'Evelyn (Indie VTuber)',
        },
        link: 'https://twitter.com/EpelEvelyn',
    },
    {
        name: {
            jp: '常闇トワ',
            en: 'Tokoyami Towa',
        },
        from: 'hololive',
        link: 'https://twitter.com/tokoyamitowa',
        fromLink: 'https://hololive.tv',
    },
];

export default waifus;
