const enterRoute=(to, replace,next)=>{
    //to //去向路由
    //replace 重定向函数 replaceState(url)
    // next();//允许,一定要写
    //to.location.query.data=data;//路由数据预载，存到目标路由的query
    // console.log(to,replace,next);

    /* fetch('3000:/user_id').then(data=>{ //数据预载
       if(data.isHasId){
         to.location.query.数据=库数据data;//传递给目标路由
         next();//放过
       }else{
         replace('/login');
         next();
       }
     });*/
    fetch('http://localhost:3000/users',{
        credentials: 'include', //凭证
        method:'get',
        // headers:{
        //     'Accept':'application/json,text/plain,*/*',
        //     'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        // },
    }).then(res=>res.json()).then(
        data=>{
            console.log(data)
            if(data.error==1){
                replace('/login')
            }else{

                to.location.query.user=data.msg
            }
            next()
        }
    )



};
export default enterRoute;