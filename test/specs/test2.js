import Homepage from "../pageobjects/homepage.page";

describe("Homepage test 2", () => {
  it("Homepage has header title", () => {
    Homepage.open();
    Homepage.pageTitle.waitForDisplayed();

    expect(Homepage.pageTitle).toHaveText(
      "We design and ship digital products that transform companies."
    );
  });

  it("Homepage logo is visible", () => {
    expect(Homepage.logo).toBeDisplayed();
  });
});
