@urls
Feature: URLs
  Verify that menu links point to correct URLs

  Background:
    Given I navigate to "https://nordvpn.com"

  Scenario Outline: Verify URLs
    When I click on "<string>" link
    Then page URL should contain "<text>"

    Examples:
      | string         | text          |
      | Pricing        | pricing       |
      | Features       | features      |
      | Servers        | servers       |
      | What Is a VPN? | what-is-a-vpn |
      | Download VPN   | download      |
      | Blog           | blog          |