import { Link, Route, Routes } from 'react-router-dom';
import './navbar.css';
import { useEffect, useState } from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

function Navbar(props) {
        const [linkState, setLinkState] = useState(false);
        useEffect(()=>{
            setTimeout(()=>{
                setLinkState(true);
            }, 3000);
        },[]);
        useEffect(()=>{
            document.title = `${props.page} | stepwebdev.me`;
        },[]);
        const [text] = useTypewriter({
            // The "","","","","","","","","", is needed, its a delay before typing.
            words:["","","","","","","","","",`${props.page == "confess.exe" ? 'bash confess.exe' : props.page == "editor.exe" ? "editor.exe" : `cd ${props.page}`}`, ''],
            loop: 1,
            delaySpeed: 100,
            typeSpeed: 100,
            deleteSpeed: 0
        });

    return (
        <>
            <div className="navbar">
                <div className="rootsh">
                    <h2><span style={{ color: "rgba(255,65,0,0.85)" }}>root</span><span style={{ color: "cyan" }}>@</span><span style={{ color: "rgba(255,220,0,1)" }}>Stephen</span><span style={{ color: "cyan", }}>(/{linkState && props.page})</span>:<span className='typewritter'>{text}</span><span className='blinking'>_</span></h2>
                </div>
                {linkState && (
                    <div className="links">
                        <Link to='/' className='link'>Home</Link>
                        <Link to='/projects' className='link'>Projects</Link>
                        <Link to='/contacts' className='link'>Contacts</Link>
                        <Link to='/code_editor' className='link special'>Code Editor</Link>
                </div>
                )}
            </div>
        </>
    );
}
export default Navbar;