import React, {Component} from 'react';
import '../assets/css/nav.css'
class Select extends Component {
    render(){
        return (
            <div>
                <nav className='select'>
                    <ul>
                        <li>
                            <a href="#">新鲜上架</a>
                        </li>
                        <li>
                            <a href="#">本周主打</a>
                        </li>
                        <li>
                            <a href="#">我的账号</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Select;