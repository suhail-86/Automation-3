class FileUpload {
  constructor() {
    this.$uploadFile = () => $('//input[@class="input-file"]');
  }

  /**
   * Launching the url of the application
   * @param {string} url
   */
  async openUrl(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  /**
   * Uploading the file
   */
  async UploadFile() {
    await this.$uploadFile().setValue(
      await browser.uploadFile("./test/output.pdf")
    );
  }
}
export default new FileUpload();
