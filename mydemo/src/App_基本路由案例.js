import React from 'react'
//引入App.css
import './App.css'
//引入要渲染的组件
import Home from './components/views/home'
import Rank from './components/rank'
import Search from './components/search'
//引入路由插件中相关的属相方法
import { Route,Switch,Link,Redirect,NavLink } from 'react-router-dom'
 class App extends React.Component{
    render(){
      return (<div className='app'>
        {/* 创建视图链接 */}
        {/* 在Link中没有activeClassName 这个属性 */}
        {/* <Link to='/home'>首页</Link>
        <Link to='/rank'>排行榜</Link>
        <Link to='/search'>搜索</Link> */}
        <NavLink activeClassName='select' to='/home'>首页</NavLink>
        <NavLink activeClassName='select' to='/rank'>排行榜</NavLink>
        <NavLink activeClassName='select' to='/search'>搜索</NavLink>
        {/* 设定路由出口 */}
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/rank' component={Rank}></Route>
            <Route path='/search' component={Search}></Route>
            {/* 路由重定向 */}
            <Redirect to='/home'></Redirect>
        </Switch>
      </div>)
    }
}
 export default App