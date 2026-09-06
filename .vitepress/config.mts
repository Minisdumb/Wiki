import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Showcase",
  description: "A Website Showcasing various Projects that I made.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Video and Audio',
        items:[
          { text: 'Video Downloader', link: '/Video-Downloader' },
          { text: 'MP4 to MP3 Converter', link: '/MP4-to-MP3-Converter' },
          { text: 'Music Controller', link: '/Music_Controller'}
      ] },
      {text: 'Download', link:'https://github.com/Minisdumb'}

    ],

    sidebar: [
      {
        text: 'Media Processing',
        items: [
          { text: 'Video Downloader', link: '/Video-Downloader' },
          { text: 'MP4 to MP3 Converter', link: '/MP4-to-MP3-Converter' },
          { text: 'Music Controller', link: '/Music_Controller'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Minisdumb/Wiki' }
    ]
  }
})
