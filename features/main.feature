Feature: Visitor can see different options
  As a visitor
  In order to play the game
  I would like to see different options for me to choice 

  Scenario: Visitor can see different options
    Given I visit the site 
    Then I should see "Rock"
    And I should see "Scissor"
    And I should see "Paper"