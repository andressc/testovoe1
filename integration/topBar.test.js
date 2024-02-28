describe('topBar', () => {
    it('topBar base example, visually looks correct', async () => {
        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })
})
