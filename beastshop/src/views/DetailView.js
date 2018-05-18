import React, {Component} from 'react';
import '../assets/css/header.css';
import '../assets/css/detail.css';
import {Link} from 'react-router';
class DetailView extends Component {
    render(){
        return(
            <div>
                <header>
                    <div className="header-left">
                        <div className="menu-icon">
                        </div>
                    </div>
                    <div className="header-center">
                        <p className="title">
                            THE BEAST
                        </p>
                    </div>

                    <div className="header-right">
                        <img src="./assets/image/like.png" />

                    </div>
                </header>
                <div id="product-detail">

                    <a>
                        <div className="product-image">
                            {/*<div className="swiper"></div>*/}
                        </div>
                        <div className="product-info">

                            <div className="brand-name">THE BEAST</div>
                            <div className="name">星辰马克杯</div>
                            <div className="prices">¥139</div>
                            <div className="presell">
                                该商品预售, 预计4月3日发货
                            </div>
                        </div>
                    </a>
                    <div className="products-sale">
                        <ul>
                            <li>
                                <span>满减</span>
                                <span>睡在春光里活动满599-59，最高可减799元</span>
                            </li>
                            <li>
                                <span>满赠</span>
                                <span>满￥999即赠铜合金小鸭子</span>
                            </li>
                        </ul>
                    </div>
                    <div className="products-badges">

                         <img src="./assets/image/badges.png" />

                        <span>正品保证</span>

                    </div>

                </div>
                <footer>
                    <div className="minicart">
                        <a href="#"><i>12</i></a>
                    </div>
                    <div className="action-button">
                        <a href="#" className="buy  btn">立即购买</a>
                        <Link className="cart btn" to='/cart'>加入购物车</Link>
                    </div>
                </footer>
            </div>
        )
    }
};

export default DetailView;