module.exports = {
  title: 'Phonethic',
  tagline: 'Ethereum staking on your old phone',
  url: 'https://phonethic.protoman.net',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'Roy Stoof',
  projectName: 'Phonethic',
  themeConfig: {
    navbar: {
      title: 'Phonethic',
      logo: {
        alt: 'Phonethic',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
        href: '/docs'
      },
      links: [
        {
          href: 'https://etherscan.io/address/0xc299a7423e484b40796aca722f9825ceaa4d730f',
          label: 'Donations: 0xC299A7423e484b40796aCA722f9825ceAA4D730f',
          position: 'right',
        },
        {
          href: 'https://twitter.com/Phonethic_',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/Shammah/Phonethic',
          label: 'GitHub',
          position: 'right',
        }
      ]
    },
    defaultDarkMode: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Shammah/Phonethic/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
