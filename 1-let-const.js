function main() {
  const PI = Math.PI;
  let r = +readLine();

  (function area(r) {
    return console.log(PI * r * r);
  })(r);

  (function perimeter(r) {
    return console.log(2 * PI * r);
  })(r);
}
