import FileUploads from "../pageobjects/file-upload.js";
import DocCreation from "../pageobjects/document-creation.js";
describe("Create a pdf file and upload it", () => {
  it("Open URL and load the application", async () => {
    await FileUploads.openUrl(
      "https://www.techlistic.com/p/selenium-practice-form.html"
    );
  });

  it("Create a Pdf file", async () => {
    await DocCreation.creatingNewDocument();
  });

  it("Upload the file", async () => {
    await browser.scroll(0, 600);
    await FileUploads.UploadFile("./test/out.pdf");
    await browser.pause(4000);
  });
});
