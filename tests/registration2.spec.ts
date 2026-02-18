import {test, expect} from '@playwright/test'
test ('registration' , async({page}) => {

await page.goto('http://127.0.0.1:5500/register.html')

const name = 'Renato'
const lastname = 'test'
const age ='10'
const country = 'Colombia'
const email = 'renato@test.com'
const sex = 'M'

await page.locator("id=name").fill(name)
await page.locator("id=last-name").fill(lastname)
await page.locator("//label[contains(., 'Edad')]/following-sibling::input").fill(age)
await page.locator("id=country").selectOption(country)
await page.locator(`input[value='${sex}']`).click()
await page.locator("id=email").fill(email)
await page.locator("input[value='Lunes']").click()
await page.locator("id=picture").setInputFiles('images/nike.png')

const [summaryPage] = await Promise.all(
    [
        page.waitForEvent('popup'),
        page.locator("id=save-btn").click()

    ]
)

await summaryPage.waitForLoadState()
await expect(summaryPage).toHaveTitle('Summary')


const currentname = await summaryPage.locator("//strong[contains(., 'Nombre')]/ancestor::p").textContent()
const currentlastname = await summaryPage.locator("//strong[contains(., 'Apellido')]/ancestor::p").textContent()

expect(currentname).toContain(name)
expect(currentlastname).toContain(lastname)

//await page.pause()

})