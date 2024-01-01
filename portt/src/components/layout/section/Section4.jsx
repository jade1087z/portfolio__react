import React, { useEffect, useRef } from 'react'
import section4 from '../../../data/sectionData/section4';
import { Link } from 'react-router-dom';
import { animate1 } from "../../../assets/js/gsap/section1.js";
const Section4 = () => {
   
    
        const sec4Ref = useRef(null)
    
        useEffect(() => {
            if(sec4Ref.current) {
                animate1(sec4Ref.current)
            }
        }, [])

return (    

<div id="section4">
        <div className="project__wrap p1" ref={sec4Ref}>
            <div className="HIDDEN numWrap">
                <p className="num reveal1 BTT3">1.</p>
            </div>
            <div className="HIDDEN subTitle">
                <p className="reveal1 BTT3">(유튜브 사이트 제작)</p>
            </div>
            <div className="titWrap">
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">Digital Stage</div>
                </div>
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">Recreating the React</div>
                </div>
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">YouTube Clone.</div>
                </div>
                <div className="imgWrap">
                    <div className="img">
                    </div>
                    <div className="desc">
                        <p className="underLine">유튜브 사이트 제작</p>
                        <p className="mainDesc">유튜브 api를 통해 패션 유튜브 클론 사이트를 제작했습니다.
                            리액트라는 새로운 환경에서 첫 프로그램을 개발하면서, 그 어려움이 동시에 흥미로움으로 변모하는 과정을 경험했습니다.
                        </p>
                        <div className="desc__flex__box">
                            <p className="bold"> <Link to={"https://github.com/jade1087z/reactyoutube.git"} target="_blank" className="relative" >GitHub Link </Link> </p>
                            <p className="bold"><Link to={"https://fessionyoutube.netlify.app/"} target="_blank">사이트 바로가기</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="project__wrap p2">
            <div className="HIDDEN numWrap">
                <p className="num reveal1 BTT3">2.</p>
            </div>
            <div className="HIDDEN subTitle">
                <p className="reveal1 BTT3">(유튜브 사이트 제작)</p>
            </div>
            <div className="titWrap">
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">Digital Stage</div>
                </div>
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">Recreating the React</div>
                </div>
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">YouTube Clone.</div>
                </div>
                <div className="imgWrap">
                    <div className="img">
                    </div>
                    <div className="desc">
                        <p className="underLine">유튜브 사이트 제작</p>
                        <p className="mainDesc">유튜브 api를 통해 패션 유튜브 클론 사이트를 제작했습니다.
                            리액트라는 새로운 환경에서 첫 프로그램을 개발하면서, 그 어려움이 동시에 흥미로움으로 변모하는 과정을 경험했습니다.
                        </p>
                        <div className="desc__flex__box">
                            <p className="bold"> <a className="relative" href="https://github.com/jade1087z/reactyoutube.git"                                target="_blank">GitHub Link </a> </p>
                            <p className="bold"><a href="https://fessionyoutube.netlify.app/" target="_blank">사이트 바로가기</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="project__wrap p3">
            <div className="HIDDEN numWrap">
                <p className="num reveal1 BTT3">3.</p>
            </div>
            <div className="HIDDEN subTitle">
                <p className="reveal1 BTT3">(유튜브 사이트 제작)</p>
            </div>
            <div className="titWrap">
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">Digital Stage</div>
                </div>
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">Recreating the React</div>
                </div>
                <div className="HIDDEN">
                    <div className="h4 reveal1 BTT3">YouTube Clone.</div>
                </div>
                <div className="imgWrap">
                    <div className="img">
                    </div>
                    <div className="desc">
                        <p className="underLine">유튜브 사이트 제작</p>
                        <p className="mainDesc">유튜브 api를 통해 패션 유튜브 클론 사이트를 제작했습니다.
                            리액트라는 새로운 환경에서 첫 프로그램을 개발하면서, 그 어려움이 동시에 흥미로움으로 변모하는 과정을 경험했습니다.
                        </p>
                        <div className="desc__flex__box">
                            <p className="bold"> <a className="relative" href="https://github.com/jade1087z/reactyoutube.git"                                target="_blank">GitHub Link </a> </p>
                            <p className="bold"><a href="https://fessionyoutube.netlify.app/" target="_blank">사이트 바로가기</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Section4