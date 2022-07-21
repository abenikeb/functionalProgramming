const input = "   JavaScript   ";

const convertrim = (str) => str.trim();

const wrapDiv = (str) => `<div>${str}</div>`;

const convertTOLowerCase = (str) => str.toLowerCase();

let result = wrapDiv(convertTOLowerCase(convertrim(input)));

console.log({ result: result });
