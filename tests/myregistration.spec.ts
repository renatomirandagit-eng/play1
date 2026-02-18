import {test, expect} from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/register.html');
  await page.getByRole('textbox', { name: 'Nombre:' }).fill('renato');
  await page.getByRole('textbox', { name: 'Apellido:' }).fill('miranda');
  await page.getByRole('spinbutton', { name: 'Edad:' }).fill('41');
  await page.getByLabel('País:').selectOption('Argentina');
  await page.getByRole('radio', { name: 'M' }).check();
  await page.getByRole('textbox', { name: 'Correo electrónico:' }).fill('renato@test.com');
  await page.getByRole('checkbox', { name: 'Lunes' }).check();
  await page.getByRole('checkbox', { name: 'Martes' }).check();
  await page.getByRole('checkbox', { name: 'Miercoles' }).check();
  await page.locator("id=picture").setInputFiles('images/nike.png')
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Guardar' }).click();
  
    const [summaryPage] = await Promise.all(
    [
        page.waitForEvent('popup'),
        page.locator("id=save-btn").click()

    ]
)

await summaryPage.waitForLoadState()
await expect(summaryPage).toHaveTitle('Summary')


await page.pause()


});