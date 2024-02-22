// import {gnerateCode} from './code'
import emailjs from '@emailjs/browser';
require('dotenv').config()

console.log(process.env)
export default function sendTo (mail, code) {
    emailjs.send("service_tgx4l9o", "template_f8rwu2g", {
        to_name: mail,
        message: code,
    }).then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
    )
}