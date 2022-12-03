const {Router} = require ('express');
const router = Router();
const os = require('os');

var hostname=os.hostname();
var today= new Date();
var now=today.toLocaleString();
var file_json={"name":hostname, "hora":now}

router.get('/', (req, res) =>{
    res.send(file_json)
    console.log(file_json)
});

module.exports=router   ;
