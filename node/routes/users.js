var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectID;
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
            // //链库
            // var db = client.db(database); //库 db
            // var goods = db.collection('products'); //表
            // var users = db.collection('users');
            // // console.log(req.query)
            //
            // goods.find({
            //     '_id': ObjectId(req.query.id)
            // }).toArray(function(err, result) {
            //
            //     let good=result;
            //     goods.updateOne({
            //             '_id': ObjectId(req.query.id)
            //         }, {
            //             $set: {
            //                 'number':('1'-0)
            //             }
            //       })
                // console.log(res);
                // let good=res;
                //  users.updateOne({
                //     username:req.session.username
                // }, {
                //     $set: {
                //         goods: res,
                //     }
                // }, function(err, res) {
                //     if(err) {
                //         throw err;
                //     } else {
                //         console.log(res.result.nModified + " 条文档被更新");
                //     }
                //
                // });
                // users.find({
                //     username:req.session.username
                // }).toArray(function(err, res) {
                //     console.log(res)
                // })
                // console.log(good)
                console.log(req.session.username)
                if(!req.session.username) res.send({error:1,msg:'未登录'});
                else res.send({error:0,msg:req.session.username,good:good});
            // });
        }
    });
});

module.exports = router;