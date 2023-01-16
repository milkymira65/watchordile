import { test, expect } from '@playwright/test';

test('Log In', async ({ page }) => {

       // Given
       //this page have to be able to open.
  await page.goto('http://localhost:3000/');

      // When
      // member can fill form to Log In.
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Watchodile');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('wod123');

       // Then
       // member able to click and it should bring member to langing page.
  await page.getByRole('button', { name: 'Log in' }).click();
 
});


  //=======================================================================================
  

//   import { test, expect } from '@playwright/test';

test('Buying Flow', async ({ page }) => {

   // Given
       // this page have to be able to open.
  await page.goto('http://localhost:3000/');

    // When
    // user can click then heading to Products page.
    // user can click Men,Women,Kid,Acessories catecory then heading to those catecories page.
    // user can click Add to cart then heading to Cart page and User able to delete product in their cart.
    // user can click button  " + "  and " - "  in Product details page and Cart page.
  await page.getByRole('button', { name: 'PRODUCTS' }).click();
  await page.getByRole('menuitem', { name: 'Men' }).first().click();
  await page.locator('div:nth-child(10) > .css-hbh9p0 > .css-8expoy > .css-gmuwbf > .chakra-image').click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).dblclick();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: 'PRODUCTS' }).click();
  await page.getByRole('menuitem', { name: 'Women' }).click();
  await page.locator('div:nth-child(5) > .css-hbh9p0 > .css-8expoy > .css-gmuwbf > .chakra-image').click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).dblclick();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: '-' }).nth(1).click();
  await page.locator('b').filter({ hasText: '-3+' }).getByRole('button', { name: '-' }).click();
  await page.getByRole('button', { name: 'PRODUCTS' }).click();
  await page.getByRole('menuitem', { name: 'Kid' }).click();
  await page.locator('div:nth-child(6) > .css-hbh9p0 > .css-8expoy > .css-gmuwbf > .chakra-image').click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: '-' }).nth(2).click();
  await page.locator('b').filter({ hasText: '-3+' }).getByRole('button', { name: '-' }).click();
  await page.getByRole('button', { name: 'PRODUCTS' }).click();
  await page.getByRole('menuitem', { name: 'Accessories' }).click();
  await page.getByRole('list').filter({ hasText: 'Twistiti Watch strapprice฿ 1050Reviews ( reviews)' }).getByRole('img').first().click();
  await page.getByRole('button', { name: '+' }).dblclick();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('button', { name: 'bin' }).nth(3).click();
  await page.getByRole('button', { name: 'Proceed To Check Out' }).click();
   
    //When
    //user can fill form and pay with credit card.
  await page.getByText('Pay With Credit Card').click();
  await page.frameLocator('#omise-checkout-iframe-app').getByLabel('Card number').click();
  await page.frameLocator('#omise-checkout-iframe-app').getByLabel('Card number').fill('5454 5454 5454 5454');
  await page.frameLocator('#omise-checkout-iframe-app').getByLabel('Name on card').click();
  await page.frameLocator('#omise-checkout-iframe-app').getByLabel('Name on card').fill('Watchodile');
  await page.frameLocator('#omise-checkout-iframe-app').getByPlaceholder('MM/YY').click();
  await page.frameLocator('#omise-checkout-iframe-app').getByPlaceholder('MM/YY').fill('09/29');
  await page.frameLocator('#omise-checkout-iframe-app').getByPlaceholder('•••').click();
  await page.frameLocator('#omise-checkout-iframe-app').getByPlaceholder('•••').fill('999');
  await page.frameLocator('#omise-checkout-iframe-app').getByTestId('submit-button').click();

  // Then
  // when pay processed done user can click to go back to home page.
  await page.getByRole('button', { name: 'BACK TO HOME PAGE' }).click();
});