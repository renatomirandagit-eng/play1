import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
import { TIMEOUT } from 'dns';
import { setTimeout } from 'timers/promises';
test ('validate labels text' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')
await page.locator('id=username').fill('user')
await page.locator('id=password').fill('pass')
await page.locator('//button[@type=\'submit\']').click()
await page.pause()

const label1 = await page.getByRole('heading', { name: 'Transacciones' }).textContent()
const label2 = await page.getByRole('columnheader', { name: 'Fecha' }).textContent()
const label3 = await page.getByRole('columnheader', { name: 'Monto' }).textContent()
const label4 = await page.getByRole('columnheader', { name: 'Descripción' }).textContent()
const label5 = await page.getByRole('columnheader', { name: 'Acciones' }).textContent()

expect(label1).toEqual('Transacciones')
expect(label2).toEqual('Fecha')
expect(label3).toEqual('Monto')
expect(label4).toEqual('Descripción')
expect(label5).toEqual('Acciones')

});

test ('validate Add Transaction' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')
await page.locator('id=username').fill('user')
await page.locator('id=password').fill('pass')
await page.locator('//button[@type=\'submit\']').click()

await page.waitForLoadState('load')

for(let i =0; i<=4; i++ ){
await page.locator("//button[contains(., 'Añadir transacción')]").click()
await page.waitForLoadState('load')
await page.locator('id=date').fill('2023-12-31')
await page.locator('id=amount').fill(faker.finance.accountNumber())
await page.locator('id=description').fill(faker.animal.cat())
await page.locator("//button[contains(., 'Guardar')]").click()
}
await page.pause()

});



test ('validate Delete Transaction' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')
await page.locator('id=username').fill('user')
await page.locator('id=password').fill('pass')
await page.locator('//button[@type=\'submit\']').click()

await page.waitForLoadState('load')
await page.locator("//button[contains(., 'Añadir transacción')]").click()
await page.waitForLoadState('load')
await page.locator('id=date').fill('2023-12-31')
await page.locator('id=amount').fill(faker.finance.accountNumber())
await page.locator('id=description').fill(faker.animal.cat())
await page.locator("//button[contains(., 'Guardar')]").click()

await page.waitForLoadState('load')
await page.locator("//button[contains(., 'Borrar')]").click()
await page.pause()
});

test ('validate Scroll buttons' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')
await page.locator('id=username').fill('user')
await page.locator('id=password').fill('pass')
await page.locator('//button[@type=\'submit\']').click()

await page.waitForLoadState('load')

for(let i =0; i<=15; i++ ){
await page.locator("//button[contains(., 'Añadir transacción')]").click()
await page.waitForLoadState('load')
await page.locator('id=date').fill('2023-12-31')
await page.locator('id=amount').fill(faker.finance.accountNumber())
await page.locator('id=description').fill(faker.animal.cat())
await page.locator("//button[contains(., 'Guardar')]").click()
}

await page.getByRole('link', { name: '2' }).click()
await page.getByRole('link', { name: '3' }).click()

await page.pause()

});


test ('validate Edit Transaction' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')
await page.locator('id=username').fill('user')
await page.locator('id=password').fill('pass')
await page.locator('//button[@type=\'submit\']').click()

await page.waitForLoadState('load')
await page.locator("//button[contains(., 'Añadir transacción')]").click()
await page.waitForLoadState('load')
await page.locator('id=date').fill('2023-12-31')
await page.locator('id=amount').fill(faker.finance.accountNumber())
await page.locator('id=description').fill(faker.animal.cat())
await page.locator("//button[contains(., 'Guardar')]").click()

await page.waitForLoadState('load')
await page.locator("//button[contains(., 'Editar')]").click()

await page.waitForLoadState('load')
await page.locator('id=date').fill('2023-10-31')
await page.locator('id=amount').fill('75000')
await page.locator('id=description').fill('Test  Edit')
await page.locator("//button[contains(., 'Guardar')]").click()

await page.pause()
});