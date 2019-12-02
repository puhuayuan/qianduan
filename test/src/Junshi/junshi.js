import React from 'react'
import  Header from './../Header/header';
var junshiCSS= require('./junshi.css')
export default class JunshiPage extends React.Component{
    render(){
        return(
            <div>
                 <Header/>
                 <div className={junshiCSS.caijingA}>
                    <div className={junshiCSS.aaa}>
                        <p>“祖国在我心中”</p>
                        <a href="http://military.people.com.cn/n1/2019/0629/c1011-31203370.html" ><img src='/imgs/junshi.jpg' className={junshiCSS.a1} alt="" /></a>
                    </div>
                   <h4> <a href="http://military.people.com.cn/n1/2019/0705/c1011-31215797.html" >为网络空间安全提供“中国方案” </a></h4>
                   <div className={junshiCSS.caijingAa}>
                    <ul class={junshiCSS.ccc}>
                        <li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215681.html" >“枕着敌情睡觉 准备今夜打仗”</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215804.html" >让高校武装干部成为征兵生力军</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215817.html" >江苏省军区抓实直属干休所党建培训</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215655.html" >纠治积弊不再“扳过来又弹回去”</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215673.html" >紧盯主战坚守初心 紧抓备战践行使命</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215755.html" >伊朗重压之下寻求“破局”</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215781.html" >印制“光辉”为何难放光辉</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215831.html" >变压器起火 毒烟弥漫</a></li>
<li><a href="http://military.people.com.cn/n1/2019/0705/c1011-31215841.html" >美国紧锣密鼓开建太空军</a></li>
</ul>
</div>
                </div>
</div>      
        )
    }
}