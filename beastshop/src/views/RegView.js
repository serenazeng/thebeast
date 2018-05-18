import React, {Component} from 'react';
import '../assets/css/login_reg.css'
class RegView extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            userpass:'',
        };
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

    goReg(){
        let url='http://localhost:3000/register?username='+this.state.username+'&userpass='+this.state.userpass;
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.error==0){
                alert('注册成功！！')
                this.props.router.push('/login')
            }else{
                alert('格式有误，请重新注册')
            }
        })
    };
    goLogin(){
        this.props.router.push('/login')
    }
    render(){
        return(
            <div>
                <div id="login">
                    <div className="login-head">
                        <img src="./assets/image/login.png" />
                        <p className="title reg-title">注册成为THE BEAST TOWN新居民</p>
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
                                        <input type="text" placeholder="请输入手机号或用户名" value={this.state.username} onChange={this.changeUserName}/>
                                    </div>
                                </div>
                                <div className="input-row"><input type="password" placeholder="请输入密码" value={this.state.userpass} onChange={this.changeUserPass}/></div>
                            </div>
                        </div>
                    </div>

                    <div className="login-btn" onClick={this.goReg}>
                        注册
                    </div>
                    <div className="to-reg"><span >注册视为同意野兽派服务条款</span></div>

                    <div className="bg">

                    </div>

                </div>
                <div id="to-register" onClick={this.goLogin}>
                    已经是居民？去登录
                </div>
            </div>
        )
    };


};

export default RegView;