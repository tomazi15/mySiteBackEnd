const nodemailer = require('nodemailer');

class MailerController {
    
    mailer (req, res) {
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
                    res.status(400);
                    res.json({
                        type: 'error',
                        message: 'message failed to send'});
                }
                // console.log('Message response: %s', info.envelope);
                // console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
                transporter.close();

                res.status(200);
                res.json({
                    type: 'sucess',
                    message: 'email has been sucesfully sent'
                });

            });
        });
    };
};

module.exports = MailerController;