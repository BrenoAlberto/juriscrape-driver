import puppeteer, { Browser } from "puppeteer";

export class PuppeteerBrowser {
    async create(): Promise<Browser> {
        return await puppeteer.launch({
            headless: 'new',
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
}