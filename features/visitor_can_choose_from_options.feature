Feature: Visitor can choose from different options
  As a visitor
  In order to play the game
  I would like to be able to choose from different options 

  Scenario: Visitor can choose from different options
    Given I visit the site 
    When I click "Paper" 
    Then I should see "Your Choice: paper"
   