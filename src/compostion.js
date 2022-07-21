// import { pipe } from "lodash/fp";

const { pipe } = require("lodash/fp");

const input = "   JavaScript   ";
const convertrim = (str) => str.trim();
const wrapDiv = (type) => (str) => `<${type}>${str}</${type}>`;
const convertTOLowerCase = (str) => str.toLowerCase();

const result = pipe(convertrim, convertTOLowerCase, wrapDiv("span"));
// each have must be functional paradiam

// let result = wrapDiv(convertTOLowerCase(convertrim(input)));

console.log({ result: result(input) });
