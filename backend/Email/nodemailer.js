const nodemailer = require("nodemailer")

const msg = {
    from: "rote.tejas02@gmail.com",
    to: "tejas292002@gmail.com",
    subject: "Booking confirmed",
    text: "Booking is confirmed , See you there!!"
};


nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "rote.tejas02@gmail.com",
        pass: "uuuczsqaxzhtunuj"
    },
    port: 465,
    host: 'smpt.gmail.com'
})
    .sendMail(msg, (err) => {
        if (err) {
            return console.log("Error occured", err)
        } else {
            return console.log("Email.sent")
        }
    })