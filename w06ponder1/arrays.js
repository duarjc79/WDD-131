//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
//document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

 const grades = ["A", "B", "A"]
 function convertGradetoPercent(grade) {
    let points = 0
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
 }

 const gpaPoints = grades.map(convertGradetoPercent);
 console.log("gpa points: " + gpaPoints);

 const gpaPercent = gpaPoints.reduce((total, item) => {
    return total + item;
 }, 0);

 const gpa = gpaPercent / gpaPoints.length;
 console.log(gpa)