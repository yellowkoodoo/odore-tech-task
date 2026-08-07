# TESTS

| ID  | Title | Preconditions | Steps | Expected Result | Priority |
| --- | ----- | ------------- | ----- | --------------- | -------- |

| TC-001
| Successful login
| User account exists
| 1. Open login page
<br>2. Enter valid credentials
<br>3. Click **Login**
| User is logged in and redirected to the dashboard
| P1 |

| TC-002 | Invalid password | User account exists | 1. Open login page<br>2. Enter valid username<br>3. Enter wrong password<br>4. Click **Login** | Error message "Invalid username or password" is shown | P1 |
| TC-003 | Empty required fields | Login page is open | 1. Leave username and password empty<br>2. Click **Login** | Validation messages are displayed for required fields | P2 |
| TC-004 | Logout | User is logged in | 1. Click user menu<br>2. Select **Logout** | User is logged out and redirected to the login page | P2 |
| TC-005 | Password field masking | Login page is open | 1. Click the password field<br>2. Type a password | Password characters are masked | P3 |
