
const nodemailer = require('nodemailer');

export async function sendEmailToken(email: string, token:string) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jesuobohgift@gmail.com',
          pass: 'pvpjttdjpmmivoki',
        },
      });
      
      
      transporter.sendMail({
        from: 'Textr Admin jesuobohgift@gmail.com',
        to: email,
        subject: 'Textr OTP',
        text: `Your one time password: ${token}`,
        html: `Your one time password: ${token}`,
      }).then((info: any) => {
        console.log({info});
      }).catch(console.error);

}

