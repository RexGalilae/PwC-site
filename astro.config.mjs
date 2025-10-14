// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://RexGalilae.github.io',
  base: '/PwC-site',
  image: {
    // TODO: Figure out how to set up sharp using PNPM
    service: passthroughImageService(),
    responsiveStyles: true,
  },
  integrations: [
    starlight({
      title: 'Program with Conscience (PwC)',
      logo: {
        src: './src/assets/ion-logo.svg',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/RexGalilae/PwC-site',
        },
      ],
      sidebar: [
        {
          label: '[hugeicons:home-01] Home',
          link: '/',
        },
        {
          label: '[hugeicons:left-to-right-list-bullet] Features',
          link: '/features/',
        },
        {
          label: '[hugeicons:book-open-02] Guides',
          autogenerate: {
            directory: 'guides',
          },
        },
        {
          label: '[hugeicons:crazy] Real-life Cases',
          autogenerate: {
            directory: 'real-life-cases',
          },
        },
        {
          label: '[hugeicons:delivery-box-02] Resources',
          autogenerate: {
            directory: 'resources',
          },
        },
      ],
      components: {
        PageTitle: './src/components/CustomPageTitle.astro',
      },
      customCss: ['./src/styles/theme.css'],
      expressiveCode: {
        themes: ['github-dark'],
      },
      pagination: false,
      lastUpdated: true,
      plugins: [
        ion({
          icons: {
            iconDir: './src/icons',
          },
          overrides: {
            PageTitle: false,
          },
        }),
      ],
    }),
    icon(),
  ],
  output: 'static',
});
