//Define the result variable
function solveBAC(form) {
    var ounces = form.ounces;
    var percent = form.percent;
    var weight = form.weight;
    var hours = form.hours;
    var gender = form.gender;
    var result;
    var message;
    var BAC;
    var data = [];

    if (gender === 'male') {

        // This is the formula for males
        BAC = (ounces * percent * 0.075 / weight) - (hours * 0.015);

        if (BAC < 0) {
            data.message = 'You are not legally intoxicated.';
        } else if (BAC === 'NaN') {
            data.message = 'Please try again.';
        } else if (BAC > 0.08){
            data.message = 'Under Louisiana Law You are Intoxicated.';
        } else if (BAC < 0.08){
            data.message = 'You are not legally intoxicated';
        }

    } else {

        BAC = (ounces * percent * 0.075 / weight) - (hours * 0.017);

        if (BAC < 0) {
            data.message = 'You are not legally intoxicated.';
        } else if (BAC === 'NaN'){
            data.message = 'Please try again.';
        } else if (BAC > 0.08){
            data.message = 'Under Louisiana Law You are Intoxicated.';
        } else if (BAC < 0.08){
            data.message = 'You are not legally intoxicated';
        }

    }

    data.result = BAC;
    return data;
}

//Submit the form
$('form').submit(function (e){
    e.preventDefault();
    var vals = $('form').serializeArray();
    var form = [];

    //Loop through the submitted array and create an object with the data
    vals.forEach(function (v){
        form[v.name] = v.value;
    });

    var calculation = solveBAC(form);
    $('#result').html(calculation.result + ' %');
    $('#message').html(calculation.message);
});
