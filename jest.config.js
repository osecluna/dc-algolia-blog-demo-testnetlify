module.exports = {
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],
  collectCoverage: true
};
