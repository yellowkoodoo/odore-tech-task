# TESTS

| ID  | Title | Preconditions | Steps | Expected Result | Priority |
| --- | ----- | ------------- | ----- | --------------- | -------- |

| TC-001
| Successful login
| 1. User account exists
| 1. Open login page
<br>2. Enter valid credentials
<br>3. Click **Login**
| User is logged in and redirected to the products page
| P1 |

| TC-002
| Failed login: wrong password
| 1. User account exists
| 1. Open login page
<br>2. Enter valid username
<br>3. Enter invalid password
<br>3. Click **Login**
| User is not logged in, error says "Wrong username or password"
| P1 |

| TC-003
| Failed login: wrong username
| 1. User account exists
| 1. Open login page
<br>2. Enter invalid username
<br>3. Enter valid password
<br>3. Click **Login**
| User is not logged in, error says "Wrong username or password"
| P1 |

| TC-004
| Successful purchase of multiple items
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Check that cart items indicator changed to: 2
<br>4. Click cart
<br>5. In the cart: check both added items exist in the list
<br>6. Click Checkout
<br>7. Enter valid Checkout information
<br>8. Click Continue
<br>9. Check all added items exist in the list
<br>10. Check prices are correct: items, items total and total (items total + tax)
<br>11. Click Finish
<br>12. Click Generate PDF order
<br>13. Check PDF downloaded and contains correct order information
<br>14. Click Back Home
<br>15. Check user is on All Products page
| user is on All Products page
| P1 |

| TC-005
| Add/remove items on All Products page
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Check that cart items indicator changed to: 1
<br>3. Remove 1 item from the cart of (Sauce Labs Fleece Jacket)
<br>4. Check that cart items indicator changed to: 0
<br>5. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>6. Check that cart items indicator changed to: 1
<br>7. Add 1 item to the cart of (Sauce Labs Onesie)
<br>8. Check that cart items indicator changed to: 2
<br>9. Click cart
| Both added items exist in the list
| P1 |

| TC-006
| Sorting does not affect Cart
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Sort items by all available options
| Products state on Products page remain correct (Added/Not added), Cart items indicator and list in Cart is not changing
| P3 |

| TC-007
| Add/remove items on Cart page
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Add 1 item to the cart of (Sauce Labs Onesie)
<br>4. Click cart
<br>5. Remove 1 item from the cart of (Sauce Labs Backpack)
<br>6. Check that cart items indicator changed to: 2
<br>7. Check that cart does not show removed item anymore
<br>8. Click on item (Sauce Labs Fleece Jacket)
<br>9. On the Product page click Remove
<br>10. Check that cart items indicator changed to: 1
<br>11. Browser: navigate Back
<br>12. Check that cart does not show removed item anymore
<br>13. Browser: navigate Forward
<br>14. On the Product page (Sauce Labs Fleece Jacket) click Add to cart
<br>15. Check that cart items indicator changed to: 2
<br>16. Browser: navigate Back
<br>17. Check that cart contains only added items
| Check that cart contains only added items
| P1 |

| TC-008
| Page refresh does not change Cart
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Click cart
<br>3. Browser: Perform Page refresh / F5
| Check that cart still contains added items
| P1 |

| TC-009
| Return from Checkout page - Cancel
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Click cart
<br>4. In the cart: Click Checkout
<br>5. Checkout: Enter valid Checkout information
<br>6. Click Continue
<br>7. Checkout, step 2: Click Cancel
<br>8. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>9. Remove 1 item to the cart of (Sauce Labs Onesie)
<br>10. Click Cart
<br>11. Check only added items listed there
<br>12. Proceed to Checkout
| only added items listed there
| P1 |

| TC-010
| Return from Checkout page to All Products
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Click cart
<br>4. In the cart: Click Checkout
<br>5. Checkout: Enter valid Checkout information
<br>6. Click Continue
<br>7. Checkout, step 2: Click Menu -> All Items
<br>8. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>9. Remove 1 item to the cart of (Sauce Labs Onesie)
<br>10. Click Cart
<br>11. Check only added items listed there
<br>12. Proceed to Checkout
| only added items listed there
| P1 |

| TC-011
| Return from Checkout page to Cart
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Click cart
<br>4. In the cart: Click Checkout
<br>5. Checkout: Enter valid Checkout information
<br>6. Click Continue
<br>7. Checkout, step 2: Click Cart icon
<br>8. Remove 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>9. Proceed to Checkout
| only added items listed there
| P1 |

| TC-012
| Checkout with an empty cart
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Click cart
<br>2. In the cart: Try to Click Checkout
| Checkout is prohibited, button is disabled as there are no products in the art
| P3 |

| TC-013
| Checkout with invalid personal data
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Click cart
<br>3. In the cart: Click Checkout
<br>4. Checkout: Enter invalid Checkout information: First Name, Last Name, Postal Code containing special symbols, e.g !?@#$%^&\*()-+=.,`
<br>5. Checkout: Enter invalid Checkout information: First Name, Last Name, Postal Code as whitespaces
<br>6. Checkout: Enter invalid Checkout information: First Name, Last Name, Postal Code are blank
| On each invalid input user is presented with meaningful message from every field
| P2 |

| TC-014
| Checkout personal data preserved
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Proceed to Checkout
<br>3. Enter valid personal data
<br>4. Click Continue
<br>5. Browser: Click back
<br>6. Browser: Click back again
<br>7. Click Checkout
| After each step when user in on Personal data page, web site preserves user input
| P3 |

| TC-015
| Cart preserved between user sessions
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Click logout
<br>4. Login again
<br>5. Check that cart items indicator is: 2
<br>3. Click cart
| only added items listed in the Cart
| P2 |

| TC-016
| Cart cleared after order submission, user cannot submit the same order twice
| 1. User account exists
<br>2. User logged in
<br>3. User is on All Products page
| 1. Add 1 item to the cart of (Sauce Labs Backpack)
<br>2. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>3. Click cart
<br>4. In the cart: Click Checkout
<br>5. Checkout: Enter valid Checkout information
<br>6. Click Continue
<br>7. Checkout, step 2: Click Cancel
<br>8. Add 1 item to the cart of (Sauce Labs Fleece Jacket)
<br>9. Remove 1 item to the cart of (Sauce Labs Onesie)
<br>10. Click Cart
<br>11. Check only added items listed there
<br>12. Proceed to Checkout
<br>13. Finish checkout
<br>14. Browser: click back button
| Cart items indicator is: 0, no items are in the cart or on checkout page, checkout is not possible
| P1 |
