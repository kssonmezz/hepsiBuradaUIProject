Feature('My First Test');


Scenario('Senaryo 1 @senaryo1', async({ I, mainPage, productDetailPage }) => {
I.amOnPage("http://hepsiburada.com");
await mainPage.searchAndNavigateProduct();
productDetailPage.checktheProductDetailPageExist();
I.wait(10);
productDetailPage.checkReviewPage();
let checkReview=await I.grabNumberOfVisibleElements(productDetailPage.productDetail);
if(checkReview>0){
    productDetailPage.chooseNewestReview();
    I.wait(10);
    productDetailPage.clickThumsUp();
    I.see('Teşekkür Ederiz.')
}
});

Scenario('Senaryo 2 @senaryo2', async({ I, mainPage, productDetailPage, userEntryPage }) => {
    I.amOnPage("http://hepsiburada.com");
    await mainPage.searchAndNavigateProduct();
    I.wait(3);
    let checkBegen= await I.grabNumberOfVisibleElements(productDetailPage.begenButton);
        if(checkBegen>0) {
            I.scrollIntoView(productDetailPage.begenButton);
            I.click(productDetailPage.begenButton);
            I.wait(3);
            userEntryPage.login();
            I.waitForElement(productDetailPage.begendinButton,50);
            I.waitForVisible(productDetailPage.begendinButton);
            I.seeElement(productDetailPage.begendinButton);
            
        }
    
   
});

