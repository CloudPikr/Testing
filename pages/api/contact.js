import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        // Update SendGrid API key here
        api_key: '###'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {

    //Endpoint (request URL): 
   //  URL='https://moodleconsultancy.com/workscripts/endpoints/mailer.php'

   // console.log(req.body)
    const {name, email, number, subject, text} = req.body;
    const data = {
        // Update email address here
        to: 'example@gmail.com',
        from: email,
        subject: 'Hi there',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        ` 
    };
    try {
        // const response = await mailer.sendMail(data);
        // console.log(response)
        // res.status(200).send("Email send successfully")

        URL='https://moodleconsultancy.com/workscripts/endpoints/mailer.php'

    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}