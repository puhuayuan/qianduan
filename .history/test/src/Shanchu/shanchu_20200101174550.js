import React from 'react'
import { Pagination } from 'antd';
import { Input ,message} from 'antd';
import { Select } from 'antd';

const { Option } = Select
const { Search } = Input;

var ShanchuCSS = require ('./shanchu.css')

export default class ShanchuPage extends React.Component{

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
              if(result==null){
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
          
              <div className={ShanchuCSS.A}>
                <div className={ShanchuCSS.Aa}><h5>用户管理</h5></div>
                <table border="1">
                 <thead>
                   <tr className={ShanchuCSS.B}>
                     <th>用户名</th>
                     <th>用户id</th>
                     <th >操作</th> 
                   </tr>
                 </thead>
                 <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr className={ShanchuCSS.B}>
                     
                     <td><input type="text" placeholder="请输入用户id" name="userId" value={this.state.userId ||''} onChange={e=>this.changeValue(e)}></input></td>
                     <td><button >添加</button><button>删除</button></td>
                   </tr>
                </table>

                <div className={ShanchuCSS.Cc}><h5>新闻管理</h5>
                <table border="1">
                  <thead><tr className={ShanchuCSS.C}>
                    <th>新闻标题</th>
                    <th>新闻ID</th>
                    <th>操作</th>
                    </tr></thead>
                    <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                   
                 </tr>
                 <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                 <tr height="40px">
                   <td></td>
                   <td></td>
                   <td></td>
                 </tr>
                    <tr className={ShanchuCSS.D}>
                      <td><input></input></td>
                      <td><input type="text" placeholder="请输入新聞id" ></input></td>
                      <td><button  >添加</button><button >删除</button></td>
                    </tr>
                </table>
                </div>
              </div>
              
        )
    }
}