import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
test ('buying new products' , async({page}) => {

    await page.goto('http://127.0.0.1:5501/')

    for (let i =0; i<=5; i++){
    await page.locator("//h5[contains(., 'Producto 1')]/ancestor::div[contains(@class, 'card-body')]//button ").click()
    }
    
    await page.locator("//h5[contains(., 'Producto 2')]/ancestor::div[contains(@class, 'card-body')]//button ").click()
    await page.locator("//h5[contains(., 'Producto 3')]/ancestor::div[contains(@class, 'card-body')]//button ").click()

    await page.locator("button#view-cart-btn").click()


    const quantityproduct1 = await page.locator("//tbody[@id='cart-items']//td[contains(., 'Producto 1')]/ancestor::tr//td[3]").textContent()
    const quantityproduct2 = await page.locator("//tbody[@id='cart-items']//td[contains(., 'Producto 2')]/ancestor::tr//td[3]").textContent()
    const quantityproduct3 = await page.locator("//tbody[@id='cart-items']//td[contains(., 'Producto 3')]/ancestor::tr//td[3]").textContent()

    expect(quantityproduct1).toEqual('6')
    expect(quantityproduct2).toEqual('1')
    expect(quantityproduct3).toEqual('1')

    await page.locator("id=checkout-btn").click()

    await page.locator("id=name").fill(faker.person.fullName())
    await page.locator("id=email").fill(faker.internet.email())
    await page.locator("id=address").fill(faker.location.streetAddress())

    await page.locator("//a[@href='#paymentInfo']").click()

    await page.locator("id=card-number").fill(faker.finance.creditCardNumber())
    await page.locator("id=card-expiry").fill('12-2025')
    await page.locator("id=card-cvc").fill(faker.finance.creditCardCVV())

    await page.locator("id=place-order-btn").click()

})