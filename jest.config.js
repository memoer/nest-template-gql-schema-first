/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*', 'libs/**/*'],
  coveragePathIgnorePatterns: ['libs/config/src/*', 'libs/etc/src/*'],

  // The directory where Jest should output its coverage files
  coverageDirectory: './coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'ts'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@app/src(|/.*)$': '<rootDir>/src/$1',
    '^@app/config(|/.*)$': '<rootDir>/libs/config/src/$1',
    '^@app/etc(|/.*)$': '<rootDir>/libs/etc/src/$1',
    '^@app/util(|/.*)$': '<rootDir>/libs/util/src/$1',
  },

  // The root directory that Jest should scan for tests and modules within
  rootDir: '.',

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: 'test-unit/.*\\.spec\\.ts$',

  // A map from regular expressions to paths to transformers
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },

  // Indicates whether each individual test should be reported during the run
  verbose: false,
};
