type Waifus = {
    name: { jp: string; en: string };
    from: string;
    link: string;
    fromLink: string;
}[];

const waifus: Waifus = [
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
            jp: 'ゼータ',
            en: 'Vestia Zeta',
        },
        from: 'hololiveID',
        link: 'https://twitter.com/vestiazeta',
        fromLink: 'https://hololive.tv/id',
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
