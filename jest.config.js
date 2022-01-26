const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    coverageReporters: ['json-summary', 'text', 'lcov'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
};

module.exports = customJestConfig;