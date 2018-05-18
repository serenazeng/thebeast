import React, {Component} from 'react';
import '../assets/css/mine.css'
class MineView extends Component {
    render(){
        return(
            <div>
                <header>
                    {/*<div className="header-left">*/}
                        <div className="menu-icon">
                        </div>
                    {/*</div>*/}
                    {/*<div className="header-center">*/}
                        <p className="title">个人中心</p>
                    {/*</div>*/}

                </header>


                <div id="member-info">
                    <div className="member-avatar">
                        <img src="https://img.thebeastshop.com/member/privilege/level-icon/level-one.jpg@90q.jpg" width="" height=""/>
                    </div>
                    <div className="member-nickname">Echo</div>
                    <div className="member-level">
                        <a href="benefit"><span>松鼠会员</span></a>
                        <a href="score"><span>积分229</span></a>
                    </div>
                </div>
                <div id="member-nav">
                    <div className="tab-nav"><i className="icon mycard"></i> 我的卡券
                    </div>
                    <div className="tab-nav"><i className="icon myscore"></i> 我的积分
                    </div>
                    <div className="tab-nav"><i className="icon myright"></i> 我的特权
                    </div>
                </div>
                <div id="table-group">
                    <div className="table-view">
                        <div className="table-cell "><span className="label">我的订单</span></div>
                    </div>
                    <div className="table-view">
                        <div className="table-cell "><span className="label">我的收藏</span></div>
                    </div>

                    <div className="table-view">
                        <div className="table-cell "><span className="label">圣诞心意卡</span></div>
                    </div>

                    <div className="table-view">
                        <div className="table-cell ">
                            <a href="tel:400-9200-108">
                                <span className="label">电话客服</span>
                            </a>
                        </div>
                    </div>

                    <div className="table-view">
                        <div className="table-cell navigate-right"><span className="label">实体店自助结账登录</span></div>
                    </div>
                </div>
            </div>
        )
    }
};

export default MineView;