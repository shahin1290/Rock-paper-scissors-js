const { Given, Then, When, After } = require("cucumber");

Given('I visit the site', async function () {
    return await this.openHomePage()
});

Then('I should see {string}', async function (content) {
    return await this.pageHasTextContent(content)

});
When('I click {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('I should see the result', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


After(async function() {
    return await this.closeHomePage()
})

