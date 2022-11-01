type Projects = {
    name: string;
    description: string;
    repo_name: string;
    demo_url: string;
    img_preview: string;
    emoji: string;
}[];

const projects: Projects = [
    {
        name: 'Exxyll Discord Bot',
        description: 'Multipurpose Discord Bot with Commands for Fun, Games, and many more!',
        repo_name: 'exxyll',
        demo_url: '#',
        img_preview: '#',
        emoji: '🤖',
    },
    {
        name: '湊あくあ Fanpage',
        description: '湊あくあ Fanpage created with Svelte and Sveltestrap.',
        repo_name: 'aqua-fanpage',
        demo_url: 'https://aqua.falcxxdev.ml',
        img_preview: 'https://i.upload.systems/psUYhn2p',
        emoji: '⚓',
    },
    {
        name: 'Wangy wangy',
        description: 'Generator Tools that created for fun and designed for weebs',
        repo_name: 'wagny-wangy',
        demo_url: 'https://wangy.falcxxdev.ml',
        img_preview: 'https://i.upload.systems/1pukVaLj',
        emoji: '🌸',
    },
    {
        name: 'Evelyn',
        description: 'Fan-made SPA website for Evelyn Vtuber (Hai Halo Epel)',
        repo_name: 'evelyn',
        demo_url: 'https://evelyn.falcxxdev.ml',
        img_preview: 'https://cdn.upload.systems/uploads/Ywjqv0Cp.png',
        emoji: '🍎',
    },
];

export default projects;
