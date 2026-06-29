import { test, expect, Locator } from '@playwright/test';

test('dynamic properties', async ({ page }) => {

    await page.goto('https://demoqa.com/dynamic-properties');
    const header: Locator = await page.locator(`//h1[text() ='Dynamic Properties']`);
    console.log(`header: ${await header.textContent()}`);

    //enableAfter
    const enableAfter: Locator = await page.locator(`#enableAfter`);
    await enableAfter.click();

    console.log(`enableAfter button message: ${await enableAfter.textContent()}`);

    //visibleAfter
    const visibleAfter: Locator = await page.locator(`#visibleAfter`);
    await visibleAfter.click();

    console.log(`visibleAfter button message: ${await visibleAfter.textContent()}`);
});

test('web tables', async ({ page }) => {

    await page.goto('https://demoqa.com/webtables');

    const header = await page.locator(`//h1[text() ='Web Tables']`);
    console.log(`header: ${await header.innerText()}`);

    const webtabledata: Map<string, string>[] = await getInfoFromWebtable(page);
    console.log(webtabledata);

});

async function getInfoFromWebtable(page: any): Promise<Map<string, string>[]> {

    let array: Map<string, string>[] = [];

    const numberOfRows: number = await page.locator(`//table/child::tbody/child::tr[1]/child::td`).count();
    const numberOfColumns: number = await page.locator(`//table/child::tbody/child::tr`).count();

    for (let c = 1; c <= numberOfColumns; c++) {

        let map = new Map<string, string>();
        
        for (let r = 1; r < numberOfRows; r++) { 
            
            const locatorR: Locator = await page.locator(`//table/child::thead/child::tr[1]/child::th[${r}]`);
            const key: string = await locatorR.innerText();
            
            const locatorC: Locator = await page.locator(`//table/child::tbody/child::tr[${c}]/child::td[${r}]`);
            const value: string = await locatorC.innerText();
            
            map.set(key, value);
        }
        array.push(map);
    }
    return array;
}           