Feature: Visitor can choose from different options
  As a visitor
  In order to play the game
  I would like to be able to choose from different options 

  Scenario: Visitor can choose from different options
    Given I visit the site 
    When I click "Rock" 
    And I click "Scissors" 
    And I click "Papper"
    Then I should see the result