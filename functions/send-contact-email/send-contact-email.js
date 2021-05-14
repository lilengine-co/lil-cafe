const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'tienbienit1992@gmail.com',
          pass: 'jfpbblcwodzwjsfp'
        },
    });
    
    const bodyJSON = JSON.parse(event.body);

    // Sent to admin email
    var message = {
        from: bodyJSON.user,
        to: process.env.MAIL_TO,
        subject: bodyJSON.subject,
        html: bodyJSON.html
    };

    transporter.sendMail(message, function(error, info) {
    	if (error) {
    		callback(error);
    	} else {
    		callback(null, {
			    statusCode: 200,
			    body: "Ok"
	    	});
    	}
    });

    // Sent to user email
    var messageToUser = {
        from: "Lil-cafe Manager",
        to: bodyJSON.email,
        subject: bodyJSON.subject,
        html: bodyJSON.htmlUser
    };
    
    transporter.sendMail(messageToUser, function(error, info) {
    	if (error) {
    		callback(error);
    	} else {
    		callback(null, {
			    statusCode: 200,
			    body: "Ok"
	    	});
    	}
    });
     // from: process.env.MAIL_LOGIN,
    //     to: process.env.MAIL_TO,
    //     subject: process.env.SUBJECT,
    //     text: event.body,
    //     html: event.html
}