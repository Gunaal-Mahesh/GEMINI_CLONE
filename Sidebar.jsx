import React,{useContext, useState}from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets/assets'
import { Context } from '../../Context/Context'




function Sidebar() {
    
        const [extend, setExtend]=useState(false)
        const{onSent,previousprompts,setRecent,newchat}=useContext(Context)

        const loadPrompt=async(prompt)=>{
            setRecent(prompt)
           await onSent(prompt)
        }
    

  return (
    <div className='sidebar'>
        <div className="top">
            <div className="menu">
            <img  onClick={()=>setExtend(prev=>!prev)}  src={assets.menu_icon} alt="menuicon"/>{extend?<p></p>:null}</div>
            <div  onClick={()=>newchat()}  className="newchat">
                <img src={assets.plus_icon} alt="newchaticon"/>
               {extend? <p>New Chat</p>:null}
            </div>
           {extend? <div className="recent">
                <p className="recenttitle">Recent</p>
                {previousprompts.map((item,index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)}  className="recententry">
                        <img src={assets.message_icon} alt="messageicon"/>
                        <p key={item.id}>{item.slice(0,18)}</p> 
                          
                    </div>
                    

                    )

                })}
               
            </div>:null}

        </div>
        <div className="bottom">
            <div className="bottomitem">
                <img src={assets.question_icon} alt="questionicon"/>
                {extend?<p>Help</p>:null}
            </div>
            <div className="bottomitem">
                <img src={assets.history_icon} alt="historyicon"/>
               {extend? <p>Activity</p>:null}
            </div>
            <div className="bottomitem">
                <img src={assets.setting_icon} alt="settingicon"/>
              {extend?  <p>Settings</p>:null}
            </div>

        </div>

    </div>
  )
}


export default Sidebar