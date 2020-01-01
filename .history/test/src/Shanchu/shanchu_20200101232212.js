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
      alert(e.target.value)
        this.setState({
            [e.target.name]:e.target.value,
           
        })
    }
    

    saveUser = ()=>{
            fetch("/show/querybyId",{
                method:"post",
                headers:{
                 "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userId:this.state.userId
                   
                })
    
            }).then(response=>response.json())
          .then(result=>{
              if(result!=null){
            
             console.log(result)
             
            }else{
                message.info('查询失败')
                
            }
          })
        
       
        }
    
        deleteUser = ()=>{
        
          fetch("/show/delete",{
              method:"post",
              headers:{
               "Content-Type":"application/json"
              },
              body:JSON.stringify({
                userId:this.state.userId
              })
  
          }).then(response=>response.json())
        .then(result=>{
            if(result!=null){
           message.info('删除成功')
           console.log(result)
           
          }else{
              message.info('删除失败')
            
          }
        })
      
     
      }
     query = ()=>{
        
      fetch("/news/querybyId",{
          method:"GET",
          headers:{
           "Content-Type":"application/json"
          },
          body:JSON.stringify({
            userId:this.state.userId
          })

      }).then(response=>response.json())
    .then(result=>{
        if(result==null){
       message.info('删除成功')
       console.log(result)
       
      }else{
          message.info('删除失败')
        
      }
    })
  
 
  }
  querybyTitle = ()=>{
        
    fetch("/news/querybyTitle",{
        method:"post",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({
          title:this.state.title
        })

    }).then(response=>response.json())
  .then(result=>{
      if(result==null){
     message.info('删除成功')
     console.log(result)
     
    }else{
        message.info('删除失败')
      
    }
  })


}
   deleteNews = ()=>{
        
    fetch("/news/delete",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body:JSON.stringify({
          newsId:this.state.newsId
        })

    }).then(response=>response.json())
  .then(result=>{
      if(result==null){
     message.info('删除成功')
     console.log(result)
     
    }else{
        message.info('失败成功')
      
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
                     <td>
                       <button onClick={this.saveUser(userId)}>查询</button>
                       <button onClick={this.deleteUser()}>删除</button>
                     </td>
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
                      <td><input type="text" placeholder="请输入标题" name="title" value={this.state.title ||''} onChange={e=>this.changeValue(e)} ></input></td>
                      <td><input type="text" placeholder="请输入新聞id" name="newsId" value={this.state.newsId ||''} onChange={e=>this.changeValue(e)}></input></td>
                      <td><button onClick={this.querybyTitle()} >查询</button><button onClick={this.deleteNews()} >删除</button></td>
                    </tr>
                </table>
                </div>
              </div>
              
        )
    }
}