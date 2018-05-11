var task=require('../controllers/restfuls.js');   
module.exports = function(app){
    app.get('/tasks',task.gettasks);
    app.post('/tasks',task.newtask);
    app.get('/tasks/:id',task.gettask);
    app.put('/tasks/:id',task.updatetask);
    app.delete('/tasks/:id',task.delete);
};


