// Percentage Calculator Function

function submit() {
  // math Total
  let input1 = document.querySelector("#input1").value;
  document.querySelector("#mathT").innerText = input1;

  // math Obtained
  let input2 = document.querySelector("#input2").value;
  document.querySelector("#mathO").innerText = input2;

  // math Percentage
  let math = ((input2 / input1) * 100).toFixed("2");
  document.querySelector("#mathP").innerText = math + " %";

  // Physics Total
  let input3 = document.querySelector("#input3").value;
  document.querySelector("#physicsT").innerText = input3;

  // Physics Obtained
  let input4 = document.querySelector("#input4").value;
  document.querySelector("#physicsO").innerText = input4;

  // Physics Percentage
  let physics = ((input4 / input3) * 100).toFixed("2");
  document.querySelector("#physicsP").innerText = physics + " %";

  // Chemistry Total
  let input5 = document.querySelector("#input5").value;
  document.querySelector("#cheT").innerText = input5;

  // Chemistry Obtained
  let input6 = document.querySelector("#input6").value;
  document.querySelector("#cheO").innerText = input6;

  // Chemistry Percentage
  let che = ((input6 / input5) * 100).toFixed("2");
  document.querySelector("#cheP").innerText = che + " %";

  // English Total
  let input7 = document.querySelector("#input7").value;
  document.querySelector("#engT").innerText = input7;

  // English Obtained
  let input8 = document.querySelector("#input8").value;
  document.querySelector("#engO").innerText = input8;

  // English Percentage
  let eng = ((input8 / input7) * 100).toFixed("2");
  document.querySelector("#engP").innerText = eng + " %";

  // Urdu Total
  let input9 = document.querySelector("#input9").value;
  document.querySelector("#urduT").innerText = input9;

  // Urdu Obtained
  let input10 = document.querySelector("#input10").value;
  document.querySelector("#urduO").innerText = input10;

  // Urdu Percentage
  let urdu = ((input10 / input9) * 100).toFixed("2");
  document.querySelector("#urduP").innerText = urdu + " %";

  // Islamic / Pak Studies Total
  let input11 = document.querySelector("#input11").value;
  document.querySelector("#pakT").innerText = input11;

  // Islamic / Pak Studies Obtained
  let input12 = document.querySelector("#input12").value;
  document.querySelector("#pakO").innerText = input12;

  // Islamic / Pak Studies Percentage
  let pak = ((input12 / input11) * 100).toFixed("2");
  document.querySelector("#pakP").innerText = pak + " %";

  // Total Subject marks
  let subjectTotal =
    Number(input1) +
    Number(input3) +
    Number(input5) +
    Number(input7) +
    Number(input9) +
    Number(input11);
  document.querySelector("#allT").innerText = subjectTotal;

  // Total Obtained marks
  let subjectObtained =
    Number(input2) +
    Number(input4) +
    Number(input6) +
    Number(input8) +
    Number(input10) +
    Number(input12);
  document.querySelector("#allO").innerText = subjectObtained;

  // Total Percentage
  let totalMarks =
    Number(input1) +
    Number(input3) +
    Number(input5) +
    Number(input7) +
    Number(input9) +
    Number(input11);
  let Obtmarks =
    Number(input2) +
    Number(input4) +
    Number(input6) +
    Number(input8) +
    Number(input10) +
    Number(input12);

  let totalPercentage = ((Obtmarks / totalMarks) * 100).toFixed("2");

  document.querySelector("#allP").innerText = totalPercentage + " %";

  // Grade
  let grade;
  if (totalPercentage >= 80 && totalPercentage <= 100) {
    grade = " A+";
    document.querySelector("#grade").innerText = grade;
  } else if (totalPercentage >= 70 && totalPercentage < 80) {
    grade = " A";
    document.querySelector("#grade").innerText = grade;
  } else if (totalPercentage >= 60 && totalPercentage < 70) {
    grade = " B";
    document.querySelector("#grade").innerText = grade;
  } else if (totalPercentage >= 50 && totalPercentage < 60) {
    grade = " C";
    document.querySelector("#grade").innerText = grade;
  } else if (totalPercentage >= 40 && totalPercentage < 50) {
    grade = " D";
    document.querySelector("#grade").innerText = grade;
  } else if (totalPercentage >= 33 && totalPercentage < 40) {
    grade = " E";
    document.querySelector("#grade").innerText = grade;
  } else {
    grade = " --";
    document.querySelector("#grade").innerText = grade;
  }

  let status;

  if (totalPercentage >= 33) {
    status = " Passed";
    document.querySelector("#status").innerText = status;
  } else {
    status = " Failed";
    document.querySelector("#status").innerText = status;
  }
}
