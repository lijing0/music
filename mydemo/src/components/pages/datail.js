import React from 'react'
import axios from 'axios'
import { getPlayList, getPlayComment } from '../../util/axios'
class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            playDetail: {},
            commentDetail: []
        }
    }
    //挂载
    componentDidMount() {
        console.log(this.props, '属性')
        //组件一加载就调取歌单详情和歌单热门评论
        axios.all([getPlayList({ id: this.props.location.state.id }), getPlayComment({ id: this.props.location.state.id })])
            .then(axios.spread((playDetail, commentDetail) => {
                if (playDetail.code == 200) {
                    this.setState({
                        playDetail: playDetail.playlist
                    })
                }
                if (commentDetail.code == 200) {
                    this.setState({
                        commentDetail: commentDetail.hotComments
                    })
                }
                console.log(playDetail, 'playDetail详情')
                console.log(commentDetail, 'commentDetail详情')
            }))
    }
        //封装一个事件转化函数
        formatTime(timer) {
            let date = new Date(timer)
            //年份
            let year = date.getFullYear()
            let month = (date.getMonth() + 1 + '').padStart(2, '0')
            //天数
            let day = (date.getDate() + '').padStart(2, '0')
            //小时
            let hours = (date.getHours() + '').padStart(2, '0')
            //分钟
            let minutes = (date.getMinutes() + '').padStart(2, '0')
            //秒数
            let seconds = (date.getSeconds() + '').padStart(2, '0')
            return `${year}年${month}月${day}日`
        }
    render() {
        const { playDetail,commentDetail } = this.state
        return (<div>
            <h1>歌单详情</h1>
            <div>
                <img style={
                    {
                        width: "120px"
                    }
                } src={playDetail.backgroundCoverUrl} alt="" />
            </div>
            <div>
                介绍：<div>
                    {playDetail.description}
                </div>
            </div>
            <div>
                标题： <div>{playDetail.name}</div>
            </div>
            <div>
                更新时间：{playDetail.updateFrequency}
            </div>
            <h1>歌曲列表</h1>
            <ul>
                {
                    playDetail.tracks ?
                        playDetail.tracks.map(item => {
                            return <li key={item.id}>歌曲名称：{item.name}</li>
                        })
                        : ''
                }
            </ul>
            <h1>热门评论</h1>
            <ul>
                {
                    commentDetail.map(item=>{
                        return <li key={item.time}>
                            <div>
                                <img style={
                                    {
                                        width:"40px",
                                        borderRadius:"50%"
                                    }
                                } src={item.user.avatarUrl} alt=""/>
                                <span>{item.user.nickname}</span>
                            <span>点赞数{item.likedCount}</span>
                            <p>评论内容：{item.content}</p>
                            <p>{this.formatTime(item.time)}</p>
                            </div>
                            
                        </li>
                    })
                }
            </ul>
        </div>)
    }
}
export default Detail