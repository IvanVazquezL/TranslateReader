const numberInput = document.querySelectorAll("input").length;
let counter = 0;
let correctAnswers = 0;
let gradeH2 = document.querySelector(".note");

function chansonWord(id){
  console.log(id);
  const answer = document.getElementById(id);
  const sibling = document.getElementById(id).nextSibling;
console.log(answer.value.toLowerCase());
console.log(answer.name);
  if((answer.value.toLowerCase())===answer.name){
    answer.classList.add("hidden");
    sibling.classList.remove("hidden");
    sibling.classList.add("correct");
    counter += 1;
    correctAnswers += 1;
  }
  else{
    answer.classList.add("hidden");
    sibling.classList.remove("hidden");
    sibling.classList.add("incorrect")
    counter += 1;
  }

  if(counter===numberInput){
    let grade = (20/numberInput) * correctAnswers;
    numberGrade = grade;
    grade = grade.toString();

    if(grade.length>2){
      grade = grade.substr(0,5);
    }

    if(numberGrade <= 20 && numberGrade >=16){
      gradeH2.textContent = "Note: " + grade + " Très Bien"
    }
    else if(numberGrade < 16 && numberGrade >=14)
    {
      gradeH2.textContent = "Note: " + grade + " Bien"
    }
    else if(numberGrade < 14 && numberGrade >=12)
    {
      gradeH2.textContent = "Note: " + grade + " Assez-Bien"
    }
    else if(numberGrade < 12 && numberGrade >=10)
    {
      gradeH2.textContent = "Note: " + grade + " Passable"
    }
    else if(numberGrade < 10 && numberGrade >=5)
    {
      gradeH2.textContent = "Note: " + grade + " Insuffisant"
    }
    else{
      gradeH2.textContent = "Note: " + grade + " Très Insuffisant"
    }


  }

}
