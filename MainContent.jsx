import React, { useContext } from 'react'
import './MainContent.css'
import { assets } from '../../assets/assets/assets'
import { Context } from '../../Context/Context'

function MainContent() {

const{onSent,recent,result,loading,resultdata,setInput,input}=useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="usericon"/>
        </div>
        <div className="maincontainer">
            {!result?
            <>
            <div className="greet">
                <p><span>Hello Gunaal</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see</p>
                    <img src={assets.compass_icon} alt="compassicon"/>
                </div>
                <div className="card">
                    <p>Teach me the concept of game theory in simple terms</p>
                    <img src={assets.bulb_icon} alt="bulbicon"/>
                </div>
                <div className="card">
                    <p>Chat and connect.Access and manage your conversations.</p>
                    <img src={assets.message_icon} alt="messageicon"/>
                </div>
                <div className="card">
                    <p>How can I list all processes that have been running longer than an hour in linux?</p>
                    <img src={assets.code_icon} alt="codeicon"/>
                </div>
            </div>
            </>:<div className='result'>
                <div className="resulttitle">
                    <img src={assets.user_icon} alt='usericon'/>
                    <p>{recent}</p>
                </div>
                <div className="resultdata">
                    <img src={assets.gemini_icon} alt="geminiicon"/>
                    {loading?<div className="loader">
                        <hr />
                        <hr />
                        <hr />


                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultdata}}></p>}
                </div>
                
                
                </div>}
            <div className="mainbottom">
                <div className="searchbox">
                    <input  onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here"/>
                    <div>
                        <img src={assets.gallery_icon} alt="galleryicon" />
                        <img src={assets.mic_icon} alt="micicon" />
                        {input?<img  onClick={()=>onSent()} src={assets.send_icon} alt="sendicon" />:null}
                    </div>
                </div>
                <p className="bottominfo">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
    </div>
    
  )
}

export default MainContent