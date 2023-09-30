//The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the different data types.
//true should be converted to "true"
//[2,4,8,17].toString() === "[2, 4, 8, 17]"
//(3).toString() === "3"
//

String.prototype.toString = function () {
  return `${this}`;
};

Boolean.prototype.toString =
  Number.prototype.toString =
  Array.prototype.toString =
    function () {
      return JSON.stringify(this);
    };
