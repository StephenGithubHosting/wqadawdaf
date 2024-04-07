import React, { useEffect, useState } from 'react';
import './code.css';
import Navbar from '../navbar/navbar';

const Code = () => {
    const [linkState, setLinkState] = useState(false);
    const [displayEasterEgg, setDisplayEasterEgg] = useState(false);
    const [clickMe, setClickMe] = useState(false);
    useEffect(() => {
        function setTimeoutForClickMe(){
            setTimeout(()=>{
                setClickMe(true);
            }, 10000);
        }
        setTimeoutForClickMe();
        setTimeout(() => {
            setLinkState(true);
        }, 3000);
    }, []);
    const deFunction = () => {
        if(displayEasterEgg){
            setDisplayEasterEgg(false);
        } else{
            setDisplayEasterEgg(true);
        }
    }
  return (
    <>
        <Navbar page='editor.exe'></Navbar>
        <div className="code-editor">
            {   
              linkState && <>
            <div className="content">
            {/* <div className="title">
                <h1>JS Code Editor</h1>
            </div>
            <div className="minititle">
                <h2>Powered by:</h2>
            </div> */}
                  <div className="title">
                      <h1>JS Code Editor</h1>
                  </div>
                  <div className="minititle">
                      <h2>
                        <i>
                        Powered by: <a href="https://onecompiler.com/javascript" target="_blank" rel="noreferrer" style={{color:"rgba(255,100,255)"}}>OneCompiler.com</a>
                        </i>
                        </h2>
                        {
                         clickMe && <>
                                <button onClick={() => deFunction()}>Click me!</button>
                            </>
                        }
                  </div> 
                  <div className="details">
                    <p style={{fontSize:"14px", marginLeft:"10px"}}><i><b>Want code output? Scroll down the editor!</b></i></p>
                  </div>
            <div className="editor">
                <iframe
                    frameBorder="0"
                    src="https://onecompiler.com/embed/javascript/429fukexk?theme=dark"
                    width="98%"
                    height="85%"
                ></iframe>
            </div>
            {/* <br /> */}
            
            </div>
            
            
                </> 
            }
        </div>
        <br />
     
                <p style={{color:"white", textAlign:"right", position:"fixed", bottom:"0px", right:"0px", fontSize:"14px"}}><i>
                {`${displayEasterEgg ? 'Her lover, 2022 - 2024.' : '' }`}
                    </i></p>
            
       
    </>
  )
};

export default Code;