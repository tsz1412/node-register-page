/* Node Modules */
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery-validation'
import '@fortawesome/fontawesome-free';
/* Local Files */
import './style.scss';
import './requests';
import {registerRequest} from "./requests";

$(document).ready(function(){

    $("#toggle_pwd").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
        $("#password").attr("type", type);
    });

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
            $('.loader').removeClass('hidden');
            const args = JSON.stringify({
                "name": $('#adminName').val(),
                "email": $('#email').val(),
                "company_name": $('#companyName').val(),
                "password": $('#password').val()
            });
            registerRequest(args);

        }
    });
});