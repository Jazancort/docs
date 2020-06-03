module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    title: "Docs Egua Tech",
    description: "Documentação dos módulos, ferramentas e linguagem do Egua Tech",
    themeConfig: {
        nav: [
            { text: "Home", link: '/' },
            { text: "egua", link: '/egua/' },
            { text: "eguap", link: '/introducao/eguap/' },
            { text: "eguac", link: '/introducao/eguac/' },
            { text: "eguamat", link: '/introducao/eguamat/' },
            { text: "github", link: 'https://github.com/eguatech' }
        ],

        '/': {
            sidebar: 'auto'
        },

        '/introducao': {
            sidebar: 'auto'
        },
        sidebar: {
            '/egua/': [
                '',
                'funcao'
            ]
        },
        logo: "/images/logo.png"
    },
    base: "/docs/"
}