function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";

  console.log(
    `${parseInt(secondInteger) + firstInteger}\n${
      parseFloat(secondDecimal) + firstDecimal
    }\n${firstString + secondString}`
  );
  // when string literals used, it shouldn't be space between ``
  // input numbers should be casted because input always recieved as string . parseInt(),parseFloat(),Number() functions can be used
}
