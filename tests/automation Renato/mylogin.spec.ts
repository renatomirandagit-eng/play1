import {test, expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
import { LoginPage } from '../../pageobjects/login/loginpage';
test ('correct login' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')

const loginpage = new LoginPage(page)
await loginpage.fillusername()
await loginpage.fillpassword()
await loginpage.clickonLoginButton()
});

test ('test labels' , async({page}) => {
await page.goto('http://127.0.0.1:5500/login.html')
const label_inicio = await page.getByRole('heading', { name: 'Inicio de sesión' }).textContent()
const label_nombre_usuario =  await page.getByText('Nombre de usuario:').textContent()
const label_contraseña =  await page.getByText('Contraseña:').textContent()
const label_button = await page.getByRole('button', { name: 'Iniciar sesión' }).textContent()

expect(label_inicio).toEqual('Inicio de sesión')
expect(label_nombre_usuario).toEqual('Nombre de usuario:')
expect(label_contraseña).toEqual('Contraseña:')
expect(label_button).toEqual('Iniciar sesión')
});

test ('wrong Password' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')
await page.locator('id=username').fill('user')
await page.locator('id=password').fill(faker.internet.password())
await page.locator('//button[@type=\'submit\']').click()
await page.pause()

});

test ('wrong Username' , async({page}) => {

await page.goto('http://127.0.0.1:5500/login.html')
await page.locator('id=username').fill('usertest')
await page.locator('id=password').fill('pass')
await page.locator('//button[@type=\'submit\']').click()
await page.pause()

});