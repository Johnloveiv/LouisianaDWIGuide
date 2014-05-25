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
        BAC = (ounces * (percent / 100) * 5.14 / ( weight * .73)) - (hours * 0.15);

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

        BAC = (ounces * (percent / 100) * 5.14 / ( weight * .66)) - (hours * 0.15);

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
$('form').bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        percent: {
            validators: {
                notEmpty: {
                    message: 'The field is required and cannot be empty'
                },
                lessThan: {
                    value: 100,
                    inclusive: true,
                    message: 'This can be no more than 100'
                },
                numeric: {
                    message: 'This field must be numbers only'
                }
            }
        },
        weight: {
            validators: {
                notEmpty: {
                    message: 'The field is required and cannot be empty'
                },
                greaterThan: {
                    value: 100,
                    message: 'Must be more than 100 lbs.'
                },
                numeric: {
                    message: 'This field must be numbers only'
                }

            }
        },
        hours: {
            validators: {
                notEmpty: {
                    message: 'The field is required and cannot be empty'
                },
                numeric: {
                    message: 'This field must be numbers only'
                }
            },
        },
        ounces: {
            validators: {
                notEmpty: {
                    message: 'The field is required and cannot be empty'
                },
                numeric: {
                    message: 'This field must be numbers only'
                }
            }
        }
    },
    submitHandler: function(validator, aform, submitButton) {

        var vals = aform.serializeArray();
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
    }
});

//Handle Redo
$('.redo').click(function (){
    location.reload();
});
