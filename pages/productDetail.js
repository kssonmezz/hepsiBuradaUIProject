const { I } = inject();

module.exports = {

  productDetailField:'#productDetailsCarousel',
  reviewField: '#reviewsTabTrigger',
  chooseArrowField: '.arrowUpOrange',
  newestField: "//div[contains(text(),'En yeni değerlendirme')]",
  likeButton: "(//div[contains(@class,'thumbsUp')])[1]",

  productDetail: "//span[contains(@class,'hermes-ReviewCard-module')]",

  begenButton: "//div[contains(@class,'customerAccount-Like')]//div[contains(text(),'Beğen')]",
  begendinButton: "//div[contains(@class,'customerAccount-Like')]//div[contains(text(),'Beğendin')]",


  // insert your locators and methods here
  checktheProductDetailPageExist: function(){

    I.waitForElement(this.productDetailField);
    I.waitForVisible(this.productDetailField,10);
    I.waitForElement(this.reviewField,5);
    I.waitForVisible(this.reviewField,10);
  },

  checkReviewPage: function(){
    I.scrollTo(this.reviewField);
    I.click(this.reviewField);
  },

  chooseNewestReview: function(){
    I.waitForElement(this.chooseArrowField);
    I.scrollTo(this.chooseArrowField);
    I.click(this.chooseArrowField);
    I.scrollTo(this.newestField);
    I.waitForElement(this.newestField);
    I.click(this.newestField);
  },

  clickThumsUp: function(){
    I.waitForElement(this.likeButton);
    I.scrollTo(this.likeButton);
    I.click(this.likeButton);
  }

}
