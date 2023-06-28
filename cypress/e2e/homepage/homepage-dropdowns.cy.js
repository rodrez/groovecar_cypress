describe("Dropdowns Work", () => {
  beforeEach(() => {
    cy.home();
  });

  const elements = [
    {
      // New or preowned dropdown
      name: "new or preowned",
      select: "div.gc-searchbox-dropdown-wrapper:nth-child(1)",
      dropdown:
        "div.gc-searchbox-dropdown-wrapper:nth-child(1) > div:nth-child(4)",
    },
    {
      //  Make dropdown
      name: "make",
      select: ".make",
      dropdown: ".make > div:nth-child(4)",
    },
    {
      //  Model dropdown
      name: "model",
      select: ".model",
      dropdown: ".model > div:nth-child(4)",
    },
  ];

  for (const element of elements) {
    it(`show dropdown of ${element.name}`, () => {
      cy.get(element.select).click();
      cy.get(element.dropdown).should("be.visible");
      cy.wait(1);
    });
  }
});
