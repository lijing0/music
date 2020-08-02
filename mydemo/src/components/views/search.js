import React from 'react'
import '../../assets/css/search.css'
 class Search extends React.Component{
     constructor(){
         super()
         this.state={
             hotList:[
                 {
                     id:1,
                     msg: 'Taylor Swift'
                 },
                 {
                     id: 2,
                     msg: 'Billie Eilish'
                 },
                 {
                     id: 3,
                     msg: '无滤镜'
                 },
                 {
                     id: 4,
                     msg: '潘玮柏'
                 },
                 {
                     id: 5,
                     msg: '天外来物'
                 },
                 {
                     id: 6,
                     msg: 'Troye Sivan'
                 },
                 {
                     id: 7,
                     msg: '亚运会歌征集'
                 },
                 {
                     id: 8,
                     msg: '上半年音乐榜单'
                 },
                 {
                     id: 9,
                     msg: '要我怎么办'
                 },
                 {
                     id: 10,
                     msg: '2020毕业音乐会'
                 },
             ]
         }
     }
    render(){
        const {hotList} = this.state
            return (<div className='search'>
                <div className="form">
                    <i className="u-svg u-svg-srch"></i>
                    <input className="searchInput" type="text" placeholder="搜索歌曲、歌手、专辑"/>
                </div>
                <div className="hotList">
                    <h3 className="hotTit">热门搜索</h3>
                    <ul className="list" >
                        {
                            hotList.map(item=>{
                                return <li key={item.id} className = "item" > < a> {item.msg} </a></li >
                            })
                        }
                    </ul>
                </div>
            </div>)
        }
}
 export default Search