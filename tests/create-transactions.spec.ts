import {test, expect} from '@playwright/test'
test ('create transactions' , async({page}) => {

    await page.goto('http://127.0.0.1:5500/login.html')
    await page.locator('input#username').fill('user')
    await page.locator('input#password').fill('pass')
    await page.locator('//button[@type=\'submit\']').click()

    await page.waitForLoadState('load')
   

   for(let i = 0;  i<=30; i++ ){   

    await page.locator('//button[contains(text(), \'Añadir transacción\')]').click()
    await page.waitForLoadState('load')
    await page.locator('id=date').fill('2023-12-31')
    await page.locator('id=amount').fill('15500')
    await page.locator('id=description').fill('This is a test 1')
    await page.locator('//button[contains(text(), \'Guardar\')]').click()

   }

   await page.pause()

})




