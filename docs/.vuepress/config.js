module.exports = {
    title: 'Usefull tools',
    description: "A demo documentation using VuePress",
    themeConfig:{
        nav: [
            { text: 'EMAILING', link: '/email/' },
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        sidebar: [  
            {
              title: 'Email',
              collapsable: true,
              children: [
                  '/email/'
              ]
            },
            {
              title: 'Counter',
              collapsable: true,
              children: [
                '/counter/counter-app'
              ]
            },
            {
              title: 'API Guide',
              collapsable: true,
              children: [
                  '/guide/guide',
                  '/guide/api'
              ]
            }
          ]
    }
}