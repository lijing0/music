import React from 'react'
import '../../assets/css/rank.css'
//引入路由导航链接
import {NavLink} from 'react-router-dom'
 class Rank extends React.Component{
     constructor(){
         super()
         this.state={
             rankList:[
                 {
                     id:'01',
                     songName:'爸爸妈妈',
                     msg:'李荣浩-有理想'
                 },
                 {
                    id: '02',
                    songName:'海底',
                    msg: '一支榴莲 - 《独》'
                },
                {
                    id: '03',
                    songName:'你走',
                    msg: '松紧先生（李宗锦）- 你走'
                },
                {
                    id: '04',
                    songName:'收敛',
                    msg:'不够-收敛'
                },
                {
                    id: '05',
                    songName:'丢了你',
                    msg: '井胧 - 丢了你'
                },
                {
                    id: '06',
                    songName: '爱，存在',
                    msg: '卢卢快闭嘴 - 爱，存在'
                },
                {
                    id: '07',
                    songName: '官方回答',
                    msg: 'O.WEN - 官方回答'
                },
                {
                    id: '08',
                    songName: '夏天的风（原唱：温岚）',
                    msg: '火羊瞌睡了 - 夏天的风'
                },
                {
                    id: '09',
                    songName: '无人之岛',
                    msg: '任然 - 没有发生的爱情'
                },
                {
                    id: '10',
                    songName: '天外来物',
                    msg: '薛之谦 - 天外来物'
                },
                 {
                     id: '11',
                     songName: '你是人间四月天',
                     msg: '邵帅（解忧邵帅）-你是人间四月天'
                 },
                 {
                     id: '12',
                     songName: '雨爱',
                     msg: '周星星 - 雨爱'
                 },
                 {
                     id: '13',
                     songName: 'Love Is Gone (feat. Dylan Matthew) (Acoustic)',
                     msg: 'SLANDER / Dylan Matthew'
                 },
                 {
                     id: '14',
                     songName: '与我无关',
                     msg: '阿冗-与我无关'
                 },
                 {
                     id: '15',
                     songName: '回到夏天(我多想回到那个夏天)',
                     msg: '傲七爷 / 爱写歌的小田 - 回到夏天'
                 },
                 {
                     id: '16',
                     songName: '还是分开',
                     msg: '张叶蕾 - 还是分开'
                 },
                 {
                     id: '17',
                     songName: '情人',
                     msg: '蔡徐坤 - 情人'
                 },
                 {
                     id: '18',
                     songName: '世界美好与你环环相扣',
                     msg: '柏松 - 听闻余生'
                 },
                 {
                     id: '19',
                     songName: '7 %',
                     msg: 'XMASwu - 柒'
                 },
                 {
                     id: '20',
                     songName: '冬眠',
                     msg: '司南 - 冬眠'
                 },
             ]
         }
     }
    //  封装一个动态路由跳转的方法
    goPlay(id){
        // 在props属性中 看到了路由的属性和方法
        // push往历史记录中添加一条记录 replace替换当前这条记录
        this.props.history.push(`/play/${id}`)
        // this.props.history.replace(`/play/${id}`)
    }
    render(){
        const {rankList} = this.state
            return (<div className='rank'>
                <div>
                    <div className="bgImg">
                        <div className="hot"></div>
                        <div className="hotTime">更新日期：07月30日</div>
                    </div> 
                </div>
                <div >
                    {
                        rankList.map(item=>{
                            //navlink方法
                        //     return  <NavLink key={item.id} to={'/play/'+item.id}> 
                        //     <li className='songList'>
                        //             <div className='songLeft'>
                        //                 01
                        //              </div>
                        //             <div className='songRight'>
                        //                 {item.songName}
                        //              </div>
                        // </li>
                        // </NavLink>
                        return <div className="content" key={item.id} onClick={this.goPlay.bind(this,item.id)}>
                    <div className={item.id > 3 ? item.className = "con_left1" : item.className = "con_left"}>
                        {item.id}
                    </div>
                    <div className="line">
                        <div className="center">
                        <div className="top">{item.songName}</div>
                        <div className="bottom">< i className = "u-hmsprt sghot" > </i>{item.msg}</div>
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