let students = [
  { id: 1, name: "Nguyen Van A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trân Thi B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoang Văn E", score: 3.8, gender: "Nam" },
];
// b3
function studentLabels(student) {
  for (let i = 0; i < student.length; i++) {
    console.log(`"Tên: ${student[i].name} - Điểm: ${student[i].score}"`);
  }
}
console.log("-- Danh sách học sinh --");
studentLabels(students);

//b2
function hsYeu(studentSS) {
  let coHSYeu = studentSS.some((student) => student.scoce > 4);
  if ((coHSYeu = 1)) {
    console.log("Có sinh viên yếu ");
  } else {
    console.log("ko có sinh viên yếu ");
  }
}
hsYeu(students);

//b1
function filter1(score, student) {
  for (let i = 0; i < student.length; i++) {
    if (student[i].score < score) {
      delete student[i];
    }
  }
}
filter1(8, students);
console.log(" các hs suất xắc là: ");
console.log(students);
