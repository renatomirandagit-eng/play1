import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
test ('verify Labels text' , async({page}) => {

await page.goto('http://127.0.0.1:5501/')

const label1 = await page.getByRole('heading', { name: 'Selecciona los productos' }).textContent()
const label2 = await page.getByRole('heading', { name: 'Producto 1' }).textContent()
const label3 = await page.getByRole('heading', { name: 'Producto 2' }).textContent()
const label4 = await page.getByRole('heading', { name: 'Producto 3' }).textContent()
const label5 = await page.getByRole('heading', { name: 'Tu carrito' }).textContent()
const label6 = await page.getByRole('columnheader', { name: 'Producto' }).textContent()
const label7 = await page.getByRole('columnheader', { name: 'Precio' }).textContent()
expect(label1).toEqual('Selecciona los productos')
expect(label2).toEqual('Producto 1')
expect(label3).toEqual('Producto 2')
expect(label4).toEqual('Producto 3')
expect(label5).toEqual('Tu carrito')
expect(label6).toEqual('Producto')
expect(label7).toEqual('Precio')
})


test ('verify Eliminar' , async({page}) => {

await page.goto('http://127.0.0.1:5501/')
await page.locator("//h5[contains(., 'Producto 1')]/ancestor::div[contains(@class, 'card-body')]//button ").click()
await page.waitForLoadState('load')
await page.locator("//button[contains(., 'Eliminar')]").click()
await page.pause()
});


//pendiente de testear, hay que ver como sacar el total//
test ('verify Total' , async({page}) => {

await page.goto('http://127.0.0.1:5501/')
await page.waitForLoadState('load')
await page.locator("//h5[contains(., 'Producto 1')]/ancestor::div[contains(@class, 'card-body')]//button ").click()
await page.locator("//h5[contains(., 'Producto 2')]/ancestor::div[contains(@class, 'card-body')]//button ").click()
await page.locator("//h5[contains(., 'Producto 3')]/ancestor::div[contains(@class, 'card-body')]//button ").click()


const quantityproduct1 = await page.locator("//tbody[@id='cart-items']//td[contains(., '$10.00')]/ancestor::tr//td[3]").textContent()
const quantityproduct2 = await page.locator("//tbody[@id='cart-items']//td[contains(., '$20.00')]/ancestor::tr//td[3]").textContent()
const quantityproduct3 = await page.locator("//tbody[@id='cart-items']//td[contains(., '$30.00')]/ancestor::tr//td[3]").textContent()

expect(quantityproduct1).toEqual('$10.00')

await page.pause()
});