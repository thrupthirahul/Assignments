import { test, expect, Locator, Page } from '@playwright/test';

test('Windows', async ({ context, page }) => {

    //Launch application.
    await page.goto('https://demoqa.com/browser-windows');

    //Verify page load
    const BrowserWindowsMessage: Locator = await page.locator(`//h1[text() ='Browser Windows']`);
    expect(BrowserWindowsMessage).toHaveText('Browser Windows');

    /* //wait to the alert to be display and if alert id found then perform accept action.
    page.once('dialog', async (dialog: any): Promise<void> => {
        //accept
        await dialog.accept();
    });
 */

    let newPage: Promise<Page> = page.context().waitForEvent('page')

    const tabButton: Locator = await page.locator(`//button[@id='tabButton']`);
    await tabButton.click();

    const message: Locator = (await newPage).locator(`//h1[text() ='This is a sample page']`);
    expect(message).toHaveText('This is a sample page');

    let newWindow = page.context().waitForEvent('page');

    const windowButton: Locator = await page.locator(`//button[@id='windowButton']`);
    await windowButton.click();

    const m: Locator = (await newWindow).locator(`//h1[text() ='This is a sample page']`);
    expect(m).toHaveText('This is a sample page');

    const countPages: Page[] = await context.pages();
    console.log(`pages count : ${countPages.length}`);

});

