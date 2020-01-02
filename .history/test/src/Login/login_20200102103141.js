import React from 'react'
import {Link,NavLink, withRouter} from 'react-router-dom'
import {  Icon,message } from 'antd';
var loginCSS= require('./login.css')

export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    

    upload = (userName,passWord)=>{
        
            fetch("/zou/dologin",{
                method:"post",
                headers:{
                 "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userName:this.state.userName,
                    passWord:this.state.passWord
                })
    
            }).then(response=>response.json())
          .then(result=>{
              if(result!=null){
             message.info('登录失败')
             console.log(result)
             
            }else{
                message.info('登录成功')
                this.props.history.push('/caijing');
            }
          })
        
       
        }
    

    render(){
        return(
            <div className={loginCSS.login}>
            <div className={loginCSS.loginB}>
            <div className={loginCSS.loginC}> 
               <h5>账户登录</h5>
               <div className={loginCSS.loginS}>
               <input type="text" placeholder="请输入用户名" name="userName" value={this.state.userName ||''} onChange={e=>this.changeValue(e)}></input>
               
            </div>
            <div className={loginCSS.logink}>
            <input type="password" placeholder="请输入密码" name="passWord" value={this.state.passWord ||'' } onChange={e=>this.changeValue(e)}></input>
            </div>
            
            <div className={loginCSS.loginS}>
            <button onClick={this.upload()}>立即登录</button>
            
            <Link to="/caijing"></Link>
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