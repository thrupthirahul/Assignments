import { expect, Locator, test } from '@playwright/test';

//indentations -> Shift + Atl + F
//block comments -> Shift + Atl + A
//Ctrl + or - -> Zoom in or out.
//Ctrl + F2 -> rename the varible or function names 

test('Assignment-15', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });

    // 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
    await page.goto('https://demoqa.com/automation-practice-form');

    // 2. Wait for Page-load
    await page.waitForLoadState();

    // 3. Enter First name and Last name
    const firstname: Locator = await page.locator('#firstName');
    const lastname: Locator = await page.locator('#lastName');
    await firstname.clear();
    await lastname.clear();

    await firstname.fill('Rahul');
    await lastname.fill('Thrupthi');

    // 4. Enter Email
    const email: Locator = await page.locator('#userEmail');
    await email.clear();
    await email.fill('thrupthi@gmail.com');

    // 5. Select Gender (Male)
    //await page.locator("//input[@name='gender'] [@value='Male']");
    await selectGender(page, 'Male');

    await page.locator('#userNumber');
    // 6. Enter mobile number
    const userNumber: Locator = await page.locator('#userNumber');
    userNumber.clear();
    userNumber.fill('7337337337');


    // 7.Select DOB (1-Feb-1991)
    await selectDateOfBirthInput(page, "January", "1998", "28");

    // 8.Search and Select Computer Science and English
    await selectSubject(page, 'Computer Science');

    // 9.Select Hobbies as Sports and Reading
    await selectHoobie(page, 'Sports');
    await selectHoobie(page, 'Reading')

    // 10.Upload photo
    const uploadPicture = await page.locator('#uploadPicture');
    await uploadPicture.setInputFiles('./Photo/screenshot.png');

    //11/ Select State 
    //const stateCity:Locator=await page.locator('#stateCity-wrapper');
    await selectStateAndCity(page, 'NCR', 'Noida');

    // 11.Submit Details
    const submit = await page.locator('#submit');
    await submit.click();

});

async function selectGender(page: any, gender: string): Promise<void> {
    const radioButton: Locator = await page.locator(`//input[@name='gender'] [@value='${gender}']`);
    await radioButton.check();
}

async function selectDateOfBirthInput(page: any, month: string, year: string, date: string): Promise<void> {
    const dateOfBirthInput: Locator = await page.locator('#dateOfBirthInput');
    await dateOfBirthInput.click();

    const monthDropdown: Locator = await page.locator('.react-datepicker__month-select');
    await monthDropdown.selectOption({ label: `${month}` });

    const yearDropdown: Locator = await page.locator('.react-datepicker__year-select');
    await yearDropdown.selectOption({ label: `${year}` });

    //div[@aria-label='Choose Sunday, June 14th, 2026']
    const selectDate = await page.locator(`//div[contains(@aria-label,'${month} ${date}')]`);
    await selectDate.click();
}

async function selectSubject(page: any, subject: string): Promise<void> {
    const textbox = await page.locator('//input[@class="subjects-auto-complete__input"]');
    //await textbox.click();
    await textbox.fill(subject);
    const subjectLocator: Locator = await page.locator("//div[@id='react-select-2-listbox']//div[text()='" + subject + "']");
    await subjectLocator.click();
}

async function selectHoobie(page: any, option: string): Promise<void> {
    const hoobies: Locator = await page.locator("//div[@id='hobbiesWrapper']/child::div[@class='col-md-9 col-sm-12']/child::div/child::label[text() ='" + option + "']");
    await hoobies.check();
}

async function selectStateAndCity(page: any, state: string, city: string) {

    const stateLocator: Locator = await page.locator('#state >.css-13cymwt-control > .css-hlgwow');
    await stateLocator.scrollIntoViewIfNeeded();
    await stateLocator.click();
    //await page.waitForTimeout(10000);
    const s = await page.locator(`//div[@role ='option'][text() ='${state}']`);
    await s.click({force: true});

    const cityLocator: Locator = await page.locator('#city >.css-13cymwt-control > .css-hlgwow');
    await cityLocator.scrollIntoViewIfNeeded();
    await cityLocator.click();
    //await page.waitForTimeout(10000);
    const c = await page.locator(`//div[@role ='option'][text() ='${city}']`);
    await c.click({force: true});

}