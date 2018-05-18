const MongoClient = require('mongodb').MongoClient;//创建客户端
const url = 'mongodb://localhost:27017';//地址

const dbName = 'thebeast';//要操作的库名

MongoClient.connect(url,function (err,client) {//连接客户端
    const db = client.db(dbName);//连接数据库
    const collection = db.collection('banner');//连接要操作的集合名字


    // collection.updateOne({'p':'1020'},{$set:{'sl':1}},function (err,res) {
    //     if (err) throw err;
    //     console.log(res.result.nModified + " 文档更新");
    // });

    // collection.find({}).toArray(function (err,resluts) {
    //     console.log(resluts);
    // })

    // collection.deleteMany({},function(err, obj){
    //     if (err) throw err;
    //     console.log(obj.result.n + " 条文档被删除");
    //     // db.close();
    // });



    // collection.insertMany([
    // //     {'image':'http://localhost:3000/images/15035088_1_1474426885783.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "封存极美的樱花","name": "粉色樱花芳香蜡片（2 片装）","brand_name":"THE BEAST ","price": "¥98"},
    // //     {'image':'http://localhost:3000/images/20180131151823431104.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "-","name": "星梦乐园淡蓝色丝 巾","brand_name":"Karen Mabon ","price": "¥790"},
    // //     {'image':'http://localhost:3000/images/20180320164737495716.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "特别的皮拎手设计","name": "星云粉皮拎手花 器","brand_name":"THE BEAST ","price": "¥129"},
    // //     {'image':'http://localhost:3000/images/20180313182245117870.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "-","name": "星辰马克杯","brand_name":"THE BEAST ","price": "¥139"},
    // //     {'image':'http://localhost:3000/images/20180309144224033561.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "-","name": "四片可拆卸花瓣耳 环","brand_name":"OOAK ","price": "¥1560"},
    // //     {'image':'http://localhost:3000/images/20180315142658920565.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "-","name": "家居收纳篮","brand_name":"THE BEAST ","price": "¥129"},
    // //     {'image':'http://localhost:3000/images/20180316113810502611.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "-","name": "酸甜雪芭 COLORS系列香薰蜡 烛","brand_name":"THE BEAST ","price": "¥229"},
    // //     {'image':'http://localhost:3000/images/20180309180138066345.jpg@4e_0o_0l_345h_330w_90q.jpg',"summary": "-","name": "莫奈花园雨伞","brand_name":"THE BEAST ","price": "¥229"},
    //     {'image':'http://localhost:3000/images/503e3cabeffd427ed0f680beba83cb27.jpg'},
    //     {'image':'http://localhost:3000/images/a417cc94520b4923016f36641cfb8862.jpg'},
    //     {'image':'http://localhost:3000/images/9ac876e0f799b97d0cae0ebb52af9375.png'},
    //     {'image':'http://localhost:3000/images/4ba317f6a1eec1020e6db7509c3a56d8.gif'},
    //     {'image':'http://localhost:3000/images/5108881cb9c127f1b56f2d17732d9cf3.gif'}
    //     ],function(err, res) {
    //     if (err) throw err;
    //     console.log("插入的文档数量为: " + res.insertedCount);});







} )