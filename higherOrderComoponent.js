function hello() {
  return function () {
    return "This message from HHC";
  };
}

let test = hello()();
console.log({ HHC: test });
