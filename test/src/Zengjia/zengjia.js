import React from 'react'
var ZengjiaCSS = require ('./zengjia.css')

export default class ZengjiaPage extends React.Component{
    render(){
        return(
            <div className={ZengjiaCSS.zengjia}>
                <div className={ZengjiaCSS.zengjiaAa}>
                 <input name="text" ></input>
                 <button type="button">添加</button>
                </div>
                <div className={ZengjiaCSS.zengjiaAb}>
                  <input></input>  
                  <button type="button">添加</button>
                </div>
                <div className={ZengjiaCSS.zengjiaAc}>
                  <input></input> 
                  <button type="button">添加</button> 
                </div>
                <div className={ZengjiaCSS.zengjiaAd}>
                  <input></input> 
                  <button type="button">添加</button> 
                </div>

            </div>
        )
    }
}


