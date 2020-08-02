import React from 'react'
//querystring 模块提供用于解析和格式化 URL 查询字符串的实用工具
import qs from 'querystring'
import '../../assets/css/play.css'
 class Search extends React.Component{
    render(){
            console.log(this) //?id=4&name=%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E 最终想要的形式 {id:1,name:'名字'}
            //第一种方法 利用原生js获取参数
            // //字符串截取 去掉？
            // let queryStr = this.props.location.search.slice(1) //id=4&name=%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E
            // //把字符串拆分成数组 以 & 为拆分
            // let arrQuery = queryStr.split('&') //["id=4", "name=%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%8E"]
            // //利用循环 拆分'='
            // let obj = {}
            // arrQuery.forEach(item=>{
            //        let tempArr = item.split('=')
            //        obj[tempArr[0]] = tempArr[1]
            // })
            // console.log(obj,"obj")
            //第二个方法 利用node原生API
            let queryStr = this.props.location.search.slice(1)
            let obj = qs.parse(queryStr)
            return (<div className='play'>
                <h1>播放页面</h1>
                <div>
                    <button onClick={()=>this.props.history.go(-1)}>返回</button>
                </div>
                {/* 动态路由接收参数 */}
                <h2>当前歌曲id是---{this.props.match.params.id}</h2>
                {/* 接收query参数 */}
                {/* 第一种方法 利用原生js获取参数 */}
                {/* 第二个方法 利用node原生API */}
                <h2>
                    query接收id是---{obj.id}---
                    query接收name是---{obj.name}
                </h2>
                 {/* state接收参数
                 <h2>state接收id是---{this.props.location.state.id}</h2> */}
            </div>)
        }
}
 export default Search