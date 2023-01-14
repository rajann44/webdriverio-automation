const Page = require("./page");

class MainPage extends Page{

    get addRemoveElements(){return $('//a[text()="Add/Remove Elements"]')}

    async clickAddRemoveElements(){
        await this.addRemoveElements.click()
    }

}

module.exports = new MainPage();