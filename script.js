$(document).ready(function () {
  $("#checkBtn").on("click",function(){
   let dateOfUser=$("#dateInput").val();
   const d=new Date(dateOfUser);
   let givenDate=d.getDate();

   let givenMonth=d.getMonth()+1;
 
   let givenYear=d.getFullYear().toString();
   let k=givenYear.substring(2,4);
   let j=givenYear.substring(0,2);

   let x=Math.floor((givenDate+((13*(givenMonth+1))/5)+Number(k)+(Number(k)/4)+5-Number(j))%7);
   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

$("#dayResult").text(daysOfWeek[x]);
  })
});