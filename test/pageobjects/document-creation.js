import PDFDocument from "pdfkit";
import fs from "fs";
const doc = new PDFDocument();

class DocumentCreation {
  async creatingNewDocument() {
    await doc.pipe(fs.createWriteStream("./test/output.pdf"));
    await doc.end();
  }
}
export default new DocumentCreation();
