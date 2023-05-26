class Flow2{
    constructor (){
        this.$searchOption=()=>$('//input[@ng-model="search.name"]')
        this.$clickOnButton=()=>$('//span[text()="Tamil Nadu, India"]')
        this.$haveLocation=()=>$('//li[text()="Chennai, Tamil Nadu, India"]')
        this.$selectMaxFasion = () => $('//h3[text()="MAX FASHIONS"]')
        this.$selectProduct = () => $('(//h2[text()="White shirt"])[1]/ancestor::div[@class="inner_res_menu_food"]//span[text()="Add"]')
        this.$cartPopUp = () => $('//div[@class="modal-body"]')
        this.$cartHeader = () => $('//div[@class="modal-inner-wrap restaurant-detail-popup new_wrapper_overflow"]//h2[text()="White shirt"]')
        this.$incrementingProduct = () => $('//button[@class="btn btn-default btn-number"]')
        this.$checkingQuantity = () => $('//input[@name="addons_quantity"]')
        this.$addToCart = () => $('//button[text()="ADD TO CART"]')
    }
    
    /**
     * Setting the location
     * @param {string} url 
     */
    async openUrl(url) {
    await browser.maximizeWindow();
    await browser.url(url);
      }
    
      /**
       * Entering the location
       * @param {} Location 
       */
      async locationSearch(Location){
        await this.$searchOption().setValue(Location);
        await this.$clickOnButton().click();
        await this.$selectMaxFasion().waitForDisplayed({timeout: 10000, interval:true,timeoutMsg: 'time out fail for verification pop-up'});  
      }

      async purchasingOption(){
        await this.$selectMaxFasion().click();
      }

      async addToCartPopUp(count){
        await this.$selectProduct().click();
        await this.$cartPopUp().waitForDisplayed({timeout: 10000, interval:true,timeoutMsg: 'time out fail for verification pop-up'}); 
        for (let i = 0; i < count; i++) {
            await this.$incrementingProduct().click();
        }
      }
    
      async addToCart(){
        await this.$addToCart().click();
      }

}
export default new Flow2()
