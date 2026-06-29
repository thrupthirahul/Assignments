import { test, expect, Locator, Dialog } from '@playwright/test';

test('Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    const alertHeading: Locator = await page.locator(`//h1[text() ='Alerts']`);
    await expect(alertHeading).toHaveText('Alerts');

    //alert accept 
    page.once('dialog', async (dialog) => {
        console.log('alert dialog message: ' + await dialog.message())
        await dialog.accept();
    });
    const alertButton = await page.locator(`#alertButton`);
    await alertButton.click();

    //timerAlertButton
    /*  page.once('dialog', async (dialog) => {
         console.log(`timer alert message ${await dialog.message()}`);
         await dialog.accept();
     }); */

    //timerAlertButton
    let dialog: Promise<Dialog> = page.waitForEvent('dialog');
    const timerAlertButton = await page.locator(`#timerAlertButton`);
    await timerAlertButton.click();
    const message: string = (await dialog).message();
    console.log(`timer alert message ${message}`);

    (await dialog).accept();

    //await page.waitForTimeout(7000);

    //#confirmButton
    page.once('dialog', async (dialog) => {
        await dialog.dismiss();
    });

    const confirmButton: Locator = await page.locator(`#confirmButton`);
    confirmButton.click();
    const confirmResult: Locator = await page.locator(`#confirmResult`);
    console.log(`confirm result: ${ await confirmResult.innerText()}`);
    await expect(confirmResult).toHaveText('You selected Cancel');

    //#promtButton
    page.once('dialog', async (dialog) => {
        await dialog.accept('rahul');
    });
    const promtButton: Locator = await page.locator(`#promtButton`);
    promtButton.click();
    const promtResult: Locator = await page.locator(`#promptResult`);
    console.log(`promt result: ${ await promtResult.innerText()}`);
    await expect(promtResult).toHaveText('You entered rahul');

});