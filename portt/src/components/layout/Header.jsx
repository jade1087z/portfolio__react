import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import text1 from '../../assets/js/gsap/text/textS1';

const Header = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [ time, setTime ] = useState('');
    const [ colonOpacity, setColonOpacity ] = useState(1);

    useEffect (() => {
        const timer = setInterval(() => {
            const now = new Date();
            const day = days[now.getDay()];
            const hour = ('0' + now.getHours()).slice(-2);
            const minute = ('0' + now.getMinutes()).slice(-2);
            const second = now.getSeconds();

            setColonOpacity(second % 2 ? 0 : 1);
            setTime(`korea, ${day} ${hour}:${minute}`);
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [])
    // header day
    
    const list = [{link: "#", name: 'Abuot'}, {link: "#", name: 'Work'}, {link: "#", name: 'Skill'}, {link: "#", name: 'Contact'}, {link: "#", name: 'Comment'}];
    
    const [showMenu, setShowMenu ] = useState(true);
    const [activeLink, setActiveLink ] = useState(null);
    
    const handleMenuClick = () => {
        setShowMenu(!showMenu)
        console.log("click")
    }
    const handleMouseOver = (key) => {
        setActiveLink(key);
    }
    const handleMouseOut = () => {
        setActiveLink(null)
    }
    //  hover + toggle

    const textRef2 = useRef(null);

    


  return (
    <header id="header" ref={textRef2}>
    <div className="left">
        <span><img src={logo} alt=""/></span>
        <h1>developer</h1>
        <p className="time">{time.split(':').map((part, index) => 
        index < time.split(':').length - 1
        ? <React.Fragment key={index}><span>{part}</span><span style={{opacity: colonOpacity}}>:</span></React.Fragment>
        : <span>{part}</span>
        )}</p>

    </div>
    <nav className="right" role='navigation'>
    <div className="header__nav__mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded={showMenu ? false: true} role="button" onClick={() => handleMenuClick()}>
        Menu
    </div>
    {showMenu && (
        <ul className={`${showMenu ? "show" : ""}`}>
            {list.map((li, key) => (
                <li key={key}><Link to={li.link} style={{color: activeLink === key ? '#22242a' : activeLink !== null ? "#eaeaea" : '#22242a'}}
                onMouseOver={() => handleMouseOver(key)}
                onMouseOut = {handleMouseOut}
                >{li.name}</Link></li>
                ))}
        </ul>
    )} 
    </nav>
</header>
  )
}

export default Header