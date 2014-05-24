$(document).ready(function() {
    $('form').bootstrapValidator({
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
        }
    });
});
