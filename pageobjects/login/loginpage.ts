import {Locator, Page} from '@playwright/test'

export class LoginPage{

private readonly usernameTextbox: Locator
private readonly passwordTextbox: Locator
private readonly loginbutton: Locator

constructor(page: Page){

    this.usernameTextbox = page.locator('input#username')
    this.passwordTextbox = page.locator('input#password')
    this.loginbutton = page.locator('//button[@type=\'submit\']')
}

async fillusername(username:string){
   await this.usernameTextbox.fill('username')
}

async fillpassword(password:string){
    await this.passwordTextbox.fill('password')
}

async clickonLoginButton(){
    await this.loginbutton.click()
}

async doLogin(username:string, password:string){
    await this.fillusername(username)
    await this.fillpassword(password)
    await this.clickonLoginButton()
}





}