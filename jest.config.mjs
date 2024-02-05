/** @type {import('jest').Config} */
const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        diagnostics: {
          exclude: ['**'],
        },
      },
    ],
  },
  moduleNameMapper: {
    '@lodash/(.*)': '<rootDir>/src/$1',
    '@lodashInternal/(.*)': '<rootDir>/src/.internal/$1',
    '^(\\.{1,2}/.*)\\.[jt]s$': '$1',
  },
};

export default jestConfig;
