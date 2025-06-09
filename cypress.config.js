import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
      supportFile: false,
    },
  screenshotOnRunFailure: true,
});
