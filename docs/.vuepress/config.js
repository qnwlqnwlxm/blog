module.exports = {
  title: 'MBIO blog',
  description: 'mbio 개발 관련 블로그',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons'
      }
    ]
  ],
  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/plugin-medium-zoom': {
        selector: 'img'
    },
},
  themeConfig: {
    sidebar: [
      {
        title: 'intro', // required
        path: '/intro', // optional, which should be a absolute path.
        collapsable: true // optional, defaults to true
      },
      {
        title: 'Apaceh NiFi', // required
        path: '/ApacheNiFi/', // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        // children: ['/ApacheNiFi/Processor/', '/ApacheNiFi/ControllerService/']
        children: [
          {
            title: 'NiFi Custom Processor', // required
            path: '/ApacheNiFi/Processor/', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0, // optional, defaults to 1
            children: [
              {
                title: '프로젝트 생성', // required
                path: '/ApacheNiFi/Processor/make-project',
              },
              {
                title: 'kaggle-bitcoin-1', // required
                path: '/ApacheNiFi/Processor/kaggle-bitcoin-1',
              },
              {
                title: 'kaggle-bitcoin-2', // required
                path: '/ApacheNiFi/Processor/kaggle-bitcoin-2',
              },
              {
                title: 'kaggle-bitcoin-3', // required
                path: '/ApacheNiFi/Processor/kaggle-bitcoin-3',
              },
              {
                title: 'kaggle-bitcoin-4', // required
                path: '/ApacheNiFi/Processor/kaggle-bitcoin-4',
              }
            ]
          },
          {
            title: 'NiFi Custom ControllerService', // required
            path: '/ApacheNiFi/ControllerService/', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0, // optional, defaults to 1
            children: [
              {
                title: '프로젝트 생성', // required
                path: '/ApacheNiFi/ControllerService/make-project-controller-service',
              },
              {
                title: 'HikariCPControllerService-1', // required
                path: '/ApacheNiFi/ControllerService/HikariCPControllerService-1',
              },
              {
                title: 'HikariCPControllerService-2', // required
                path: '/ApacheNiFi/ControllerService/HikariCPControllerService-2',
              },
              {
                title: 'HikariCPControllerService-3', // required
                path: '/ApacheNiFi/ControllerService/HikariCPControllerService-3',
              }
            ]
          }
        ]
      },
      {
        title: 'Spring', // required
        path: '/Spring/', // optional, which should be a absolute path.
        collapsable: true // optional, defaults to true
      },
      {
        title: 'Tech', // required
        path: '/Tech/', // optional, which should be a absolute path.
        collapsable: true // optional, defaults to true
      }
    ],
    nav: [
      {
        text: 'Intro',
        link: '/intro'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/qnwlqnwlxm/'
      }
    ],
    searchPlaceholder: 'Search...'
  }
}
