import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import ShanchuPage from '../Shanchu/shanchu';
import ZengjiaPage from '../Zengjia/zengjia';
import PingfenPage from '../Pingfen/pingfen';
var GuanliCss = require('./guanli.css');

const { SubMenu } = Menu;

export default class GuanliPage extends React.Component {
    render() {
        return (
            <div className={GuanliCss.main}>
                <BrowserRouter basename="/guanli">
                    <div className={GuanliCss.a2}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: "100hv " }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu
                                onClick={e => e.key === 1 ? window.location.href = '/' : null}
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>基本管理</span>
                                    </span>
                                }
                            >
                                <Menu.ItemGroup key="g1">
                                    <Menu.Item key="1"><Link to="/shanchu">删除新闻</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/zengjia">添加新闻</Link></Menu.Item>

                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>新闻中心</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">管理文章</Menu.Item>
                                <Menu.Item key="/pingfen">新闻评分</Menu.Item>
                                <SubMenu key="sub3" title="文章删改">
                                    <Menu.Item key="7">增删文章</Menu.Item>
                                    <Menu.Item key="8">修改文章</Menu.Item>
                                </SubMenu>
                            </SubMenu>

                        </Menu>
                    </div>
                    <div className={GuanliCss.a1}>
                        
                            <Route path="/shanchu" component={ShanchuPage}></Route>
                            <Route path="/zhengjia" component={ZengjiaPage}></Route>
                            <Route path="/pingfen" component={PingfenPage}></Route>
                        
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}