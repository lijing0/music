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
                <div className="m-song">
                    <div className="m-newsong">
                        <div className="m-song-bg">
                            <div className="m-scroll_wrapper m-song_nor j-songsrl">
                                <div>
                                    <div className="m-song_newfst">
                                        <div>
                                            <div className="m-song-wrap">
                                                <div className="m-song-disc">
                                                    <div className="m-song-turn">
                                                        <div className="m-song-rollwrap">
                                                            <div className="m-song-img ">
                                                                < img className="u-img" src = "https://p1.music.126.net/7gmezveSn1Y31wDJKn-8CQ==/109951165181209954.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
                                                                alt = "" / >
                                                            </div>
                                                            <div className="m-song-lgour">
                                                                <div className="m-song-light "></div>
                                                            </div>
                                                        </div>
                                                        <span className="m-song-plybtn"></span>
                                                    </div>
                                                    <div className="m-song-clickarea"></div>
                                                </div>
                                                {/* 歌词 */}
                                                <div>
                                                    <div className="m-song-info">
                                                        < h2 className = "m-song-h2" >
                                                            <span className="m-song-sname">致我们终将逝去的青春 (2020重唱版)</span>
                                                            <span className="m-song-gap">-</span>
                                                            <b className="m-song-autr">张靓颖</b>
                                                        </h2>
                                                        <div className="m-song-lrc f-pr">
                                                            <div className="m-song-scroll">
                                                                <div className="m-song-iner">
                                                                <p className="m-song-lritem j-lritem">荼蘼还没凋零 提醒我 紧紧抱着你</p>
                                                                <p className="m-song-lritem j-lritem">世界还在下雨 嘲笑着 晴天的远行</p>
                                                            </div>
                                                            
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>)
        }
}
 export default Search