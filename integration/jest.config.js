module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*.test.js$',
    setupFilesAfterEnv: ['./setupTests.js'],
    testEnvironmentOptions: {
        customSnapshotsDir: './__image_snapshots__',
    },
}
