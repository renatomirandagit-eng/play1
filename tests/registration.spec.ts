import {test, expect} from '@playwright/test'
test ('registration' , async({page}, testInfo) => {

await page.goto('http://127.0.0.1:5500/register.html')

await page.locator("id=name").fill('Renato')
await page.locator("id=last-name").fill('Test')
await page.locator("//label[contains(., 'Edad')]/following-sibling::input").fill('50')
await page.locator("id=country").selectOption('Colombia')
await page.locator("input[value='M']").click()
await page.locator("id=email").fill('renato@hp.com')
await page.locator("input[value='Lunes']").click()
await page.locator("id=picture").setInputFiles('images/nike.png')

await testInfo.attach('register1', {
    body: await page.screenshot(),
    contentType: 'image/png'
})

//await page.screenshot({path: 'screenshots/register1.png'})

const [summaryPage] = await Promise.all(
    [
        page.waitForEvent('popup'),
        page.locator("id=save-btn").click()

    ]
)

await summaryPage.waitForLoadState()
await expect(summaryPage).toHaveTitle('Summary')

await testInfo.attach('register1', {
    body: await summaryPage.screenshot(),
    contentType: 'image/png'
})

//await summaryPage.screenshot({path: 'screenshots/register2.png', fullPage: true})

await page.pause()

})
