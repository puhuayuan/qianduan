import React from 'react'
import {Link} from 'react-router-dom'
import {  Icon,message, Result } from 'antd';
var registerCSS= require('./register.css')

export default class RegisterPage extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    upload = ()=>{
       
        //var xhr=new XMLHttpRequest()
         var data={
             "username":this.state.username,
             "password":this.state.password,
            
         }
        // xhr.open("post","/zou/doregist")

        // xhr.onreadystatechange=function(){
        //     if(xhr.readystate==4){
        //         if(xhr.readystate==200){
                    
        //             console.log(xhr.responseText)
                   
        //             var result=JSON.parse(xhr.responseText)
        //             if(result.state==null){
        //                    message.info("用户已存在")
        //             }
        //         }else{
        //              message.info("注册成功")
        //              this.props.history.push("/login")
        //         }
        //     }
            
        // }
        // xhr.setRequestHeader('content-type','application/json')
        // xhr.send()



        fetch("/zou/doregist",{
              method:"post",
              headers:{
               "Content-Type":"application/json"
              },
              body:JSON.stringify(data)

        }).then(response=>response.json())
        .then(result=>{
            if(result.state=="用户名重复，请重新输入"){
        message.info("用户已存在")

            }else if(result.state=="注册成功"){
                message.info("注册成功")

            }
        })
    }  

   

    render(){
        return(
            <div className={registerCSS.register}>
                <div className={registerCSS.registerB}>
           <div className={registerCSS.registerC}>
               <div className={registerCSS.registera}><Link to="/login">＜</Link></div>
               <div><h5>注册</h5></div>
               <div className={registerCSS.registerS}>
            <input type="text" placeholder="请输入用户名" name="username" value={this.state.username } onChange={e=>this.changeValue(e)}></input>
            </div>
    <div className={registerCSS.registery}>
            <a><input type="text" placeholder="请输入右边验证码" ></input></a>
            </div>
            <div className={registerCSS.registeryzm}>
            <a href="http://localhost:3000/register" ><img  alt src="https://captcha.360kan.com/image.php?app=360video&t=1561687393831"></img></a>
            </div>
            <div className={registerCSS.registerdx}>
            <input type="text" placeholder="请输入短信验证码"></input>
            </div>
            <div className={registerCSS.registerhq}>
            <button>获取验证码</button>
            </div>
            <div className={registerCSS.registersr}>
            <input type="password" placeholder="请输入6-18位密码，字母/数字/符号" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}></input>
            </div>
            <div className={registerCSS.registerl}>
            
            <button onClick={this.upload()}>注册</button>
            </div>
            <div className={registerCSS.registerla}>
                <Link to="/login">登录</Link>
                <span> | </span>
                <Link to="/found">找回密码</Link>
            </div>
            <div className={registerCSS.Icon}>
            <Icon type="mobile" className={registerCSS.mobile} />
            <Icon type="mail" className={registerCSS.mail} />
            <Icon type="check-circle" className={registerCSS.check} />
            <Icon type="lock" className={registerCSS.lock} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}