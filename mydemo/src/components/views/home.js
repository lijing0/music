import React from 'react'
import '../../assets/css/home.css'
 class Home extends React.Component{
     constructor(){
         super()
         this.List = {
             songInfo:[
                 {
                     id:1,
                     img:require('../../assets/images/songlist1.jpg'),
                     tit: '[VIP专享] 一周新歌推荐',
                     num:'3.4亿'
                 },
                 {
                     id: 2,
                     img: require('../../assets/images/songlist2.jpg'),
                     tit: '这个世界很大，可是没人听我说话',
                     num: '22.8万'
                 },
                 {
                     id: 3,
                     img: require('../../assets/images/songlist3.jpg'),
                     tit: '中文DJ（电摇版）（车载DJ）开车驾车必听',
                     num: '178.4万'
                 },
                 {
                     id: 4,
                     img: require('../../assets/images/songlist4.jpg'),
                     tit: '好听的歌没有完整版，就像喜欢的人没有结局',
                     num: '194.8万'
                 },
                 {
                     id: 5,
                     img: require('../../assets/images/songlist5.jpg'),
                     tit: 'KORG P1000电子琴',
                     num: '191.6万'
                 },
                 {
                     id: 6,
                     img: require('../../assets/images/songlist6.jpg'),
                     tit: '维吾尔语精选歌曲',
                     num: '138.1万'
                 },
             ],
             songList:[
                 {
                     id:1,
                     title: '致我们终将逝去的青春(2020重唱版)',
                     msg: '张靓颖 - 致我们终将逝去的青春'
                 },
                 {
                     id: 2,
                     title: '如果我是海',
                     msg: '李荣浩 - 麻雀'
                 },
                 {
                     id: 3,
                     title: '祝我快乐',
                     msg: '汪苏泷 - 祝我快乐'
                 },
                 {
                     id: 4,
                     title: '星星之火',
                     msg: '罗云熙 - 星星之火'
                 },
                 {
                     id: 5,
                     title: '晚来天欲雪',
                     msg: '恋恋故人难 / 云の泣 '
                 },
                 {
                     id: 6,
                     title: '先知',
                     msg: '田馥甄 - 先知'
                 },
                 {
                     id: 7,
                     title: '我行我素我爱你',
                     msg: '郁可唯 - 我行我素我爱你'
                 },
                 {
                     id: 8,
                     title: 'PARADISE',
                     msg: 'Ravi / 河成云 - PARADISE'
                 },
                 {
                     id: 9,
                     title: '睹物思人',
                     msg: '武艺 - 睹物思人'
                 },
                 {
                     id: 10,
                     title: '尘埃',
                     msg: '董嘉鸿 - 尘埃'
                 },
             ]
         }
     }
    render(){
            return (<div className='home'>
                <h2 className="home_title">推荐歌单</h2>
                <div className="songTable">
                        {
                            this.List.songInfo.map(item=>{
                                return<div className="item" key={item.id}>
                                    <img src={item.img} alt=""/>
                                <span>{item.tit}</span>
                            <span className="num">{item.num}</span>
                                </div>
                            })
                        }
                </div>
                <h2 className="home_title">最新音乐</h2>
                <div>
                    <div>{
                        this.List.songList.map(item=>{
                            return <div className = "con" key={item.id}>
                                <div className="left">
                        <div className="f-thide sgtl">{item.title}</div>
                                    < div className="f-thide sginfo"> < i className = "u-hmsprt sghot" > </i>{item.msg}
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