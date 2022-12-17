Feature: Login

  Background: 
    Given user is on log in page

  Scenario: Login successfully
    When user fills email address input with "kandidat@paper.id"
    And user clicks on selanjutnya button
    And user fills password input with "jakarta123"
    And user clicks on masuk button
    Then check url link is corrected