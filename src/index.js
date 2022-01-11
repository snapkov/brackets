module.exports = function check(str, bracketsConfig) {
  let isFind = true;
  while ((str.length > 0) && (isFind === true)) {
    let subBrackets = "";
    let indexBrackets = 0;
    isFind = false;
    for (let i = 0; i < bracketsConfig.length; i++) {
      subBrackets = bracketsConfig[i].join("");
      if (str.indexOf(subBrackets) > -1) {
        isFind = true;
        indexBrackets = str.indexOf(subBrackets);
        str = str.substr(0, indexBrackets) + str.substr(indexBrackets + 2, str.length);
      }
    }
  }
  return (str.length === 0) ? true : false;
  // your solution
}