import React from 'react'
import {Link} from 'react-router-dom'
import {  Icon } from 'antd';
var FoundCSS = require ('./found.css')

export default class FoundPage extends React.Component{
    render(){
        return(
            <div className={FoundCSS.Found}>
            <div className={FoundCSS.FoundB}>
       <div className={FoundCSS.FoundC}>
           <h5>账户找回</h5>
           <div className={FoundCSS.FoundS}>
        <input type="text" placeholder="请输入手机号"></input>
        </div>
        <div className={FoundCSS.Foundk}>
        <input type="text" placeholder="请输入手机验证码"></input>
        </div>
        <div className={FoundCSS.FoundS}>
           
        <div className={FoundCSS.FoundD}>
            <input type="text" placeholder="重置您的密码"></input>
        </div>
        
            <input type="text" placeholder="再次确认您的密码"></input>
            <Link to="/login">
        <button>立即找回</button></Link>
        </div>
        <div>
        <Icon type="android"  className={FoundCSS.android}/>
        <Icon type="bulb" className={FoundCSS.bulb}/>
        <Icon type="lock" className={FoundCSS.lock}/>
        <Icon type="like" className={FoundCSS.like}/>
        </div>
        </div>
        </div>
        </div>
        
            )
        }
    }