import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Project Wiki",
  description: "This is the Wiki, where i show of all the Projects i made!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Video and Audio',
        items:[
          { text: 'Video Downloader', link: '/Video-Downloader' },
          { text: 'MP4 to MP3 Converter', link: '/MP4-to-MP3-Converter' }
      ] },

    ],

    sidebar: [
      {
        text: 'Video and Audio Processing',
        items: [
          { text: 'Video Downloader', link: '/Video-Downloader' },
          { text: 'MP4 to MP3 Converter', link: '/MP4-to-MP3-Converter' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Minisdumb/Wiki' }
    ]
  }
})
