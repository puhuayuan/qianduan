import React from 'react'
import { Link } from 'react-router-dom'
import { Icon ,message} from 'antd';
var GuanloginCSS = require('./guanlogin.css')

export default class GuanLoginPage extends React.Component {

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
       
        fetch("/adminuser/admindologin",{
            method:"post",
            headers:{
             "Content-Type":"application/json"
            },
            body:JSON.stringify({
                Aname:this.state.Aname,
                Apassword:this.state.Apassword
            })
          
        }).then(response=>response.json())
      .then(result=>{
          if(result!=null){
            message.info("登录成功!")
            this.props.history.push('/guanli');
          
          }else{
              
             console.log(result)
          }
      })
     
        }
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
                        <input type="text" placeholder="请输入用户名" name="Aname" value={this.state.Aname ||''} onChange={e=>this.changeValue(e)}></input>
                        </div>
                        <div className={GuanloginCSS.logink}>
                        <input type="password" placeholder="请输入密码" name="Apassword" value={this.state.Apassword ||'' } onChange={e=>this.changeValue(e)}></input>
                        </div>
                        <div className={GuanloginCSS.loginS}>
                            
                                <button onClick={this.upload}>立即登录</button>
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