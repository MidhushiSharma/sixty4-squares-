const express = require("express");
const bodyParser = require("body-parser");
var fs = require('fs');
const nodemailer = require("nodemailer");
const app= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index");
});
app.get("/contacts", function(req,res){
    res.render("contacts");
});
app.get("/about", function(req,res){
    res.render("about");
});
app.get("/JALnews", function(req,res){
    res.render("JALnews");
});
app.get("/PUNJABnews", function(req,res){
  res.render("PUNJABnews");
});
app.get("/all-india news", function(req,res){
  res.render("all-india news");
});
app.get("/international news", function(req,res){
  res.render("international news");
});
app.get("/tournaments", function(req,res){
    res.render("tournaments");
});
app.get("/rtournaments", function(req,res){
  res.render("rtournaments");
});
app.get("/register", function(req,res){
  res.render("register");
});
// app.post('/submit',function(req,res){
//     let name = req.body.name
//     let email = req.body.email
//     let number = req.body.number
//     fs.appendFile('data.txt',`name: ${name}, email: ${email}, number: ${number}\n`, function(e){
//       if(e){
//         console.log(e)
//       }
  
//       let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         secure:'false',
//         auth: {
//           user: 'midhushii.sharma@gmail.com',
//           pass: 'Mi009#25sh'
//         }
//       });
    
//       let mailOptions = {
//         from: '"ratedr@gmail.com" <midhushii.sharma@gamil.com>',
//       to: 'midhushi.sharma@gamil.com',
//       subject: 'Successfully Tickets Booked',
//       text: 'Congratulation you have successfully booked the ticket for the upcoming event',
//     //   html: output
//     };
    
//       transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//           console.log(error);
//           res.status(500).send('Error sending email');
//         } else {
//           console.log('Email sent: ' + info.response);
//           res.render('success');
//         }
//       });
//     });
//   })
app.post('/submit',function(req,res){
  let name = req.body.name
  let email = req.body.email
  let tournament= req.body.tournament
  let number = req.body.number
  let age= req.body.age
  
  fs.appendFile('data.txt',`name: ${name}, email: ${email}, tournament: ${tournament}, number: ${number}, age:${age}\n`, function(e){
    if(e){
      console.log(e)
    }

    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'midhushi.sharma@gmail.com',
    //     pass: 'Mi09#25sh'
    //   }
    // });

    
    // var mailOptions = {
    //   from: 'midhushi.sharma@gamil.com',
    //   to: req.body.email,
    //   subject: 'Successfully Tickets Booked',
    //   text: 'Congratulation you have successfully booked the ticket for the upcoming event'
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //    res.render('success')
    //   }
    // });
    
       res.render('success');
  })
})
app.listen(8000, function(){
    console.log("Server started on the port 8000");
});
