import React, {Component} from 'react';
import  HeaderBar from '../components/HeaderBar';
import  Select from '../components/Select';
import  Products from '../components/Products';

class HotView extends Component {
    render(){
        return(
            <div>
                <HeaderBar/>
                <Select/>
                <Products/>

            </div>
        )
    }
};
export default HotView;