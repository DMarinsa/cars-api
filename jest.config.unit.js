// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: "ts-jest",
  testEnvironment: 'node',
  testMatch: [
    "**/test/**/*unit.[jt]s?(x)",
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  verbose: true,
  modulePathIgnorePatterns:['build'],
  setupFiles: ['./test/jest.setup.js'],
};
