import * as puppeteer from 'puppeteer';

interface Args {
  readonly url: string;
}

export async function generatePdf({ url }: Args) {
  console.log(`Opening ${url}`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle2',
  });

  console.log(`Generating pdf from ${url}`);
  const pdf = await page.pdf({
    format: 'A4',
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
  });

  console.log('Download succeeded!');

  await browser.close();

  return pdf;
}
