const { I } = inject();

module.exports = {

  // insert your locators and methods here

  searchField: "(//div [contains(@class,'SearchBoxOld')])[1]",
  inputField: "(//div [contains(@class,'SearchBoxOld')])[1]//input",
  productList: "//li[contains(@class,'productListContent')]//div//a",

  searchAndNavigateProduct :async function(){

    I.waitForElement(this.searchField);
    I.click(this.searchField)
    I.waitForElement(this.inputField,5000);
    I.fillField(this.inputField,"iphone");
    I.pressKey('Enter');
    I.waitForElement(this.productList);
    const productList = await I.grabAttributeFromAll(this.productList,'href');
    const randomProductIndex = Math.floor(Math.random() * productList.length);
    const selectedProductUrl = productList[randomProductIndex];
    I.amOnPage("http://hepsiburada.com"+selectedProductUrl);
  }





}
