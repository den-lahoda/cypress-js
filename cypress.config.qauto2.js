import baseConfig from './cypress.config.base.js';
import { defineConfig } from "cypress";

export default defineConfig({
  ...baseConfig,
  e2e: {
      baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
      supportFile: false,
      env: {
        email: 'dentest2@gmail.com',
        password: 'Password1'
      },
    },
  screenshotOnRunFailure: true,
});
