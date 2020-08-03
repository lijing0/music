import React from 'react'
// 引入axios库
import axios from 'axios'
// 引入接口
import {personalized,banner,getNewSongs} from '../../util/axios'
//引入swipercss
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
//调用swiper插件
import Swiper from 'swiper'
import '../../assets/css/home.css'
 class Home extends React.Component{
     constructor(){
         super()
         this.state = {
              bannerList: [],
              songList: [],
              newSong:[],
         }
     }
    //  调用挂载函数
    componentDidMount(){
        // 组件一加载就调取推荐歌单接口，轮播图，推荐新音乐接口
        axios.all([personalized({limit:6}),banner(),getNewSongs()])
        .then(axios.spread((songList,bannerList,newSong)=>{
            // 获取轮播图
            if (bannerList.code === 200) {
                //  可以通过filter对数组进行过滤
                let banners = bannerList.banners.filter((item, i) => i < 4)
                this.setState({
                    bannerList: banners
                }, () => {
                    //调用轮播图
                    let swiper = new Swiper('.swiper-container', {
                        autoplay: {
                            delay: 2000,
                        },
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        }
                    });
                })
            }
            // 推荐歌单
            if (songList.code === 200) {
                this.setState({
                    songList: songList.result
                })
            }
            // 获取最新音乐
            if (newSong.code === 200) {
                this.setState({
                    newSong: newSong.result
                })
            }
        })

        )
        // this.getPersonalized()
        // //调用轮播图
        // this.getBanner()
        // // 调用获取新音乐
        // this.getnewSongs()
    }
    // 封装一个获取推荐歌单的接口
    // getPersonalized(){
    //     personalized({
    //         limit:6
    //     })
    //         .then(res=>{
    //             if(res.code===200){
    //                 this.setState({
    //                     songList:res.result
    //                 })
    //             }
    //         })
    // }
     //获取一个轮播图的接口
    //  getBanner() {
    //      banner()
    //          .then(res => {
    //              console.log(res, '轮播图')
    //              if (res.code === 200) {
    //                 //  可以通过filter对数组进行过滤
    //                 let banners = res.banners.filter((item,i)=>i<4)
    //                  this.setState({
    //                      bannerList: banners
    //                  }, () => {
    //                      //调用轮播图
    //                      let swiper = new Swiper('.swiper-container', {
    //                          autoplay: {
    //                              delay: 2000,
    //                          },
    //                          loop: true,
    //                          pagination: {
    //                              el: '.swiper-pagination',
    //                          }
    //                      });
    //                  })
    //              }
    //          })
    //  }
    //  封装一个获取新音乐的事件
    // getnewSongs(){
    //     getNewSongs()
    //     .then(res=>{
    //         if(res.code===200){
    //             console.log(res)
    //         }
    //     })
    // }
    render(){
        const {songList,bannerList,newSong} = this.state
            return (<div className='home'>
                
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            bannerList.map(item => {
                                return <div key={item.imageUrl} className="swiper-slide">
                                    <img className='imgUrl' src={item.imageUrl} alt="" />
                                </div>
                            })
                        }
                    </div>
                    {/* 分页器。如果放置在swiper-container外面，需要自定义样式。 */}
                    <div className="swiper-pagination"></div>
                </div>
                <h2 className="home_title">推荐歌单</h2>
                <div className="songTable">
                        {
                            songList.map(item=>{
                                return<div className="item" key={item.id}>
                                    <img src={item.picUrl} alt=""/>
                                    <span className="de">{item.name}</span>
                                    {
                                        item.playCount.toString().length > 8 ? < span className = "u-earp remd_lnum" >  {Number(item.playCount/
                                        10000000).toFixed(1)
                                        }
                                        亿 </span> :
                                        < span className = "u-earp remd_lnum"> {Number(item.playCount/10000).toFixed(1)}万</span>
                                    }
                                    
                                </div>
                            })
                        }
                </div>
                <h2 className="home_title">最新音乐</h2>
                <div>
                    <div>{
                        newSong.map(item=>{
                            return <div className = "con" key={item.id}>
                                <div className="left">
                        <div className="f-thide sgtl">{item.song.name}
                        {
                            item.song.alias ? 
                                item.song.alias.map(item=>{
                                    return <span style={{
                                        color:'#888'
                                    }} key={item}>({item})</span>
                                })
                             : ''
                        }
                        </div>
                                    < div className="f-thide sginfo"> < i className = "u-hmsprt sghot" > </i>
                                    {
                            item.song.artists ? 
                                item.song.artists.map(item => {
                                    return <span style={{
                                        color:'#888'
                                    }} key={item.id}>{item.name} </span>
                                })
                             : ''
                        }-{item.song.album.name}
                                    </div>
                                </div>
                                <div className="right">
                                    <span className="u-hmsprt sgchply"></span>
                                </div>
                            </div>
                        })
                    }        
                    </div>
                </div>
                <div className="footer">
                    <div className="tit"></div>
                    <div className="openapp">打开APP，发现更多好音乐 </div>
                    < p > 网易公司版权所有© 1997 - 2020 杭州乐读科技有限公司运营 </p>
                </div>
                
            </div>)
        }
}
 export default Home