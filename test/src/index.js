import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Homepage from './Homepage/homepage';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import LoginPage from './Login/login';
import RegisterPage from './Register/register';
import FoundPage from './Found/found';
import CaijingPage from './Caijing/caijing';
import TiyuPage from './Tiyu/tiyu';
import ShizhengPage from './Shizheng/shizheng';
import JunshiPage from './Junshi/junshi';
import GuanLoginPage from './GuanLogin/guanlogin';
import GuanliPage from './Guanli/guanli';



class IndexPage extends React.Component{

    render(){
        return(
            <div>
                
       <BrowserRouter>
       <Switch>
        <Route path="/homepage" component={Homepage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/found" component={FoundPage}></Route>
        <Route path="/caijing" component={CaijingPage}></Route>
        <Route path="/tiyu" component={TiyuPage}></Route>
        <Route path="/shizheng" component={ShizhengPage}></Route>
        <Route path="/junshi" component={JunshiPage}></Route> 
        <Route path="/guanlogin" component={GuanLoginPage}></Route> 
        <Route path="/guanli" component={GuanliPage}></Route> 
        <Redirect to="/login"></Redirect>
        </Switch>

       </BrowserRouter>
       </div>
        )
    }
}



ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
