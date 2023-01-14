class KeyboardAction {

    async clearInputField(locator){
        await locator.click()
        await browser.keys(['Command', 'a'])
        await browser.keys(['Backspace'])
    }

}

module.exports = new KeyboardAction();