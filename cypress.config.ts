import { defineConfig } from 'cypress';
import { readFileSync } from 'node:fs';

const angularConfig = JSON.parse(readFileSync('angular.json', 'utf8'));
const buildOptions = angularConfig.projects.app.architect.build.options;

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8100',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts'
  },
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'src',
          buildOptions: {
            ...buildOptions,
            outputPath: 'dist/cypress-component',
            main: buildOptions.browser
          }
        }
      }
    },
    specPattern: 'cypress/component/**/*.cy.ts',
    supportFile: 'cypress/support/component.ts'
  }
});
