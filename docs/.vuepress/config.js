module.exports = {
  title: 'MBIO blog',
  description: 'mbio 개발 관련 블로그',
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  plugins: ['@vuepress/back-to-top'],
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
            sidebarDepth: 1, // optional, defaults to 1
            children: [
              {
                title: '프로젝트 생성', // required
                path: '/ApacheNiFi/Processor/make-project', // optional, which should be a absolute path.
                collapsable: true, // optional, defaults to true
                sidebarDepth: 1 // optional, defaults to 1
              }
            ]
          },
          {
            title: 'NiFi Custom ControllerService', // required
            path: '/ApacheNiFi/ControllerService/', // optional, which should be a absolute path.
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1 // optional, defaults to 1
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
    ]
  }
}
