import React from 'react'
import Header from './../Header/header';
var shizhengCSS= require('./shizheng.css')
export default class ShizhengPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={shizhengCSS.caijingA}>
                    <div className={shizhengCSS.aaa}>
                        <p>国家主席习近平任免驻外大使</p>
                        <a href="http://v.people.cn/n1/2019/0704/c150722-31214028.html" ><img src='/imgs/shizheng.jpg' className={shizhengCSS.a1} alt="" /></a>
                    </div>
                   <h4> <a href="http://politics.people.com.cn/n1/2019/0705/c1024-31214845.html" >李克强同孟加拉国总理哈西娜举行会谈 </a></h4>
                   <div className={shizhengCSS.caijingAa}>
                    <ul class={shizhengCSS.ccc}>
                        <li><a href="http://politics.people.com.cn/n1/2019/0705/c1024-31214847.html" >栗战书在中国人大制度理论研究会年会暨换届选举会议上强调</a></li>
<li><a href="http://politics.people.com.cn/n1/2019/0705/c1001-31214921.html" >国务院关于在线政务服务的若干规定</a></li>
<li><a href="http://opinion.people.com.cn/n1/2019/0705/c1003-31214848.html" >让整改落实真正到位</a></li>
<li><a href="http://politics.people.com.cn/n1/2019/0704/c1001-31214833.html" >央企瘦身超预期 三年减少法人1.4万余户</a></li>
<li><a href="http://politics.people.com.cn/n1/2019/0705/c1001-31214922.html" >壮丽70年 奋斗新时代·来自一线的蹲点调研</a></li>
<li><a href="http://politics.people.com.cn/n1/2019/0705/c1001-31214932.html" >九万里风鹏正举 新征程砥砺初心</a></li>
<li><a href="http://politics.people.com.cn/n1/2019/0705/c1001-31214933.html" >移动政务进入加速发展期</a></li>
<li><a href="/n1/2019/0705/c1004-31214943.html" >专家：推出房地产税目前非最好时机</a></li>
<li><a href="/n1/2019/0705/c1004-31215571.html" >出行目的地“新风向” 亲子游预订量激增</a></li>
</ul>
</div>
                </div>
            </div>
        )
    }
}