Feature: Verify the login functionality

Scenario:verify login with valid credentials.
        Given User lunch the application.
        When User Enter username as "Admin" and password as "admin123".
        And User Clicks on login Button.
        Then User should Navigated to Dashboard Page


    Scenario: Verify Login with valid Username and Invalid password.
              Given user lunch the application.
              When User Enter username as "Admin" and password as "vidya123"
              And User Click on login Button
              Then User should get login Error Message


    Scenario: Verify Login with Invalid Username and valid password
        Given user launch the application.
        When User Enter username as "vidya" and password as "admin123"
        And User Click on login Button
        Then User should get login Error Message

    Scenario: Verify Login with Invalid Username and Invalid password
              Given user launch the application.
              When User Enter username as "vidya" and password as "vidya123123"
              And User Clicks on login Button
              Then User should get login Error Message
