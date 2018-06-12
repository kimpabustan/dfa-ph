const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://www.passport.gov.ph/appointment/individual/site', {waitUntil: 'networkidle2'});
    await page.select('select[name="SiteID"]');
    await page.waitFor(1000);
    await page.select('select[name="SiteID"]', '27');
    await page.waitFor(1000);
    await page.click('body > div.body-content > div > div > div.col-lg-9 > div > form > div:nth-child(62) > div:nth-child(2) > div > div:nth-child(2) > button');
    await page.waitFor(5000);
    
    while (true) {
    await page.select('select[name="SiteID"]', '10');
    await page.waitFor(5000);
    await page.select('select[name="SiteID"]', '4');
    await page.waitFor(5000);
    await page.select('select[name="SiteID"]', '6');
    await page.waitFor(5000);
    await page.select('select[name="SiteID"]', '423');
    await page.waitFor(5000);
    await page.select('select[name="SiteID"]', '7');
    await page.waitFor(5000);
    await page.select('select[name="SiteID"]', '8');
    await page.waitFor(5000);
    await page.select('select[name="SiteID"]', '9');
    await page.waitFor(5000);
    await page.select('select[name="SiteID"]', '27');
    await page.waitFor(5000);
}



    browser.close();   
    return result;
};

scrape().then((value) => {
    console.log(value);
});