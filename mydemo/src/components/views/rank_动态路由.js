import React from 'react'
import '../../assets/css/rank.css'
//引入路由导航链接
import {NavLink} from 'react-router-dom'
 class Rank extends React.Component{
     constructor(){
         super()
         this.state={
             bgImg:require('../../assets/images/hot_music_bg_2x.jpg'),
             rankList:[
                 {
                     id:1,
                     songName:'爸爸妈妈',
                 },
                 {
                    id:2,
                    songName:'你走',
                },
                {
                    id:3,
                    songName:'海底',
                },
                {
                    id:4,
                    songName:'夏天的风',
                },
                {
                    id:5,
                    songName:'传奇',
                }
             ]
         }
     }
     //封装一个动态路由跳转的方法
     goPlay(id){
       //  console.log(this,'rank')
         //在props属性中 看到了路由的属性和方法
         //push 往历史记录中添加一条数据
         //replace 替换当前这条记录
         this.props.history.push(`/play/${id}`)
        //this.props.history.replace(`/play/${id}`)
     }
    render(){
        const {bgImg,rankList} = this.state
            return (<div className='rank'>
                <div>
                    <img className='bgImg' src={bgImg} alt=""/>
                </div>
                <ul >
                    {
                        rankList.map(item=>{
                            {/* <NavLink key={item.id} to={'/play/'+item.id}> 
                            <li className='songList'>
                                    <div className='songLeft'>
                                        01
                                     </div>
                                    <div className='songRight'>
                                        {item.songName}
                                     </div>
                        </li>
                        </NavLink> */}
                        return  <li  key={item.id} className='songList' onClick={this.goPlay.bind(this,item.id)}>
                                    <div className='songLeft'>
                                        01
                                     </div>
                                    <div className='songRight'>
                                        {item.songName}
                                     </div>
                        </li>
                        })
                    }
                </ul>
            </div>)
        }
}
 export default Rank