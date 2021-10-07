// Readonly (Const khusus untuk Class dan atau Interface)
interface Student {
  readonly name: string;
  readonly age: number;
}

let student: Student = { name: "Bambang", age: 44 };
// student.name = "Bagus";
