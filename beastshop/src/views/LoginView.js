import React, {Component} from 'react';
import '../assets/css/login_reg.css'
class LoginView extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            userpass:'',
        }
        this.changeUserName=this.changeUserName.bind(this);
        this.changeUserPass=this.changeUserPass.bind(this)
        this.goLogin=this.goLogin.bind(this);
        this.goReg=this.goReg.bind(this)
    };
    changeUserName(ev){
        this.setState({
            username:ev.target.value
        })
    };
    changeUserPass(ev){
        this.setState({
            userpass:ev.target.value
        })
    }

    goLogin(){
        let url='http://localhost:3000/login'
        let params=new URLSearchParams();
        params.append('username',this.state.username);
        params.append('userpass',this.state.userpass);
        fetch(url,{
            method:'POST',
            credentials: 'include', //凭证
            headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
            },
            // body:"a=1&b=2"
            body:params
        }).then(res=>res.json()).then(data=>{
               if(data.error==0){
                   console.log(data.msg)
                   alert('登录成功！')
                   this.props.router.push('/mine')
               }else if(data.error==1){
                   console.log(data)
                    // this.props.router.push({pathname:'/reg'})
                   console.log('1');
               }else{
                    alert('密码或用户名输入错误！！')
               }
            })
    };
    goReg(){

        this.props.router.push('/reg')
    }
    // goback(){
    //     // this.props.router.go(-1);  返回
    //     // this.props.router.goBack();
    //     hashHistory.go(-1);
    // }
    render(){

        return(
            <div>
                <div id="login">
                    <div className="login-head">
                        <img src="./assets/image/login.png" />
                        <p className="title">亲爱的居民，欢迎回来</p>
                    </div>
                    <div className="login-main">
                        <div className="type">
                            <span className="active">手机号</span>
                            <span className="v-line">|</span>
                            <span className="">邮箱</span>
                        </div>
                        <div className="input-warp">
                            <div className="input-group">
                                <div>
                                    <div className="input-row">
									<span className="phone-area">
									+86
								</span>
                                        <span className="phone-select">
									中国大陆
								</span>
                                    </div>
                                    <div className="input-row">
                                        <input type="text" placeholder="请输入用户名或手机号" value={this.state.username} onChange={this.changeUserName}/>
                                    </div>
                                </div>
                                <div className="input-row"><input type="password" placeholder="请输入密码" value={this.state.userpass} onChange={this.changeUserPass}/></div>
                            </div>
                        </div>
                    </div>
                    <div className="to-forget"><span >忘记密码</span></div>
                    <div className="login-btn" onClick={this.goLogin}>
                        登录
                    </div>
                    <div className="bg"></div>

                </div>
                <div id="to-register" onClick={this.goReg}>
                    还不是居民？去注册;
                </div>
            </div>
        )
    };


};
export default LoginView;