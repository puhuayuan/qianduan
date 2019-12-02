import React from 'react'
import Header from './../Header/header';
var tiyuCSS= require('./tiyu.css')


export default class TiyuPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={tiyuCSS.caijingA}>
                    <div className={tiyuCSS.aaa}>
                        <p>美洲杯-热苏斯一传一射梅西中柱 巴西2:0阿根廷挺进决赛</p>
                        <a href="http://sports.people.com.cn/n1/2019/0703/c22141-31211236.html" ><img src='/imgs/tiyu.jpg' className={tiyuCSS.a1} alt="" /></a>
                    </div>
                    
                   <h4> <a href="http://sports.people.com.cn/n1/2019/0705/c22155-31215604.html" >中国跳水夺大运会首金  </a></h4>
                   <div className={tiyuCSS.caijingAa}>
                    <ul class={tiyuCSS.ccc}>
                        <li><a href="http://sports.people.com.cn/n1/2019/0705/c22155-31215683.html" >世界围棋大师赛预选赛 中国队提前锁定本赛6席</a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c22149-31215931.html" >中国女篮挺进大运会八强创造历史 </a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c22166-31215472.html" >王蔷张帅携手晋级温网女单32强 </a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c412458-31215879.html" >中高协开展“不忘初心、牢记使命”主题教育</a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c22134-31215538.html" >恒大今晚客战天海 卡纳瓦罗：场上没有友谊</a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c427095-31215566.html" >女足世界杯荷兰挺进决赛 将与美国争夺冠军</a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c22141-31215587.html" >美洲杯与巴西争冠 黑马秘鲁能否一黑到底</a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c22141-31215694.html" >罗本正式宣布退役 曾率荷兰队夺世界杯亚军</a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0705/c22141-31215725.html" >蓝桥传奇回归！兰帕德出任切尔西主帅</a></li>
<li><a href="http://sports.people.com.cn/n1/2019/0703/c22157-31212127.html" >世联赛总决赛-刘晏含21分 中国女排1-3土耳其</a></li>
<li><a href="http://chinarun.people.cn/n1/2019/0702/c411384-31209272.html" >临沂国际马拉松10月27日开跑 7月2日开启报名</a></li>
</ul>
</div>
                </div>
            </div>
        )
    }
}