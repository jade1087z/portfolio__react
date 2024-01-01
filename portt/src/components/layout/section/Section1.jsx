import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/img/logo.png'
import { animate1 } from "../../../assets/js/gsap/section1.js";
import gsap from 'gsap';

const Section1 = () => {
    const [time, setTime] = useState('');
    const [colonOpacity, setColonOpacity] = useState(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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

    const list = [{ link: "#", name: 'Abuot' }, { link: "#", name: 'Work' }, { link: "#", name: 'Skill' }, { link: "#", name: 'Contact' }, { link: "#", name: 'Comment' }];

    const [showMenu, setShowMenu] = useState(true);
    const [activeLink, setActiveLink] = useState(null);

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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 700) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    //  hover + toggle




    const sec1Ref = useRef(null);
    useEffect(() => {
        if(sec1Ref.current) {
            animate1(sec1Ref.current)
        }
    }, []);




    return (
        <div>
            <header id="header">
                <div className="left">
                    <span><img src={logo} alt="" /></span>
                    <h1>developer</h1>
                    <p className="time">{time.split(':').map((part, index) =>
                        <React.Fragment key={index}>
                            <span>{part}</span>
                            {index < time.split(':').length - 1 && <span style={{ opacity: colonOpacity }}>:</span>}
                        </React.Fragment>
                    )}</p>

                </div>
                <nav className="right" role='navigation'>
                    <div className="header__nav__mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded={showMenu ? false : true} role="button" onClick={() => handleMenuClick()}>
                        Menu
                    </div>
                    {showMenu && (
                        <ul className={`${showMenu ? "show" : "hide"}`}>
                            {list.map((li, key) => (
                                <li key={key}><Link to={li.link} style={{ color: activeLink === key ? '#22242a' : activeLink !== null ? "#eaeaea" : '#22242a' }}
                                    onMouseOver={() => handleMouseOver(key)}
                                    onMouseOut={handleMouseOut}
                                >{li.name}</Link></li>
                            ))}
                        </ul>
                    )}
                </nav>
            </header>
            <div id="section1">
                <div className="sec1__text" ref={sec1Ref}>
                    <span className="img"></span>
                    <div className="HIDDEN">
                        <div className="reveal1 BTT1">FRONTEND</div>
                    </div>
                    <div className="HIDDEN">
                        <div className="reveal1 BTT2">DEVELOPER</div>
                    </div>
                    <div className="HIDDEN">
                        <div className="reveal1 BTT3">I WANT TO BE.</div>
                    </div>
                </div>
                <div className="sec1__intro">
                    <p className="split1" >
                        신입 프론트엔드 개발자 임종한입니다!<br />
                        저는 사용자 중심의 코드를 작성하는 동시에, 효율적이며 경제적인 프로그램을 만드는 개발자가 되고 싶습니다.<br />
                        제한된 리소스 내에서도 최고의 성능을 내는 프로그램을 만들어내는 것이 바로 저의 목표입니다.
                        <br />
                        이를 위해, 저는 항상 새로운 기술과 트렌드를 학습하고, 배운 기술들을 갈고 닦는데 노력할 것입니다. <br />
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Section1