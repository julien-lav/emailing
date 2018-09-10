module.exports = {
    title: 'Usefull tools',
    description: "A demo documentation using VuePress",
    themeConfig:{
        nav: [
            { text: 'EMAILING', link: '/email/' },
            { text: 'GIT', link: '/git/' },
            { text: 'COUNTER', link: '/counter/' },
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
              title: 'Git',
              collapsable: true,
              children: [
                  '/git/git',
                  '/git/api'
              ]
            },
            {
              title: 'Counter',
              collapsable: true,
              children: [
                '/counter/counter-app'
              ]
            }
            
          ]
    }
}