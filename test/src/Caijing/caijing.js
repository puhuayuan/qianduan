import React from 'react'
import Header from './../Header/header';
var caijingCSS = require('./caijing.css');
export default class CaijingPage extends React.Component {
    render() {
        return (
            <div className={caijingCSS.A}>
                <Header />
                <div className={caijingCSS.caijingA}>
                    <div className={caijingCSS.aaa}>
                        <p>新版第五套人民币已经发售!</p>
                        <a href="http://finance.people.com.cn/n1/2019/0703/c1004-31209486.html" ><img src='/imgs/caijin.png' className={caijingCSS.a1} alt="" /></a>
                    </div>
                    
                   <h4> <a href="http://finance.people.com.cn/n1/2019/0705/c1004-31214846.html" >“菜篮子”“果盘子”稳稳当当 </a></h4>
                   <div className={caijingCSS.caijingAa}>
                    <ul class={caijingCSS.ccc}>
                        <li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31214938.html" >央行：发行新版人民币不会导致通货膨胀</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31215038.html" >稳投资加码 投融资改革新政酝酿推出</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31215079.html" >前5月社保基金支出超两万亿 增速超15%</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31215065.html" >央企瘦身超预期 三年减少法人1.4万余户</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31215571.html" >出行目的地“新风向” 亲子游预订量激增</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31215160.html" >国际论坛：中国智慧和方案对世界贡献巨大</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31215142.html" >半年新增贷款九万多亿 金融服务质效提升</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31214943.html" >专家：推出房地产税目前非最好时机</a></li>
<li><a href="http://finance.people.com.cn/n1/2019/0705/c1004-31215571.html" >出行目的地“新风向” 亲子游预订量激增</a></li>
</ul>
</div>
                </div>
            </div>
        )
    }
}
