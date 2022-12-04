Feature: Pricing

  Scenario: Verify VPN pricing
    Given I navigate to "https://nordvpn.com"
    When I click on "Pricing" link
    Then I should see price table