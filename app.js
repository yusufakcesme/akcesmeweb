const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// static folder
app.use('/public', express.static(path.join(__dirname, 'public')));


// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.get('/', (req, res) => {
  res.render('index', { layout: false });
});


app.locals.layout = false;
app.post('/send', (req, res) => {


  const output = `
    <p>yusufakcesme.com iletişim mesajı.</p>
    <h3>Detaylar: </h3>
    <ul>
      <li>Ad Soyad: ${req.body.name}</li>
      <li>Telefon: ${req.body.phone}</li>
      <li>E-mail: ${req.body.email}</li>
      <li>Mesaj: ${req.body.message}</li>
    </ul>
  `;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yusufakcsm@gmail.com',
      pass: 'ytrewq18'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"yusufakcesme.com İletişim" <yusufakcsm@gmail.com>', // sender address
    to: 'yusufakcesme0@gmail.com', // list of receivers
    subject: 'Node Contact Request', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
    res.render('index', { message: 'E-mail başarıyla gönderildi!' });
  })

});




app.listen(3000, () => {
  console.log('Server is ready!')
});