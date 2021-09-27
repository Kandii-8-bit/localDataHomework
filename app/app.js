var Students = [];

function initSite(localStorage) {}

function initListener() {
  if (localStorage) {
    let student = JSON.parse(localStorage.getItem("Students"));
    if (student.Students) {
      console.log(student);
      $("#fName").val(student.fName);
      $("#lName").val(student.lName);
    }
  }

  $("#submit").click(function (e) {
    e.preventDefault();
    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let age = $("#age").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let studentName = fn + " " + ln;
    let stuAge = age;
    let stuPhone = phone;
    let stuObj = {
      name: studentName,
      email: email,
      age: stuAge,
      phone: stuPhone,
    };

    // This code is supposed to diaplay my array content but is not
    var studentApp = (document.getElementById("studentApp").textContent =
      stuObj);

    Students.push(stuObj);
    console.log(Students);
    localStorage.setItem("Students", JSON.stringify(Students));
    $("#fName").val("");
    $("#lName").val("");
    $("#age").val("");
    $("#email").val("");
    $("#email").val("");
    console.log(localStorage.getItem("Students"));
  });
}

$(document).ready(function () {
  initSite();
  initListener();
});
