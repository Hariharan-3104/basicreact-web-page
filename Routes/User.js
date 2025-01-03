const express = require('express');
let router = express.Router();

router.get('/:id', (req, res) => {
    console.log('User name is: ' + req.user.name);
    res.send('id value ' + req.params.id);
});

router.put('/createuser', (req, res) => {
    res.send('retrieve the data ' + req.params.id);
});

router.delete('/deleteuser1', (req, res) => {
    res.send('delete the data ' + req.params.id);
});

const users = [{ name: "hari" }, { name: "abbi" }, { name: "siva" }];

router.param('id', (req, res, next, id) => {
    console.log('user id is: ' + id);
    req.user = users[id];
    next();
});

module.exports = router;
