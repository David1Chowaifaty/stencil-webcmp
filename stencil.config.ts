import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-webcmp',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: './theme.css',
        },
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        {
          src: './theme.css',
        },
      ],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
