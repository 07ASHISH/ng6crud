

var  express = require('express');
var userRoutes = express.Router();
var multer  = require('multer')



var User  = require('../Model/user');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})


var upload = multer({ storage: storage }).single('img');

 
userRoutes.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      
      return res.json(err);
    }
    
    res.json("file upload")
  })
})


userRoutes.route('/add').post(function (req, res) {
    var user = new User(req.body);
    user.data
     user.save()
      .then(item => {
      res.status(200).json({'user': 'user added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

  
  userRoutes.route('/').get(function (req, res) {
    User.find(function (err, userdata){
     if(err){
       console.log(err);
     }
     else {
       res.json(userdata);
     }
   });
 });

 userRoutes.route('/edit/:id').get(function (req, res) {
    var id = req.params.id;
    User.findById(id, function (err, user){
        res.json(user);
    });
  });
  
 
//   update data using id
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, user) {
     if (!user)
     {
       return next(new Error('Could not load Document'));
     }
     else {
      user.name = req.body.name;
      user.age = req.body.age;
      user.email = req.body.email;
       user.save()
       .then(user => {
           res.json('Update complete');
       })
       .catch(err => {
             res.status(400).send("unable to update the database");
       });
     }
   });
 });
 
 //  delete data
 userRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, coin){
         if(err) res.json(err);
         else res.json('Successfully removed');
     });
 });
 
//  userRoutes.route('/upload').post( function(req, res){
//    upload(req,res, function(err){
//      if(err) { return res.status(501).json({error:err})}
//      return res.json({originalname:req.file.originalname, uploadname:req.file.filename})
//    })
//  })

  module.exports = userRoutes;
