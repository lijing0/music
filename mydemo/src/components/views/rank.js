import React from 'react'
import '../../assets/css/rank.css'
// 引入接口文件
import {getHotList} from '../../util/axios'
//引入路由导航链接
import {NavLink} from 'react-router-dom'
 class Rank extends React.Component{
     constructor(){
         super()
         this.state={
            hottime:0,
            hotSongList:[]
         }
     }
    // 挂载
    componentDidMount(){
        this.gethotlist()
    }
    // 封装一个时间转化函数
    formatTime(timer){
        let date = new Date(timer)
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        //天数
        let day = (date.getDate() + '').padStart(2, '0')
        return `${month}月${day}日`
    }
    // 获取热歌榜事件
    gethotlist(){
        getHotList()
        .then(res=>{
            if(res.code===200){
                // 对返回列表进行过滤
                let hotList = res.playlist.tracks.filter((item,i)=>i<20)
                console.log(hotList, '热歌榜列表')
                this.setState({
                    hottime:res.playlist.updateTime,
                    hotSongList:hotList
                })
            }
        })
    }
    // 封装一个播放事件
    goPlay(id){
        this.props.history.push({
            pathname:'/play',
            state:{
                id
            }
        })
    }
    render(){
        const {hottime,hotSongList} = this.state
            return (<div className='rank'>
                <div>
                    <div className="bgImg">
                        <div className="hot"></div>
                        <div className="hotTime">更新日期：{this.formatTime(hottime)}</div>
                    </div> 
                </div>
                <div >
                    {
                        hotSongList.map((item,i) => {
                        return <div onClick={this.goPlay.bind(item.id)} className="content" key={item.id} onClick={this.goPlay.bind(this,item.id)}>
                    <div className={i>=3?item.className = "con_left1" : item.className = "con_left"}>{i<9?'0'+(i+1):(i+1)}</div>
                    <div className="line">
                        <div className="center">
                        <div className="top">{item.name}
                        {
                            item.alia? 
                                item.alia.map(item=>{
                                    return <span style={{
                                        color:'#888'
                                    }} key={item}>({item})</span>
                                })
                             : ''
                        }</div>
                        <div className="bottom">< i className = "u-hmsprt sghot" > </i>
                        {
                            item.ar ?
                                item.ar.map(item => {
                                    return <span key={item.id}>{item.name}</span>
                                })
                                : ''
                        }-{item.al.name}</div>
                        </div>
                        <div className="right">
                            <span className="u-hmsprt sgchply"></span>
                        </div>
                    </div>
                </div>
                        })
                    }
                </div>
                <div className="alllist">
                    <span>查看完整榜单 </span>
                </div>
            </div>)
        }
}
 export default Rank