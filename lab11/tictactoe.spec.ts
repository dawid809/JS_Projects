import * as puppeteer from "puppeteer";

jest.setTimeout(20000)

describe("Google", () => {
    beforeAll(async () => {});
  
    it('should be titled "Google"', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
          });
      const page = await browser.newPage();
      page.setViewport({ width: 1280, height: 1200 });
      await page.setDefaultNavigationTimeout(11000);
      await page.goto(`http://127.0.0.1:5500/lab4and5/dist/bundle.html`);
      await page.click(`li`, { delay: 1000 });
      await page.click(`div[tabindex="0"]`, { delay: 500 });
      await page.click(`div[tabindex="1"]`, { delay: 500 });

      await page.click(`div[tabindex="3"]`, { delay: 500 });
      await page.click(`div[tabindex="6"]`, { delay: 500 });

      await page.click(`div[tabindex="4"]`, { delay: 500 });
      await page.click(`div[tabindex="8"]`, { delay: 500 });

      await page.click(`div[tabindex="5"]`, { delay: 500 });
      await page.waitForTimeout(5000)
      await page.screenshot({ path: "tictactoe.png"});
      await page.close();
    });
});