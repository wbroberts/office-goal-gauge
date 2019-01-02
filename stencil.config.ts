import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'merakiofficegoals',
  outputTargets: [
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  bundles: [
    { components: ['mki-office-goals-chart'] },
    { components: ['mki-office-goals'] }
  ]
};
