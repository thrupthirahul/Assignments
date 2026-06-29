import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('frames', async ({ page }) => {

    //launch the application 
    await page.goto('https://demoqa.com/frames');

    //wait for page to load.
    //page.waitForLoadState('load');
    const heading: Locator = await page.locator(`//h1[text() ='Frames']`);
    console.log(`header: ${await heading.innerText()}`);

    //frame1
    const frame1: FrameLocator = await page.frameLocator(`#frame1`);
    //locator inside frame 1
    const sampleHeading = await frame1.locator(`#sampleHeading`);
    console.log(`sampleHeading: ${await sampleHeading.innerText()}`);

    //frame2 
    const frame2: FrameLocator = await page.frameLocator(`#frame2`);

    //locator inside frame 1
    const sampleHeading2 = await frame2.locator(`#sampleHeading`);
    console.log(`sampleHeading: ${await sampleHeading2.innerText()}`);

    console.log(`header: ${await heading.innerText()}`);

});

test('nested frames', async ({ page }) => {

    await page.goto('https://demoqa.com/nestedframes');
    const header: Locator = await page.locator(`//h1[text() ='Nested Frames']`);
    console.log(`header: ${await header.innerText()}`);

    //frame1
    const frame1: FrameLocator = await page.frameLocator(`#frame1`);

    //inner frame of frame 1
    const innerFrame: FrameLocator = await frame1.frameLocator(`//iframe[contains(@srcdoc,'Child Iframe')]`);
    const sampleHeading: Locator = await innerFrame.locator(`//p[text() ='Child Iframe']`);
    console.log(`sampleheading: ${await sampleHeading.innerText()}`);
});

