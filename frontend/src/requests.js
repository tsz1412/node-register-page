export function registerRequest(args){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:6868/api/users',
        timeout: 0,
        headers: {
            'Content-Type': 'application/json'
        },
        data: args,
        success: function( data ) {
            $('.loader').addClass('hidden');
            $('.user-register-section').addClass('hidden');
            $('.user-register-confirmation-section').removeClass('hidden');
            $('.steps .step-2 .bullet').addClass('current');
            $('.steps .steps-bar').addClass('completed');
            console.log(data)
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseJSON)
        },
    });
}