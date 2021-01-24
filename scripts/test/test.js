/* eslint-disable linebreak-style */
import { audioAPI } from "../../main.js";
describe("Проверка аудио", function() {
  it("Нота А0 сыграла", function() {
    assert.equal(audioAPI.playNote("A0"), undefined);
  });
  it("Нота А1 сыграла", function() {
    assert.equal(audioAPI.playNote("A1"), undefined);
  });
  it("Нота А2 сыграла", function() {
    assert.equal(audioAPI.playNote("A2"), undefined);
  });
  it("Нота А3 сыграла", function() {
    assert.equal(audioAPI.playNote("A3"), undefined);
  });
  it("Нота А4 сыграла", function() {
    assert.equal(audioAPI.playNote("A4"), undefined);
  });
  it("Нота А5 сыграла", function() {
    assert.equal(audioAPI.playNote("A5"), undefined);
  });
  it("Нота А6 сыграла", function() {
    assert.equal(audioAPI.playNote("A6"), undefined);
  });
  it("Нота А7 сыграла", function() {
    assert.equal(audioAPI.playNote("A7"), undefined);
  });
  it("Нота А8 сыграла", function() {
    assert.equal(audioAPI.playNote("A8"), undefined);
  });
})






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