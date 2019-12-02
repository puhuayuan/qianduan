import React from 'react'


var ShanchuCSS = require ('./shanchu.css')

export default class ShanchuPage extends React.Component{
    render(){
        return(
            <div className={ShanchuCSS.shanchu}>
                <div className={ShanchuCSS.shanchuAa}>
                 <input name="text" ></input>
                 <button type="button">删除</button>
                </div>
                <div className={ShanchuCSS.shanchuAb}>
                  <input></input>  
                  <button type="button">删除</button>
                </div>
                <div className={ShanchuCSS.shanchuAc}>
                  <input></input> 
                  <button type="button">删除</button> 
                </div>
                <div className={ShanchuCSS.shanchuAd}>
                  <input></input> 
                  <button type="button">删除</button> 
                </div>

            </div>
        )
    }
}