import {test, expect, chromium, Locator} from "@playwright/test";

test("Assignment-14", async ()=>{
    
    //Start browser engine and Real browser is launched.
    const browserEngine= await chromium.launch({headless:false, channel: "chrome", args: ['--start-maximized']});

    //Create the new broswer context with in the browser.
    const browserContext=await browserEngine.newContext({viewport: null});

    //Create the new page with in the browser context.
    const newPage=await browserContext.newPage();

    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await newPage.goto('https://parabank.parasoft.com/parabank/index.htm');
    
    //2.verify application logo is displayed
    const applicationLogo= await newPage.locator("img[src='images/clear.gif']");
    expect(applicationLogo).toBeVisible();
    
    //3.Verify application caption displayed as "Experience the difference"
    const caption= await newPage.locator("p[class='caption']");
    expect(await caption.innerText()).toBe("Experience the difference");

    //4.Enter invalid username
    const usernameTextbox=await newPage.locator("input[name='username']");
    await usernameTextbox.fill("thrupthi@gmail.com");

    // 5.Enter empty Password
    const passwordTextbox=await newPage.locator("input[name='username']");
    await passwordTextbox.clear();

    // 6.Click on login button
    const loginButton= await newPage.locator("input[class='button']");
    await loginButton.click();

    // 7.Verify the error message "Please enter a username and password."
    const errorMessage= await newPage.locator("p[class='error']");
    expect(errorMessage).toHaveText("Please enter a username and password.");

    // 8.Click on admin page link
    const adminPage= await newPage.locator("li>a[href='admin.htm']");
    await adminPage.click();
    //const adminPageLaunch=await browserContext.waitForEvent("page");
    

   // const adminPageLaunch=await newPage.waitForEvent('popup');
   // const adminPageURL=adminPageLaunch.url();
   expect(await newPage.url()).toBe("https://parabank.parasoft.com/parabank/admin.htm");

    // 9.select the option "soap" from dba mode radio button
    const soapRadioButton=await newPage.locator("#accessMode1");
    await soapRadioButton.check();

    // 10.Scroll to element dropdown
    const loanProvider=await newPage.locator("#loanProvider");
    loanProvider.scrollIntoViewIfNeeded();

    // 11.Select the option web service from the dropdown
    await loanProvider.selectOption({label: "Web Service"});
    
    expect( await loanProvider.locator('option:checked')).toHaveText('Web Service');

    // 12.click on submit button
    const submitButton=await newPage.locator("form>input[class='button']");
    await submitButton.click();

    // 13.verify submission is successful by validating success message
    const successfulMessage= await newPage.getByText("Settings saved successfully.");
    expect(await successfulMessage.innerText()).toBe("Settings saved successfully.");
    
    // 14.Click on services page link
    const servicePage=await newPage.locator("ul[class=leftmenu]>li>a[href='services.htm']");
    await servicePage.click();

    // 15.wait for service page
    expect(await newPage.title()).toBe("ParaBank | Services");
    expect(await newPage.getByText("Available Bookstore SOAP services:")).toBeVisible();
    
    // 16.Scroll down till bookstore services table
    const bookstoreServiceMessage= await newPage.getByText("Bookstore services:");
    await bookstoreServiceMessage.scrollIntoViewIfNeeded();
    expect(await bookstoreServiceMessage.innerText()).toBe("Bookstore services:");
    
    const table= await newPage.locator("//table[2]");

    // 17.get total rows of books store services table
    const numberOfRows:Locator[]= await newPage.locator("//table[2]/tbody//tr").all();
    expect(numberOfRows.length).toBe(8);
    
    // 18.get total columns of books store services table
    const numberOfColumns:number= await newPage.locator("//table[2]/tbody//tr[1]//td").count();
    expect(numberOfColumns).toBe(3);
    console.log(numberOfRows.length);
    console.log(numberOfColumns);

    // 19.Print table data (row wise and column wise data)
    for(let i=1; i<=numberOfRows.length; i++){
        let rowData:string="";
        for(let j=1; j<=numberOfColumns; j++){
            rowData +=await newPage.locator("//table[2]/tbody//tr["+i+"]//td["+j+"]").innerText()+"|";
        }
        console.log(rowData);
    }
    newPage.close();
    browserContext.close();
    browserEngine.close();
});