const mainPage = require('../../pages/main.page')
const addRemovePage = require('../../pages/addRemove.page')
const loginPage = require('../../pages/login.page')

describe ('Add and Remove the element', () => {
    it('Add the element', async () => {
        await browser.url('/');
        await mainPage.clickAddRemoveElements();
        await addRemovePage.addAndDeleteElement();
    })
})