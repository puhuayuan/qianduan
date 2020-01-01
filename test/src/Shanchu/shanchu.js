import React from 'react'
import { Pagination } from 'antd';
import { Input } from 'antd';
import { Select } from 'antd';

const { Option } = Select
const { Search } = Input;

var ShanchuCSS = require ('./shanchu.css')

export default class ShanchuPage extends React.Component{
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
                     <td><input></input></td>
                     <td><input></input></td>
                     <td><button>添加</button><button>删除</button></td>
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
                      <td><input></input></td>
                      <td><button>添加</button><button>删除</button></td>
                    </tr>
                </table>
                </div>
              </div>
              
        )
    }
}