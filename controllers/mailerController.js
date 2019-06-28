const nodemailer = require('nodemailer');

class MailerController {
    
    mailer (req) {
        console.log('HELLO REQUEST', req.body);
        nodemailer.createTestAccount((err, account) => {
            const emailHtml = `
                <h3>COntact Details</h3>
                <ul>
                    <li>Name: ${req.body.name}</li>
                    <li>Email:  ${req.body.email}</li>
                </ul>
                <h3>Message: </h3>
                <p> ${req.body.message}</p>
            `;
    
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                auth: {
                    user: 'ronaldo41@ethereal.email',
                    pass: 'HmfF6u2xpjcqDYbb5v'
                }
            });
    
            let mailOptions = {
                from: 'test@testaccount.com',
                to: 'ronaldo41@ethereal.email',
                replayTo: 'test@testaccount.com',
                subject: 'New Message',
                text: req.body.message,
                html: emailHtml
            }
    
            transporter.sendMail(mailOptions, (err, info)=> {
                if (err) {
                    return console.log(err);
                }
                console.log('Message response: %s', info.envelope);
                console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
                // res.sendStatus(200).json();
                // return res.sendStatus(200)
                transporter.close();
                
            });
        });
    };
};

module.exports = MailerController;