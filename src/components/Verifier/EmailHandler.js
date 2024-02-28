import emailjs from '@emailjs/browser';
export default function sendTo(mail, code) {
    emailjs.init({
        publicKey: "s9e-8A8ltIc21Fbtc",
    })

    emailjs.send("service_tgx4l9o", "template_f8rwu2g", {
        publicKey: 's9e-8A8ltIc21Fbtc',
        to_name: mail,
        message: code
    }).then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
    )
}