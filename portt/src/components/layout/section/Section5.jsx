import React, { useEffect, useRef } from 'react'
import profile from '../../../assets/img/Group 47.png';
import section4 from '../../../data/sectionData/section4';
import { Link } from 'react-router-dom';
import { animate5 } from "../../../assets/js/gsap/section5.js";


const Section5 = () => {
    const sec5Ref = useRef(null)
    
        useEffect(() => {
            if(sec5Ref.current) {
                animate5(sec5Ref.current)
            }
        }, [])
  return (

    <div id="section5">
    <div className="profile__wrap" ref={sec5Ref}>
        <div className="sec5__text">
            <div className="HIDDEN img">
                <div className="reveal5 BTT10">
                    <img src="https:////source.unsplash.com/500x500/?water" alt="" />
                </div>
            </div>
            <div className="HIDDEN">
                <div className="reveal5 BTT11">PROFILE</div>
            </div>
            <div className="HIDDEN ml10">
                <div className="reveal5 BTT12">AND SKILL</div>
            </div>
        </div>
    </div>
    <div className="profile__flex">
        <div className="sticky__box">
            <div className="left">
                <img src="assets/img/Group 47.png" alt="" />
            </div>
        </div>
        <div className="midle"></div>
        <div className="right">
            <div className="right__wrap r1">
                <div className="num__wrap ">
                    <p className="num split4-1">01.</p>
                </div>
                <div className="profile__text ">
                    <p className="profile__subTit whiteSpaceNo split4-2">What do you think makes front-end development
                        attractive?</p>
                    <p className="profile__subDe split4-3">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이
                        정말 많다고 생각합니다. 그만큼 부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라
                        생각됩니다.</p>
                </div>
            </div>
            <div className="right__wrap r2">
                <div className="num__wrap ">
                    <p className="num split4-4">02.</p>
                </div>
                <div className="profile__text ">
                    <p className="profile__subTit whiteSpaceNo split4-5">What do you think makes front-end development
                        attractive?</p>
                    <p className="profile__subDe split4-6">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이
                        정말 많다고 생각합니다. 그만큼 부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라
                        생각됩니다.</p>
                </div>
            </div>
            <div className="right__wrap r3">
                <div className="num__wrap ">
                    <p className="num split4-7">03.</p>
                </div>
                <div className="profile__text ">
                    <p className="profile__subTit whiteSpaceNo split4-8">What do you think makes front-end development
                        attractive?</p>
                    <p className="profile__subDe split4-9">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이
                        정말 많다고 생각합니다. 그만큼 부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라
                        생각됩니다.</p>
                </div>
            </div>
            <div className="right__wrap r4">
                <div className="num__wrap ">
                    <p className="num split4-10">04.</p>
                </div>
                <div className="profile__text ">
                    <p className="profile__subTit whiteSpaceNo split4-11">What do you think makes front-end development
                        attractive?</p>
                    <p className="profile__subDe split4-12">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이
                        정말 많다고 생각합니다. 그만큼 부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라
                        생각됩니다.</p>
                </div>
            </div>
            <div className="right__wrap r5">
                <div className="num__wrap ">
                    <p className="num split4-13">04.</p>
                </div>
                <div className="profile__text ">
                    <p className="profile__subTit whiteSpaceNo split4-14">What do you think makes front-end development
                        attractive?</p>
                    <p className="profile__subDe split4-15">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이
                        정말 많다고 생각합니다. 그만큼 부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라
                        생각됩니다.</p>
                </div>
            </div>
            <div className="right__wrap r6">
                <div className="num__wrap ">
                    <p className="num split4-16">04.</p>
                </div>
                <div className="profile__text ">
                    <p className="profile__subTit whiteSpaceNo split4-17">What do you think makes front-end development
                        attractive?</p>
                    <p className="profile__subDe split4-18">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이
                        정말 많다고 생각합니다. 그만큼 부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라
                        생각됩니다.</p>
                </div>
            </div>
            
            <div className="right__wrap more split4-19">
                <Link to={"#"}>
                    <p>LET'S WORK TOGETHER</p>
                    <svg width="26" height="8" viewBox="0 0 26 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z"
                            fill="black" />
                    </svg>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Section5