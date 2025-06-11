import baseConfig from './cypress.config.base.js';
import { defineConfig } from "cypress";

export default defineConfig({
  ...baseConfig,
  e2e: {
      baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
      supportFile: false,
      env: {
        email: 'dentest@gmail.com',
        password: 'Password1'
      },
    },
  screenshotOnRunFailure: true,
});
