const { Given, Then, When, After } = require("cucumber");

Given('I visit the site', async function () {
    return await this.openHomePage()
});

Then('I should see {string}', async function (content) {
    return await this.pageHasTextContent(content)

});

After(async function() {
    return await this.closeHomePage()
})

