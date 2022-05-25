/* Node Modules */
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-validation'
/* Local Files */
import './style.scss';
import './requests';
import {registerRequest} from "./requests";

$(document).ready(function(){
    $('#register-user').validate({
        rules: {
            // simple rule, converted to {required:true}
            adminName: "required",
            password: "required",
            companyName: "required",
            // compound rule
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function(e){
            const args = JSON.stringify({
                "name": $('#adminName').val(),
                "email": $('#email').val(),
                "company_name": $('#companyName').val(),
                "password": $('#password').val()
            });

            console.log(args)
            registerRequest(args)
            console.log('foo')
        }
    });
});