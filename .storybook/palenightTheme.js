import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'My custom storybook',
  brandUrl: 'https://google.com',
  brandImage: 'https://placehold.it/350x150',
  colorPrimary: '#A6ACCD',
  colorSecondary: '#414863',

  // UI
  appBg: '#292D3E',
  appContentBg: '#292D3E',
  appBorderColor: '#717CB470',
  appBorderRadius: 4,
  
  // Toolbar default and active colors
  barTextColor: '#202331',
  barSelectedColor: '#292D3E',
  barBg: '#676E95',
  
  // Text colors
  textColor: '#A6ACCD',
  textInverseColor: '#FFFFFF',
  
  // Form colors
  inputBg: '#292D3E',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#A6ACCD',
  inputBorderRadius: 4,
  
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
});
