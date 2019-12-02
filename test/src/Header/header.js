import React from 'react'
import { Link } from 'react-router-dom'


var HeaderCss = require('./header.css');
export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className={HeaderCss.header}>
                <Link to="/guanlogin">管理端</Link>
                    
                    <div>
                    <Link to="/caijing">西希新闻网</Link>
                    </div>
                    <div className={HeaderCss.headera}>
                        <Link to="/login">登陆</Link>
                        <Link to="/register">注册</Link>
                    </div>
                </div>
                <div className={HeaderCss.headerB}>
                    <div className={HeaderCss.headerBa}>
                        <Link to="./caijing">财经</Link>
                    </div>
                    <div className={HeaderCss.headerBb}>
                        <Link to="./tiyu">体育</Link>
                    </div>
                    <div className={HeaderCss.headerBc}>
                        <Link to="./shizheng">时政</Link>
                    </div>
                    <div className={HeaderCss.headerBd}>
                        <Link to="./junshi">军事</Link>
                    </div>
                </div>
            </div>
        )
        
    }
}