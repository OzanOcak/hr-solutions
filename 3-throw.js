function isPositive(a) {
  if (a == 0) throw { message: "Zero Error" };
  if (a < 0) throw { message: "Negative Error" };

  return "YES";
}
