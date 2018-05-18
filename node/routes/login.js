var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient; //创建客户端
var address = 'mongodb://localhost:27017'; //地址
var database = 'thebeast';
/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body)
	// 兜库->返回给前端(send,write)
	mongoCt.connect(address, (err, client) => {
		if(err) {
			res.send('error index').status(500);
		} else {
			//链库
			var db = client.db(database); //库 db
			var users = db.collection('users'); //表
			console.log(req.body.username, req.body.userpass)
			users.find({
                username: req.body.username,
                userpass: req.body.userpass
			}).toArray(function(err, results) {
				if(results.length == 0) {
					res.send({error:1,msg:'未登录'});
				} else {
                    console.log('登录',req.body);
                    //用req.body.username 兜库，看有无用户名,有才种,并取用户信息 ...
                    req.session.username=req.body.username;//种
                    res.send({error:0,msg:'成功',data:{msg:req.body.username,}});

				}

			})
			// res.end();
		}
	});
});

module.exports = router;