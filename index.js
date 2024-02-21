let result = $("#result");
const insertNumber = (num) => {
  let existingNumber = result.val();
  result.val(existingNumber + num);
};
const clearResult = () => {
  result.val("");
};

const calculate = () => {
  let resultValue = eval(result.val());
  result.val(resultValue);
};

const deleteValue = () => {
  let presentValue = result.val();
  if (presentValue != "") {
    result.val(presentValue.slice(0, -1));
  }
};
