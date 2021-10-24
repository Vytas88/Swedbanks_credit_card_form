const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const nextBtnFifth = document.querySelector(".next-4");
const prevBtnSixth = document.querySelector(".prev-5");
const nextBtnSixth = document.querySelector(".next-5");
const prevBtnSeventh = document.querySelector(".prev-6");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
const form = document.querySelector('form');
let current = 1;


nextBtnFirst.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-13.3%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-28.6%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-42.9%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-57.2%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFifth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-71.5%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSixth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-85.8%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-14.3%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-28.6%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFifth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-42.9%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnSixth.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-57.2%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnSeventh.addEventListener("click", function (event) {
  event.preventDefault();
  slidePage.style.marginLeft = "-71.5%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);
}

function readFormData() {
  var formData = {};
  formData["paymentDay"] = document.getElementById("paymentDay").value;
  formData["salary"] = document.getElementById("salary").value;
  formData["myRadioId"] = document.querySelector('input[type="radio"]:checked').value;
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["personalCode"] = document.getElementById("personalCode").value;
  formData["address"] = document.getElementById("address").value;
  formData["number"] = document.getElementById("number").value;

  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("summaryTable").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.paymentDay;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.salary;
  cell3 = newRow.insertCell(2);
  cell3.innerText = data.myRadioId;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.firstName;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.lastName;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.personalCode;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.address;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = data.number;
}

// nextBtnFirst.addEventListener('click', (e) => {
//   e.preventDefault();
//   checkInputs();
// });

// function checkInputs() {
//   let error = document.querySelector('error');
//   const salaryValue = document.getElementById("salary").value;
//   if (salaryValue === '' || salaryValue == null) {
//     error.style.display = 'block';
//   } else {
//     error.style.display = 'none';
//   }
// }

