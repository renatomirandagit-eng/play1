import {test, expect} from '@playwright/test'
import { AddTransactionPage } from '../../pageobjects/login/AdtransactionPage'
import {faker} from '@faker-js/faker'
test ('create transactions' , async({page}) => {

    
    await page.goto('http://127.0.0.1:5500/login.html')
    await page.locator('input#username').fill('user')
    await page.locator('input#password').fill('pass')
    await page.locator('//button[@type=\'submit\']').click()

    await page.waitForLoadState('load')
   

    const tdate = '2023-12-31'
    const tamount = '5000'
    const tdescription = faker.animal.horse()

    const addTransactionPage = new AddTransactionPage(page)
    await addTransactionPage.addTransaction(tdate, tamount, tdescription)
    

   await page.pause()

})