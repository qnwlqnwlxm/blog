module.exports = {
  title: 'MBIO blog',
  description: 'mbio 개발 관련 블로그',
  base: '/blog/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    sidebar: [
      {
        title: 'guide', // required
        path: '/guide', // optional, which should be a absolute path.
        collapsable: true // optional, defaults to true
      },
      {
        title: 'Apaceh NiFi', // required
        path: '/ApacheNiFi/', // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: ['/']
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
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/qnwlqnwlxm/'
      }
    ]
  }
}
