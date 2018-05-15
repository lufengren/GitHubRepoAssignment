const express = require('express');
var session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();
app.set('trust proxy', 1);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reglogUser');
var uniqueValidator = require('mongoose-unique-validator');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

var reglogUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,'email is required'],
        unique:true,
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    first_name: {
        type: String,
        required: [true,'first name is required'],
        minlength: [3,"lastname must at least 3 characters"]
    },
    last_name: {
        type: String,
        required: [true,"last name is required"],
        minlength: [3,"lastname must at least 3 characters"]
    },
    password:{
        type: String,
        required: [true,"password is required"],
        minlength: [8,"password must at least 8 characters"]
    },
    birthday: {
        type: Date,
        required: [true,"birthday is required"],
    },
});
reglogUserSchema.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.'});
mongoose.model('reglogUser', reglogUserSchema);
var reglogUser = mongoose.model('reglogUser');
var SALT_WORK_FACTOR = 5;
reglogUserSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

reglogUserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var path = require('path');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
const flash = require('express-flash');
app.use(flash());
app.use(express.static(path.join(__dirname,'./public')));
app.set('views',path.join(__dirname,'./views'));
app.set('view engine', 'ejs');


app.get('/',function(req,res){
    res.render('index');
    reglogUser.find({},function(err,result){
        console.log(result);
        if (err) {
            console.log('something went wrong(retrive users)');
        } else {
            console.log('successfully retrive the result(retrive users)!');
        }
    });
    
});

app.post('/register',function(req,res){
    console.log(req.body);
    var newUser = new reglogUser({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        birthday:req.body.birthday,
    });
    newUser.save(function(err){
        if(err){
            console.log('sth went wrong(createnewuser)');
            for(var key in err.errors){
                //console.log(key);
                req.flash('registration', err.errors[key].message);
                console.log(err.errors[key].message);
            }
            res.redirect('/');
        }else{
            console.log('successfully added a newuser');
            res.redirect('/');
        }
    });
});

app.get('/login',function(req,res){
    res.render('login');
});

app.post('/submitlogin',function(req,res){
    
});

app.listen(8000, function () {
    console.log("Listening on port 8000");
});
