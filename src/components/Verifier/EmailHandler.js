import emailjs from '@emailjs/browser';
import {getEmailData} from '../Connection/DataHandler'
export default async function sendTo(mail, code) {
   try{
    /*if(mail!== null && code !== null){
    const emailData = await getEmailData('ajdy236dvasu623bjs721028456zxjb9');
    emailjs.send(emailData.service,emailData.template , {
        publicKey:emailData.pub_key,
        to_name: mail,
        message: code
    }).then(() => {
            console.log('SUCCESS!');
        }).catch((error) => {
            console.log('FAILED...', error.text);
        })
    }*/
} catch (error) {
    console.error('Error sending email:', error);
  }
}