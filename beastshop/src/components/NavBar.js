import React, {Component} from 'react';
import {Link} from 'react-router';
import '../assets/css/nav.css'
class NavBar extends Component {
    render(){
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">新鲜上架</Link>

                        </li>
                        <li>
                            <Link to="/latest">本周主打</Link>
                        </li>
                        <li>
                            <Link to="/mine">我的账号</Link>

                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default NavBar;