String.prototype.toJadenCase = function (thisString) {
    const testVar = this.valueOf()
    const wordsArray = testVar.split(" ")
    return wordsArray.map(element => {
        return element[0].toUpperCase() + element.slice(1)
    }).join(" ")
  };

const str = "hey partner"
console.log(str.toJadenCase())