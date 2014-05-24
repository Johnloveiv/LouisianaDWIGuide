//Define the result variable
var BAC;

function solveBAC(form) {
   var ounces = form.ounces.value;
   var percent = form.percent.value;
   var weight = form.weight.value;
   var hours = form.hours.value;
   var gender = form.gender.option;
   var result;
   var message;

   if (gender === 'true') {

       // This is the formula for males
       BAC = (ounces * percent * 0.075 / weight) - (hours * 0.015);

       if (BAC < 0) {
           message = 'You are not legally intoxicated.';
           result = '-- neglible amount --';
       } else if (BAC === 'NaN') {
           message = 'Please try again.';
       } else if (BAC > 0.08){
           message = 'Under Louisiana Law You are Intoxicated.';
       } else if (BAC < 0.08){
           message = 'You are not legally intoxicated';
       }

       form.message.value = message;
       form.bacamount.value = result + ' %';

   } else {

       BAC = (ounces * percent * 0.075 / weight) - (hours * 0.017);

       if (BAC < 0) {
           message = 'You are not legally intoxicated.';
           result = '-- neglible amount --';
       } else if (BAC === 'NaN'){
           message = 'Please try again.';
       } else if (BAC > 0.08){
           message = 'Under Louisiana Law You are Intoxicated.';
       } else if (BAC < 0.08){
           message = 'You are not legally intoxicated';
       }

       form.message.value = message;
       form.bacamount.value = result + ' %';
   }
}
