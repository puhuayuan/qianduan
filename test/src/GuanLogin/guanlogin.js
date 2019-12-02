import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd';
var GuanloginCSS = require('./guanlogin.css')

export default class GuanLoginPage extends React.Component {
    render() {
        return (
            <div>
                <div className={GuanloginCSS.loginA}>
                    <a href="/caijing"><h3>西希新闻网</h3></a>
                </div>
                <div className={GuanloginCSS.loginB}>
                    <div className={GuanloginCSS.loginC}>
                        <h5>管理员登录</h5>
                        <div className={GuanloginCSS.loginS}>
                            <input type="text" placeholder="请输入账号"></input>
                        </div>
                        <div className={GuanloginCSS.logink}>
                            <input type="text" placeholder="请输入密码"></input>
                        </div>
                        <div className={GuanloginCSS.loginS}>
                            <Link to="/guanli">
                                <button>立即登录</button></Link>
                            <div >
                                <Icon type="heart"  className={GuanloginCSS.heart} />
                                <Icon type="lock" className={GuanloginCSS.lock} />
                            </div>                          
                            </div>
                            </div>
                            </div>
                            </div>
        )
    }
}