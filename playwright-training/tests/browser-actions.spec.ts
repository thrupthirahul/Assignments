import { test, expect, chromium } from '@playwright/test';

/*
launch()
Controls the browser process. Browser-level settings
headless,slowMo, channel,proxy,devtools args ,timeout

newContext()
Controls the browser session. Session-level settings
viewport
**/
test('Broswer Actions', async () => {

    //launch the broswer engine and its create the real broswer.
    const browserEngine= await chromium.launch({headless: false, 
        channel: "chrome",
        downloadsPath: './downloads',
        args: ['--start-maximized','--disable-notifications','--disable-popup-blocking','--ignore-certificate-errors']
    });

    //create the broswer context within the broswer.
    const broswerContext=await browserEngine.newContext({viewport: null});
    
    //clear the cookies within the broswer context.
    await broswerContext.clearCookies();
    
    //create a new page within the broswer context.
    const page=await broswerContext.newPage();

    //set the viewportsize
    //await page.setViewportSize({width: 1920, height: 1080});
    
    //nagivate to the given url.
    await page.goto("https://playwright.dev/");
    
    //get title of current page
    const title:string=await page.title();
    console.log(title);

    //verify title
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

    //create the new page with in the same broswer context.
    const newPage= await broswerContext.newPage();
    await newPage.goto("https://playwright.dev/");

    
    await newPage.goBack();
    
    await newPage.goForward();
    
    await newPage.reload();

    await page.bringToFront();

    //Close the all pages
    await page.close();
    await newPage.close();

    //Close the broswer context
    await broswerContext.close();

    //Close the broswer 
    await browserEngine.close();
});

/*
Object	        Purpose
Browser	        Actual browser process
BrowserContext	Isolated browser session
Page	        Browser tab

**/