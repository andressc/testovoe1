describe('components', () => {
    it('linkTypography base example, visually looks correct', async () => {
        await page.goto(
            'http://localhost:6006/iframe.html?id=components-linktypography--standard-link-typography&viewMode=story',
            {
                waitUntil: 'networkidle2',
            }
        )

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('notFound base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=components-informationpage--not-found&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('emotyCart base example, visually looks correct', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=components-informationpage--empty-cart&viewMode=story', {
            waitUntil: 'networkidle2',
        })

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })

    it('purchaseSuccessful base example, visually looks correct', async () => {
        await page.goto(
            'http://localhost:6006/iframe.html?id=components-informationpage--purchase-successful&viewMode=story',
            {
                waitUntil: 'networkidle2',
            }
        )

        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })
})
