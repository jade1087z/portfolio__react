import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    <header id="header">
    <div className="left">
        <span><img src="assets/img/image.png" alt=""/></span>
        <h1>developer</h1>
        <p className="time">korea</p>

    </div>
    <nav className="right">
        <ul>
            <li><Link to={"#"}>abuot</Link></li>
            <li><Link to={"#"}>work</Link></li>
            <li><Link to={"#"}>skill</Link></li>
            <li><Link to={"#"}>contact</Link></li>
            <li><Link to={"#"}>comment</Link></li>
        </ul>
        <div className="header__nav__mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded=""
            role="button">
            Menu
        </div>
    </nav>
</header>

<div id="section1">
    <div className="sec1__text">
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
        <p className="split1">
            신입 프론트엔드 개발자 임종한입니다!<br />
            저는 사용자 중심의 코드를 작성하는 동시에, 효율적이며 경제적인 프로그램을 만드는 개발자가 되고 싶습니다.<br />
            제한된 리소스 내에서도 최고의 성능을 내는 프로그램을 만들어내는 것이 바로 저의 목표입니다.
            <br />
            이를 위해, 저는 항상 새로운 기술과 트렌드를 학습하고, 배운 기술들을 갈고 닦는데 노력할 것입니다. <br />
        </p>

    </div>
</div>

<div id="section2">
    <div className="loop__slide__container">
        <div className="loop__slide__group">
            <img className="loop__slide" src="https://images.unsplash.com/photo-1635438909544-3f1e87c206eb" height="500" width="800" alt="" />
            <img className="loop__slide" src="https://images.unsplash.com/photo-1702221422565-60f734cd90b1" height="500" width="800" alt="" />
            <img className="loop__slide" src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05" height="500" width="800" alt="" />
        </div>
        <div className="loop__slide__group">
            <img className="loop__slide" src="https://images.unsplash.com/photo-1635438909544-3f1e87c206eb" height="500" width="800" alt="" />
            <img className="loop__slide" src="https://images.unsplash.com/photo-1702221422565-60f734cd90b1" height="500" width="800" alt="" />
            <img className="loop__slide" src="https://images.unsplash.com/photo-1683009427619-a1a11b799e05" height="500" width="800" alt="" />
        </div>
    </div>
    <div className="text-title">
        <div className="text__flex">
            <div className="left">
                <div className="reveal2 BTT6 svg">
                    <p className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <polygon
                                points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                        </svg>
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="HIDDEN">
                    <p className="desc1 reveal2 BTT5">WHY, COLLABORATION AMONG</p>
                </div>
                <div className="HIDDEN">
                    <p className="desc1 reveal2 BTT5" id="desc1-1">DEVELOPERS </p>
                </div>
                <p className="desc2 pb0 mb20 underLine first">최종 제품의 품질을 높이기 위해서는 협업은 필수적이라 생각합니다.</p>
                <p className="desc2 split2 pt0">
                    협업없이 혼자 프로젝트를 추진하는 것은 혼자만의 시야와 지식으로 한정된 결과물을 가져온다고 생각합니다.<br/>
                    협업을 통한 팀원 간의 피드백과 검토 과정은 다양한 문제에 대한 해결방안과 다양한<br/>
                    기술과 관점을 빠르게 배울 수 있는 기회라고 생각합니다. <br/>
                    작은 관점에서의 협업은 단순히 함께 일하는 것이겠지만, <br/>
                    시각을 넓혀 보면 협업이란 서로를 이해하고 지지하며 공동의 목표를 향해 나아가는 과정인 것 같습니다.
                </p>
                <p className="desc2 desc__arrow pt0 mt20 whiteSpaceNo last">
                    <Link to={"#"}>
                        LET'S WORK TOGETHER
                        <svg width="26" height="8" viewBox="0 0 26 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM0 4.5H25V3.5H0V4.5Z"
                                fill="black" />
                        </svg>
                    </Link>
                </p>
            </div>
        </div>

    </div>
</div>

<div id="section3">
    <div className="work__inner">
        <div className="work__wrap">
            <div className="sec3__text">
                <div className="HIDDEN img">
                    <div className="reveal3 BTT8">
                        <img src="https:////source.unsplash.com/500x500/?water" alt="" />
                    </div>
                </div>
                <div className="HIDDEN">
                    <div className="reveal3 BTT9">FRONTEND</div>
                </div>
                <div className="HIDDEN ml10">
                    <div className="reveal3 BTT7">WORKLIST</div>
                </div>
            </div>

            <div className="sec3__intro mt70">
                <div className="right">
                    <p className="sec3__split desc2 pb0 mb20 underLine first">나의 작업 리스트!</p>
                    <p className="sec3__split desc2 pt0 whiteSpaceNo split3-1">저는 사용자 중심의 코드를 작성하는 동시에, 효율적이며 경제적인 프로그램을 만드는 개발자가 되고 싶습니다.</p>
                    <p className="sec3__split desc2 pt0 whiteSpaceNo split3-2">제한된 리소스 내에서도 최고의 성능을 내는 프로그램을 만들어내는 것이 바로 저의 목표입니다.</p>
                    <p className="sec3__split desc2 pt0 whiteSpaceNo split3-3">이를 위해, 저는 항상 새로운 기술과 트렌드를 학습하고, 배운 기술들을 갈고 닦는데 노력할 것입니다.</p>
                    
                    <p className="sec3__split desc2 desc__arrow pt0 mt20 whiteSpaceNo last">
                        <Link to={"#"}>React.js,&nbsp; Node.js,&nbsp; php</Link>
                    </p>
                </div>

            </div>
        </div>
    </div>
</div>

<div id="section4">
    <div className="project__wrap">
        <div className="project p1 work">
            <div className="project__flex">
                <div className="left">
                    <div className="NUMHIDDEN">
                        <div className="reveal1 BTT3 num">1.</div>
                    </div>
                </div>
                <div className="middle">(Digital Stage)</div>
                <div className="right">
                    <div className="HIDDEN title">
                        <h4 className="reveal1 BTT2">Recreating the</h4>
                    </div>
                    <div className="HIDDEN title">
                        <h4 className="reveal1 BTT2">React YouTube Clone.</h4>
                    </div>
                    <div className="item__wrap">
                        <div className="HIDDEN img">
                            <img src="assets/img/proj01.png" alt="proj01" />
                        </div>
                        <div className="item__desc mt40 pb100">
                            <div className="desc__wrap" onclick="toggleDesc(this)">
                                <div className="flex__desc pl10">
                                    <span>Discovery</span>
                                    <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.25H15" stroke="black" stroke-width="2" />
                                        <path d="M8 0V16" stroke="black" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className="hidden__desc pl10">
                                    <span>asd</span>
                                </div>
                            </div>
                            <div className="desc__wrap" onclick="toggleDesc(this)">
                                <div className="flex__desc pl10">
                                    <span>Discovery</span>
                                    <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.25H15" stroke="black" stroke-width="2" />
                                        <path d="M8 0V16" stroke="black" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className="hidden__desc pl10">
                                    <span>asd</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="project p2 work">
            <div className="project__flex">
                <div className="left">
                    <div className="NUMHIDDEN">
                        <div className="reveal1 BTT3 num">2.</div>
                    </div>
                </div>
                <div className="middle">(Digital Stage)</div>
                <div className="right">
                    <div className="HIDDEN title">
                        <h4 className="reveal1 BTT2">Recreating the</h4>
                    </div>
                    <div className="HIDDEN title">
                        <h4 className="reveal1 BTT2">React YouTube Clone.</h4>
                    </div>
                    <div className="item__wrap">
                        <div className="HIDDEN img">
                            <div><img src="assets/img/proj01.png" alt="proj01" /></div>
                        </div>
                        <div className="item__desc mt40 pb100">
                            <div className="desc__wrap" onclick="toggleDesc(this)">
                                <div className="flex__desc pl10">
                                    <span>Discovery</span>
                                    <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.25H15" stroke="black" stroke-width="2" />
                                        <path d="M8 0V16" stroke="black" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className="hidden__desc pl10">
                                    <span>asd</span>
                                </div>
                            </div>
                            <div className="desc__wrap" onclick="toggleDesc(this)">
                                <div className="flex__desc pl10">
                                    <span>Discovery</span>
                                    <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.25H15" stroke="black" stroke-width="2" />
                                        <path d="M8 0V16" stroke="black" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className="hidden__desc pl10">
                                    <span>asd</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="project p3 work">
            <div className="project__flex">
                <div className="left">
                    <div className="NUMHIDDEN">
                        <div className="reveal1 BTT3 num">3.</div>
                    </div>
                </div>
                <div className="middle">(Digital Stage)</div>
                <div className="right">
                    <div className="HIDDEN title">
                        <h4 className="reveal1 BTT2">Recreating the</h4>
                    </div>
                    <div className="HIDDEN title">
                        <h4 className="reveal1 BTT2">React YouTube Clone.</h4>
                    </div>
                    <div className="item__wrap">
                        <div className="HIDDEN img">
                            <div><img src="assets/img/proj01.png" alt="proj01" /></div>
                        </div>
                        <div className="item__desc mt40 pb100">
                            <div className="desc__wrap" onclick="toggleDesc(this)">
                                <div className="flex__desc pl10">
                                    <span>Discovery</span>
                                    <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.25H15" stroke="black" stroke-width="2" />
                                        <path d="M8 0V16" stroke="black" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className="hidden__desc pl10">
                                    <span>asd</span>
                                </div>
                            </div>
                            <div className="desc__wrap" onclick="toggleDesc(this)">
                                <div className="flex__desc pl10">
                                    <span>Discovery</span>
                                    <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.25H15" stroke="black" stroke-width="2" />
                                        <path d="M8 0V16" stroke="black" stroke-width="2" />
                                    </svg>
                                </div>
                                <div className="hidden__desc pl10">
                                    <span>asd</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="section5">
    <div className="profile__inner">
        <div className="profile__wrap">
            <div className="HIDDEN img">
                <div className="reveal5 BTT10">
                    <img src="https:////source.unsplash.com/500x500/?water" alt="" />
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
                    <img src="assets/img/Group 47.png" alt="3" />
                </div>
            </div>
            <div className="flexBox" style="width: 10%;"></div>
            <div className="profile__right">
                <div className="profile p1">
                    <div className="profile__num split4-1">
                        <p>01.</p>
                    </div>
                    <div className="profile__text">
                        <p className="profile__subTit whiteSpaceNo split4-2">What do you think makes front-end development attractive?</p>
                        <p className="profile__subDe split4-3">프론트엔드의 영역은 코드와 디자인이 만나는 독특한 공간이기에, 웹 개발에 있어 프론트엔드가 할 수 있는 일이 정말 많다고 생각합니다. 그만큼                                부딪혀야 할 일이 많아 험난할 것이라 예상되지만 개발의 전반적인 부분을 담당할 수 있다는 점 때문에, 한 켠으로는 설레는 일이라 생각됩니다.</p>
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

<div id="section6">
    <div className="skill__inner">
        <div className="skill__flex">
            <div className="skill__left">
                <div className="reveal2 BTT6 svg">
                    <p className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <polygon
                                points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                        </svg>
                    </p>
                </div>
            </div>
            <div className="skill__right">
                <div className="HIDDEN">
                    <p className="desc1 reveal2 BTT5">Utilized Skills and Their</p>
                </div>
                <div className="HIDDEN">
                    <p className="desc1 reveal2 BTT5" id="desc1-1">Rationale </p>
                </div>
            </div>
        </div>
        <div className="skill__flex__box">
            <div className="my__skill">
                <p className="sub__tit">google 960 639</p>
                <p className="sub__desc">"dumy text dumy textdumy textdumy textdumy text" "dumy text dumy textdumy
                    textdumy textdumy text" "dumy text dumy textdumy textdumy textdumy text"dumy text dumy textdumy
                    textdumy textdumy text"</p>
            </div>
            <div className="my__skill">
                <p className="sub__tit">google 960 639</p>
                <p className="sub__desc">"dumy text dumy textdumy textdumy textdumy text"</p>
            </div>
            <div className="my__skill">
                <p className="sub__tit">google 960 639</p>
                <p className="sub__desc">"dumy text dumy textdumy textdumy textdumy text"</p>
            </div>
        </div>
        <div className="skill__scrollBar">
            <div className="scroll__num whiteSpaceNo">
                <span className="now">01 - </span>
                <span className="all">05</span>
            </div>
            <div className="bar">
            </div>
            <div className="rem">
                <div className="prev">
                    <svg width="24" height="24" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.22441 17.3145C0.25263 18.2953 0.259964 19.8782 1.24079 20.85L17.2242 36.686C18.2051 37.6578 19.788 37.6505 20.7597 36.6696C21.7315 35.6888 21.7242 34.1059 20.7434 33.1341L6.53584 19.0577L20.6123 4.85016C21.5841 3.86934 21.5767 2.28644 20.5959 1.31467C19.6151 0.34289 18.0322 0.350225 17.0604 1.33105L1.22441 17.3145ZM34.9884 16.4258L2.98876 16.5741L3.01193 21.574L35.0116 21.4258L34.9884 16.4258Z"
                            fill="#5F6168" />
                    </svg>

                </div>
                <div className="next">
                    <svg width="24" height="24" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.7678 20.7678C34.7441 19.7915 34.7441 18.2085 33.7678 17.2322L17.8579 1.32233C16.8816 0.34602 15.2986 0.34602 14.3223 1.32233C13.346 2.29864 13.346 3.88155 14.3223 4.85786L28.4645 19L14.3223 33.1421C13.346 34.1184 13.346 35.7014 14.3223 36.6777C15.2986 37.654 16.8816 37.654 17.8579 36.6777L33.7678 20.7678ZM0 21.5H32V16.5H0V21.5Z"
                            fill="#5F6168" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Home