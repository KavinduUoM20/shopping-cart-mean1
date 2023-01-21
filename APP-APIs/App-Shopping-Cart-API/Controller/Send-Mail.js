const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "gmail",
    auth: {
        user: 'kavindums834@gmail.com', // generated ethereal user
        pass:'Uththara@1225', // generated ethereal psassword
    },
});

// send mail with defined transport object
let minfo ={
    from: 'kavindums834@gmail.com', // sender address
    to: "eneuredai@gmail.com", // list of receivers
    subject: "Hello Eneured !", // Subject line
    text: "Hello This Is The First Test Mail " // plain text body
};

transporter.sendMail(minfo,function (error,info) {
    if (error){
        console.log(error)
    }else {
        console.log('Mail Sent'+info.response)
    }
})
