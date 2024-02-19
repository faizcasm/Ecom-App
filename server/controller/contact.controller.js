import nodemailer from 'nodemailer'
const contact = async(req,response)=>{
    const from = req.body.from
    const to = "faizanillahi573@gmail.com"
    const subject = req.body.subject
    const message = req.body.message

    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"clownm18@gmail.com",
            pass:"qqpx zpwx ogfv smtr"
        }
    });
    var mailoption = {
        from:from,
        to:to,
        subject:subject,
        text:message
    }
    transporter.sendMail(mailoption,function(err,info){
        if(err){
            console.log("Error ",err);
        }
        else{
            console.log("Email send "+info.response);
        }
        response.redirect('/')
    })
}
export default contact