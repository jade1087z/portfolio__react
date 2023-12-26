import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../../assets/img/Group 47.png';


const Section5 = () => {
  return (

    <div id="section5">
    <div className="profile__inner">
        <div className="profile__wrap">
            <div className="HIDDEN img">
                <div className="reveal5 BTT10">
                    <img src="https:////source.unsplash.com/500x500/?water" alt={profile}/>
                </div>
            </div>
            <div className="profile__title HIDDEN">
                <h4 className="reveal5 BTT11">MY PROFILE</h4>
            </div>
            <div className="profile__title HIDDEN">
                <h4 className="reveal5 BTT12">MY PROFILE</h4>
            </div>
            <div className="profile__title HIDDEN pb100">
                <h4 className="reveal5 BTT12">MY PROFILE</h4>
            </div>
        </div>
        <div className="profile__flex">
            <div className="profile__left">
                <div className="profile__img">
                    <img src={profile} alt="3" />
                </div>
            </div>
            <div className="flexBox" style={{width: 10 + '%'}}></div>
            <div className="profile__right">
                <div className="profile p1">
                    <div className="profile__num split4-1">
                        <p>01.</p>
                    </div>
                    <div className="profile__text">
                        <p className="profile__subTit whiteSpaceNo split4-2">What do you think makes front-end development attractive?</p>
                        <p className="profile__subDe split4-3">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이 정말 많다고 생각합니다. 그만큼
                                                        부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라 생각됩니다.</p>
                    </div>
                </div>
                <div className="profile p2 ">
                    <div className="profile__num split4-4">
                        <p>02.</p>
                    </div>
                    <div className="profile__text">
                        <p className="profile__subTit whiteSpaceNo split4-5">What do you think makes front-end development attractive?</p>
                        <p className="profile__subDe split4-6">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이 정말 많다고 생각합니다. 그만큼                                부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라 생각됩니다.</p>
                    </div>
                </div>
                <div className="profile p3">
                    <div className="profile__num split4-7">
                        <p>03.</p>
                    </div>
                    <div className="profile__text">
                        <p className="profile__subTit whiteSpaceNo split4-8">What do you think makes front-end development attractive?</p>
                        <p className="profile__subDe split4-9">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이 정말 많다고 생각합니다. 그만큼                                부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라 생각됩니다.</p>
                    </div>
                </div>
                <div className="profile__more split4-10">
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
</div>
  )
}

export default Section5