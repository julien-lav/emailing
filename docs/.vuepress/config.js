module.exports = {
    title: 'Usefull tools',
    description: "A demo documentation using VuePress",
    themeConfig:{
        nav: [
            { text: 'EMAILING', link: '/email/' },
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GIT', link: '/git/' },
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
              title: 'Git',
              collapsable: true,
              children: [
                  '/git/git',
                  '/git/api'
              ]
            }
          ]
    }
}