import * as puppeteer from 'puppeteer';

jest.setTimeout(445000)

describe('Google', () => {
   beforeAll(async () => {
   });

   it('should be titled "Google"', async () => {
        const browser = await puppeteer.launch({ headless: false, slowMo: 30, })
        const context = await browser.createIncognitoBrowserContext();
     const page = await context.newPage();
     await page.goto('https://wsei.edu.pl/');
     await page.keyboard.press('Enter');
     await page.waitForTimeout(2000);
     await page.screenshot({path: 'screen.png'});
     //    await page.goto('https://google.com');
     //    await page.type('input[name=q]', "WSEI", {delay: 10} );
     //    await page.keyboard.press('Enter');
     //    await page.waitForSelector('#search');
     //    const result = await page.$$eval('h3', element => element[0].innerHTML);
     //    await expect(result).toContain("Wyższa Szkoła Ekonomii i Informatyki Kraków - Informatyka ...");
     //    await page.screenshot({path: 'screen.png'});
   }
   );
 });