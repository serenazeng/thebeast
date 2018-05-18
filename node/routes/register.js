var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient; //创建客户端
var address = 'mongodb://localhost:27017'; //地址
var database = 'thebeast';
/* GET home page. */
router.get('/', function(req, res, next) {
	// 兜库->返回给前端(send,write)
	mongoCt.connect(address, (err, client) => {
		if(err) {
			res.send('error index').status(500);
		} else {
			//链库
			var db = client.db(database); //库 db
			var users = db.collection('users'); //表
			users.insertOne(req.query);
			console.log(req.query)
            res.send({error:0,msg:'成功'});
			res.end();

		}
	});
});

module.exports = router;