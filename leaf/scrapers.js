// const puppeteer = require('pippeteer');

// async function scrapeProduct(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     const [el] = await page.$x('/html/body/div[3]/div/div[2]/div[1]/div')
//     const src = await el.getProperty('src');
//     const srcTxt = await src.jsonValue();

//     console.log({srcTxt})

// }

// let date = new Date();
// let dateTime = date.getFullYear() + '-' +
//     (date.getMonth() + 1).toString().padStart(2, '0') + '-' +
//     (date.getDate()).toString().padStart(2, '0')

// scrapeProduct('https://magma.esdm.go.id/v1/gunung-api/laporan/search/q?code=MER&start=2022-02-22&end=' + dateTime)
