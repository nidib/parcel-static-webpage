module.exports = {
	moduleDirectories: [
		'node_modules',
		'src'
	],
	testPathIgnorePatterns: [
		'<rootDir>/.parcel-cache/',
		'<rootDir>/node_modules/',
		'<rootDir>/dist/',
		'<rootDir>/build/'
	],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.js',
		'!<rootDir>/src/utils/constants/**/*.js'
	]
};