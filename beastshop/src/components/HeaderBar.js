import React, {Component} from 'react';
import {Link} from 'react-router';
import '../assets/css/header.css';
class HeaderBar extends Component {
    render(){
        return (
            <div>
                <header>
                    <div className="header-left">
                        <div className="menu-icon">
                        </div>
                    </div>
                    <div className="header-center">
                        <p className="title">野兽派</p>
                    </div>

                    <div className="header-right">
                        <img src="./assets/image/search%20%20.png" />
                        <Link to='/cart'><img src="./assets/image/shop.png" /></Link>

                    </div>
                </header>
            </div>
        );
    }
}

export default HeaderBar;