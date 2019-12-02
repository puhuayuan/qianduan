import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {  Icon } from 'antd';
var loginCSS= require('./login.css')

export default class LoginPage extends React.Component{
    render(){
        return(
            <div className={loginCSS.login}>
            <div className={loginCSS.loginB}>
            <div className={loginCSS.loginC}> 
               <h5>账户登录</h5>
               <div className={loginCSS.loginS}>
            <input type="text" placeholder="请输入手机号"></input>
            </div>
            <div className={loginCSS.logink}>
            <input type="text" placeholder="请输入密码"></input>
            </div>
            <div className={loginCSS.loginS}>
                <Link to="/caijing">
            <button>立即登录</button></Link>
            <div className={loginCSS.link}>
            <p className={loginCSS.register}><NavLink to="/register">立即注册</NavLink></p>
            </div>
            <div className={loginCSS.link}>
            <span className={loginCSS.span}>|</span>
            </div>
            <div className={loginCSS.link}>
            <p className={loginCSS.found}><NavLink to="/found">找回密码</NavLink></p>
            </div>
            <div >
            <Icon type="mobile" className={loginCSS.mobile} />
            <Icon type="lock" className={loginCSS.lock} />
            </div>
            </div>
            </div>
            </div>
            </div>
            
        )
    }
}