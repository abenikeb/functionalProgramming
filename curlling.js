// take it a single parameter and return a single statusbar

function add(a1) {
  return function (a2) {
    return a1 + a2;
  };
}

const t = (a1) => (a2) => a1 + a2;

// console.log({ result: add(1)(2) });
console.log({ result: t(1)(2) });
