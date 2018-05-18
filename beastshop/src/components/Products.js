import React, {Component} from 'react';
import {Link} from 'react-router';
import '../assets/css/products.css';
class Products extends Component {
 // state={list:[]};
    constructor(props){
        super();
        this.state={
            list:[]
        }

    };
 componentDidMount(){
        let url='http://localhost:3000/index';
        fetch(url).then(res=>res.json()).then(
            data=>{
                // this.setState=({list:data})
                this.setState({list:data})
                console.log(data)
            })
    }
    render(){
        return (
                <div>
                <div id="products">

                    <div className="products-wrap">
                        {
                            this.state.list.map((item)=>(
                                    <div className="products-list" key={item._id}>
                                        {/*<Link to='/product/001'>*/}
                                        <Link to={{pathname:'product/'+item._id,query:{a:1}}}>
                                        {/*<Link to={{pathname:'product/'+item.id,query:{a:'1'}}}>*/}
                                            <div className="product-image">
                                                <img src={item.image} />
                                            </div>
                                            <div className="product-info">
                                                <div className="summary">-</div>
                                                <div className="brand-name">{item.brand_name}</div>
                                                <div className="name">{item.name}</div>
                                                <div className="prices">{item.price}</div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            )

                        }

                    </div>
                </div>
                <div id="bottom-icon">
                        <img src="./assets/image/49732b5fa1d3580a87ff4e25c52bd705.png@90q.png" />
                 </div>
            </div>

        );
    };



}

export default Products;