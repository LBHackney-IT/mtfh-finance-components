const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    coverageReporters: ['json-summary', 'text', 'lcov'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx'],
    moduleNameMapper: {
        "\\.(css|scss|sass)$": "identity-obj-proxy"
    },
};

module.exports = customJestConfig;