describe("Homepage test", () => {
  it("Homepage has header title", () => {
    browser.url("https://work.co");
    let pageTitle = $('[data-test-id="header-title-text"]');
    pageTitle.waitForDisplayed();
    expect(pageTitle).toHaveText(
      "We design and ship digital products that transform companies."
    );
  });

  it("Homepage logo is visible", () => {
    expect($('[data-test-id="global-menu-btn"')).toBeDisplayed();
  });
});
