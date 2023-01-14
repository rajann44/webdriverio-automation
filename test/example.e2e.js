const LoginPage = require('../pages/login.page')
const SecurePage = require('../pages/secure.page')
const loginData = require('../testData/loginData')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login(loginData.adminEmail, loginData.password)
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        
    })
})


