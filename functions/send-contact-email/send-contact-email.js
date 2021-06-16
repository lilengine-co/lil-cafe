const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API);

exports.handler =  async (event, context, callback) => {
  const data = JSON.parse(event.body)
  const { email, subject, user, html, htmlUser } = data;
  
  // Send email to Admin
  const send_to_admin = {
    to: process.env.ADMIN_EMAIL,
    from: process.env.SENDGRID_EMAIL,
    subject: subject ? subject : 'We Have a New Booking',
    html: html,
  };

  // Send email to User
  const send_to_user = {
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: subject ? subject : 'We Have a New Booking',
    html: htmlUser,
  };

  try{
    await sgMail.send(send_to_admin)
    await sgMail.send(send_to_user)
    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e){
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};
