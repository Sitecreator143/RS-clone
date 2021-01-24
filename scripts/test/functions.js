/* eslint-disable linebreak-style */
const headerWidth = () => {
  const header = document.querySelector("[data-header]");
  return header.clientWidth;
};
const headerHeight = () => {
  const header = document.querySelector("[data-header]");
  return header.clientHeight;
};

const mainWidth = () => {
  const main = document.querySelector("[data-main]");
  return main.clientWidth;
};
const mainHeight = () => {
  const main = document.querySelector("[data-main]");
  return main.clientHeight;
};

const footerWidth = () => {
  const footer = document.querySelector("[data-footer]");
  return footer.clientWidth;
};
const footerHeight = () => {
  const footer = document.querySelector("[data-footer]");
  return footer.clientHeight;
};
