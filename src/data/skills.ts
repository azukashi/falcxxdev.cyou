type Skills = {
    langSkills: { name: string }[];
    frontEndSkills: { name: string }[];
    backEndSkills: { name: string }[];
    toolsSkills: { name: string }[];
};

const skills: Skills = {
    langSkills: [
        { name: 'C++' },
        { name: 'Shell Script' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'YAML' },
    ],
    frontEndSkills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'SASS' },
        { name: 'SvelteKit' },
        { name: 'Vue.js' },
        { name: 'Bootstrap' },
    ],
    backEndSkills: [{ name: 'Node.js' }, { name: 'MySQL' }, { name: 'MongoDB' }],
    toolsSkills: [{ name: 'Git' }, { name: 'Vim & Neovim' }, { name: 'Visual Studio Code' }],
};

export default skills;
