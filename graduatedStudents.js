const students = [
  {
    name: "Ankit",
    age: 22,
    grade: 85,
    email: "ankit@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kayla",
    age: 28,
    grade: 92,
    email: "kayla@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Charina",
    age: 19,
    grade: 89,
    email: "charina@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Bernard",
    age: 30,
    grade: 75,
    email: "bernard@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Kevin",
    age: 36,
    grade: 82,
    email: "kevin@example.com",
    phone: "555-555-5555",
    graduated: false
  },
  {
    name: "Hasheem",
    age: 41,
    grade: 82,
    email: "hasheem@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Erwin",
    age: 34,
    grade: 72,
    email: "erwin@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Christopher",
    age: 50,
    grade: 86,
    email: "christopher@example.com",
    phone: "555-555-5555",
    graduated: true
  },
  {
    name: "Angela",
    age: 27,
    grade: 80,
    email: "angela@example.com",
    phone: "555-555-5555",
    graduated: true
  },
];

// Your goal is to look through the list of students. - If a student has graduated, then your function should output a string literal informing you that the student has graduated and their diploma has been sent to their email. - If they haven’t, the function should output a string literal informing you that the student has not graduated and no diploma will be sent.

// There is one restriction to the solution of this function: You can’t use dot or square bracket notation to solve this problem. We want you to practice applying your new destructuring knowledge to this function.

const graduatedStudents = (listOfStudents) => {
  const graduated    = listOfStudents.filter(({ graduated }) => graduated);
  const notGraduated = listOfStudents.filter(({ graduated }) => !graduated);

  // loop over the graduated students and send them an email use map()
  return [
    ...graduated.map(({ name, email }) => `${name} has graduated a diploma sent has been sent to ${email}`),

    ...notGraduated.map(({ name, email }) => `${name} has not graduated no diploma sent to ${email}`)
  ];
};

graduatedStudents(students);
console.log(graduatedStudents(students));
