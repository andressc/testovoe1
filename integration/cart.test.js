describe('cart', () => {
    it('cart base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=cart-cart--standard-cart&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('cartCard base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=cart-cartcard--standard-cart-card&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('cartTable base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=cart-carttable--standard-cart-table&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('cartForm base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=cart-cartform--standard-cart-form&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })
})
