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
            data.status = 'sober';
        } else if (BAC === 'NaN') {
            data.message = 'Please try again.';
            data.status = 'error';
        } else if (BAC > 0.08){
            data.message = 'Under Louisiana Law You are Intoxicated.';
            data.status = 'drunk';
        } else if (BAC < 0.08){
            data.message = 'You are not legally intoxicated';
            data.status = 'sober';
        }

    } else {

        BAC = (ounces * percent * 0.075 / weight) - (hours * 0.017);

        if (BAC < 0) {
            data.message = 'You are not legally intoxicated.';
            data.status = 'sober';
        } else if (BAC === 'NaN'){
            data.message = 'Please try again.';
            data.status = 'error';
        } else if (BAC > 0.08){
            data.message = 'Under Louisiana Law You are Intoxicated.';
            data.status = 'drunk';
        } else if (BAC < 0.08){
            data.message = 'You are not legally intoxicated';
            data.status = 'sober';
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

    if (calculation.status === 'drunk'){
        $('#result .display').html('<h4><span class="glyphicon glyphicon-warning-sign"></span>&nbsp' +
        calculation.result.toFixed(3) +
        ' %</h4>' + calculation.message) .addClass('alert alert-danger');
    } else if (calculation.status === 'sober'){
        $('#result .display').html('<h4><span class="glyphicon glyphicon-ok"></span>&nbsp' +
        calculation.result.toFixed(3) +
        ' %</h4>' + calculation.message).addClass('alert alert-success');
    } else {
        $('#result .display').html('<h4><span class="glyphicon glyphicon-warning-sign"></span>&nbsp' +
        calculation.message + ' %</h4>').addClass('alert alert-danger');
    }
});
