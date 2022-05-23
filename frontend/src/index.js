import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import './requests'
import {registerRequest} from "./requests";
$(document).ready(function(){
   $('form').submit(function(e){
       e.preventDefault()
       let emailAddress = $('#email').val()
       let name = $('#adminName').val()
       let company_name = $('#companyName').val()
       let password = $('#password').val()
       const args = JSON.stringify({
           "name": name,
           "email": emailAddress,
           "company_name": company_name,
           "password": password
       });

       console.log(args)
       registerRequest(args)
   });
});