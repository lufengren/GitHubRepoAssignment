const mongoose = require('mongoose');
var Tasks = mongoose.model('Task');
module.exports = {
    gettasks: function (req, res) {
        //res.render('index');
        Tasks.find({}, function (err, datas) {
            if (err) {
                console.log('something went wrong(retrive users)');
                res.json(err);
            } else {
                console.log('successfully retrive the result(retrive users)!');
                res.json(datas);
            }
        });
    },

    newtask: function (req, res) {
        let bob = new Tasks({
            title: req.body.title,
            description: req.body.description,
            completed: false
        });
        bob.save(function (err, data) {
            if (err) {
                console.log('sth wrong (create task)');
                res.json(err);
            } else {
                //res.redirect('/tasks/'+data._id);
                console.log('success save');
                res.json(data);
            }
        });
    },

    gettask: function (req, res) {
        Tasks.findOne({
            _id: req.params.id
        }, function (errs, datas) {
            if (errs) {
                console.log('something went wrong(retrive users)');
                res.json(errs);
            } else {
                console.log('successfully retrive the result(retrive users)!');
                res.json(datas);
            }
        });
    },


    updatetask: function (req, res) {
        let updatedinfo = {
            'title': req.body.title,
            'description': req.body.description,
            'completed': req.body.completed
        };
        Tasks.updateOne({
            _id: req.params.id
        }, updatedinfo, function (err, datas) {
            if (err) {
                console.log('sth wrong');
                res.json(err);
            } else {
                console.log('changed a thing');
                console.log(datas);
                res.json(datas);
            }
        });
    },

    delete: function (req, res) {
        Tasks.deleteOne({
            _id: req.params.id
        }, function (err, data) {
            if (err) {
                //console.log()
                res.json(err);
            } else {
                res.json(data);
            }
        });
    }
};