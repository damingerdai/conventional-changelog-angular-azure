export default {
  preset: 'ts-jest',
	rootDir: __dirname,
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
	testMatch: ['<rootDir>/test//**/*spec.[jt]s?(x)'],
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ]
};
