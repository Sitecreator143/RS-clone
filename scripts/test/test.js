/* eslint-disable linebreak-style */
describe("Размеры хидера", function() {
  it("Ширина хидера не искажается", function() {
    assert.equal(headerWidth(), document.documentElement.scrollWidth);
  });
  it("Высота хидера не искажается", function() {
    assert.equal(headerHeight(), 50);
  });
})

describe("Размеры главного блока", function() {
  it("Ширина главного блока не искажается", function() {
    assert.equal(mainWidth(), document.documentElement.scrollWidth);
  });
  it("Высота главного блока не искажается", function() {
    assert.equal(mainHeight(), document.documentElement.clientHeight - 120);
  });
})

describe("Размеры футера", function() {
  it("Ширина футера не искажается", function() {
    assert.equal(footerWidth(), document.documentElement.scrollWidth);
  });
  it("Высота футера не искажается", function() {
    assert.equal(footerHeight(), 70);
  });
})