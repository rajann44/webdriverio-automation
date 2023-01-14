const Page = require("./page");

class AddRemovePage extends Page{

    get btnAddElement(){return $('//button[text()="Add Element"]');}
    get btnDelete(){return $('//button[text()="Delete"]');}

    async addAndDeleteElement(){
        await this.btnAddElement.click()
        await this.btnDelete.click();
    }

}

module.exports = new AddRemovePage();