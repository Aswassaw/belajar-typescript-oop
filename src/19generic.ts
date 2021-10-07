// Bisa apa saja dengan any (tidak menggunakan generic)
function getData(val: any) {
  return val;
}
const data1 = getData("Bambang");
console.log(data1);

// Bisa apa saja menggunakan generic
function getData2<T>(val: T): T {
  return val;
}
const data2 = getData2("Bambang");
console.log(data2.length);
