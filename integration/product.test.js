describe('product', () => {
    it('products base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=product-products--standard-products&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('product base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=product-product--standard-product&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('standard productCard base example, visually looks correct', async () => {
        await page.goto(
            'http://localhost:6006/iframe.html?id=product-productcard--standard-product-card&viewMode=story',
            {
                waitUntil: 'networkidle2',
            }
        )

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('isLoading productCard base example, visually looks correct', async () => {
        await page.goto(
            'http://localhost:6006/iframe.html?id=product-productcard--is-loading-product-card&viewMode=story',
            {
                waitUntil: 'networkidle2',
            }
        )

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('productFullDescription base example, visually looks correct', async () => {
        await page.goto(
            'http://localhost:6006/iframe.html?id=product-productfulldescription--standard-product-full-description&viewMode=story',
            {
                waitUntil: 'networkidle2',
            }
        )

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('productAccordion base example, visually looks correct', async () => {
        await page.goto(
            'http://localhost:6006/iframe.html?id=product-productaccordion--standard-product-accordion&viewMode=story',
            {
                waitUntil: 'networkidle2',
            }
        )

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })
})
