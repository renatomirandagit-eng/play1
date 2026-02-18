import {test, expect} from '@playwright/test'
test ('login' , async({page}) => {

    await page.goto('http://127.0.0.1:5500/login.html')
    await page.locator('input#username').fill('user')
    await page.locator('input#password').fill('pass')
    await page.locator('//button[@type=\'submit\']').click()

    await page.waitForLoadState('load')
    await page.locator('//button[contains(text(), \'Añadir transacción\')]').click()

    await page.waitForLoadState('load')
    await page.locator('id=date').fill('2023-12-31')
    await page.locator('id=amount').fill('15500')
    await page.locator('id=description').fill('This is a test 1')
    //await page.locator('id=amount').fill('5000')
    await page.locator('//button[contains(text(), \'Guardar\')]').click()

    const actualdate = await page.locator ("//tbody[@id='transactions-list']//tr[1]//td[1]").textContent()
    const actualamount = await page.locator ("//tbody[@id='transactions-list']//tr[1]//td[2]").textContent()
    const actualdesc = await page.locator ("//tbody[@id='transactions-list']//tr[1]//td[3]").textContent()

    expect(actualdate).toEqual('2023-12-31')
    expect(actualamount).toEqual('15500')
    expect(actualdesc).toEqual('This is a test 1')



    await page.pause()
});







