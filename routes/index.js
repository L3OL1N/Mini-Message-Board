var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});
/* GET NEW page. */
router.get('/new', function(req, res) {
  res.render("form",{title: 'Message Board'});
});
router.post('/new',function(req,res){
  const messageText = req.body.textarea;
  const messageUser = req.body.userName;
  messages.push({
    text: messageText,
    user: messageUser, 
    added: new Date()
  });
  console.log(messages[2])
  res.redirect('/')
})
module.exports = router;
