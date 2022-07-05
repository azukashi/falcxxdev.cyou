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
    {
        name: {
            jp: '湊あくあ',
            en: 'Minato Aqua',
        },
        from: 'hololive',
        link: 'https://twitter.com/minatoaqua',
        fromLink: 'https://hololive.tv',
    },
    {
        name: {
            jp: '壱百満天原サロメ',
            en: 'Hyakumantenbara Salome',
        },
        from: 'Nijisanji',
        link: 'https://twitter.com/1000000lome',
        fromLink: 'https://nijisanji.jp/',
    },
];

export default waifus;
