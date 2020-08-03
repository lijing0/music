import React from 'react'
import '../../assets/css/search.css'
import {searchHot,searchInfo} from '../../util/axios'
 class Search extends React.Component{
     constructor(){
         super()
         this.state={
             searchHotList:[],
             searchList:[]
         }
         this.inpVal = React.createRef()
     }
    //  挂载
    componentDidMount(){
        // 调取热门搜索
        this.get_search_hot()
    }
    //  获取一个热门搜索事件
    get_search_hot(){
        searchHot()
        .then(res=>{
            if(res.code==200){
                console.log(res,'热门标签')
                 this.setState({
                     searchHotList:res.result.hots
                 })
            }
        })
    }
    // 封装一个搜索事件
    goSearch(keywords){
        // 给input赋值
        this.inpVal.current.value = keywords
        // 调取搜索接口
        searchInfo({keywords})
        .then(res=>{
            if(res.code==200){
                console.log(res,'搜索结果')
                this.setState({
                    searchList: res.result.songs
                })
            }
        })
    }
    // 封装一个getInput
    getInput(){
        console.log(this.inpVal.current.value,'input内容')
    }
    // 清空事件
    clearInfo(){
        // input为空
        this.inpVal.current.value = ''
        this.setState({
            searchList:[]
        })
    }
    render(){
        const {searchHotList,searchList} = this.state
        let valFlag = ''
        if(this.inpVal.current){
            valFlag = this.inpVal.current.value
        }
        let hotInfo = < div className = "hotList" >
                    <h3 className="hotTit">热门搜索</h3>
                    <ul className="list" >
                        {
                            searchHotList.map(item=>{
                                return <li onClick={this.goSearch.bind(this,item.first)} key={item.first} className = "item" > <a> {item.first} </a></li >
                            })
                        }
                    </ul>
                </div>
            return (<div className='search'>
                {/* 搜索框 */}
                <div className="form">
                    <i className="u-svg u-svg-srch"></i>
                    <input className="searchInput" type="text" ref={this.inpVal} onInput={this.getInput.bind(this)} placeholder="搜索歌曲、歌手、专辑"/>
                    {
                        valFlag?<div className="cancel" onClick={this.clearInfo.bind(this)}><i>×</i></div> :''
                    }
                </div>
                {/* 搜索列表 */}
                <div>
                
                    <ul className="hotSearchlist">
                        {
                            searchList.length > 0 ? searchList.map(item=>{
                            return <li key={item.id}><i className="u-svg u-svg-search"></i><span className="hotitem">{item.name}</span></li>
                            }) : ''
                        }
                    </ul>
                </div>
                {/* 热搜标签 */}
                <div>
                    {
                        searchList.length == 0 ? hotInfo : ''
                    }
                </div>
                
            </div>)
        }
}
 export default Search