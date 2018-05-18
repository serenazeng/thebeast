import React, {Component} from 'react';
import '../assets/css/daily.css'
    class Daily extends Component {
    render(){
        return (
                <div id="daily">
                    <div className="daily-title">
                        <div className="text">
                            BEAST DAILY
                        </div>
                        <div className="time">
                            <div className="time-wrap">
                                <i className="month">March</i>
                                <i className="year">2018</i>
                            </div>
                            <div className="date">
                                21
                            </div>

                        </div>

                    </div>
                    <div className="daily-items">
                        <a href="#">

                            <img src="./assets/image/83858aa686d09a26ecddbe147fb90f39.jpg@90q.jpg" />
                            <div className="title">
                                <div className="tag">HOME18S/S</div>
                                <div className="text">
                                    睡在春光里 | 2018 S/S 家居系列新品发布
                                </div>
                            </div>
                            <div className="desc">
                                人生最幸福，不过是睡在春光里，做个白日梦。
                            </div>

                        </a>
                    </div>
                </div>
        );
    }
}
export default Daily;