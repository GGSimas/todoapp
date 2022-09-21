module.exports = {
    preset: "jest-expo",
    testPathIgnorePatterns: [
        "/node_modules/",
        "/android/",
        "/ios/"
    ],
    setupFilesAfterEnv: [
        "@testing-library/jest-native/extend-expect",
        "jest-styled-components"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.tsx",
        "!src/**/*.spec.tsx"
    ],
    coverageReporters: [
        'lcov'
    ],
    moduleNameMapper: {
        "\\.svg": "<rootDir>/__mocks__/svgMock.js"
    }
}