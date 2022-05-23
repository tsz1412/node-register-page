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
            console.log(data)
        },
        error: function(xhr, status, error) {
            console.log(xhr.responseJSON)
        },
    });
}