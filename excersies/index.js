const button = document.getElementById("submit-button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const student = document.getElementById("student");
  const teacher = document.getElementById("teacher");
  console.log(name.value, student.checked, teacher.checked);

  localStorage.setItem("name", `${name.value}`);
  localStorage.setItem("student", `${student.checked}`);
  localStorage.setItem("teacher", `${teacher.checked}`);

  location.href = "information.html";
});
