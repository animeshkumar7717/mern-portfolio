const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendEmail = async (req, res) => {
    try {
        const { text, name, email } = req.body;

        const config = {
            service: 'gmail',
            auth: {
                user: 'animesh.kumar7717@gmail.com',
                pass: 'txbt iheb tzvh hdzb'
            }
        }

        const transporter = nodemailer.createTransport(config);
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: name,
                link: "https://mailgen.js/",
                copyright: 'Copyright © 2016 Mailgen. All rights reserved.',
            }
        })

        let response = {
            body: {
                intro: `Animesh Kumar I've seen your portfolio and pleasure to mail you... please reply me on my mail: ${email}`,
                dictionary: {
                    message: text
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        }

        let mail = MailGenerator.generate(response);
        let message = {
            to: 'animesh.kumar7717@gmail.com',
            subject: "Portfolio View",
            html: mail
        }

        transporter.sendMail(message).then(() => {
            return res.status(200).json({
                success: true,
                message: 'Your message sent successfully...',
                data: text,
            })
        }).catch((error) => {
            return res.status(500).json({ error });
        })
    } 
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error sending email',
            error: error.message
        });
    }
};

module.exports = { sendEmail };
