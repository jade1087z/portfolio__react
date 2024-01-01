import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { animate2 } from "../../../assets/js/gsap/section2.js";

const Section2 = () => {

    const sec2Ref = useRef(null)

    useEffect(() => {
        if(sec2Ref.current) {
            animate2(sec2Ref.current)
        }
    }, [])


  return (
    <div id="section2">
        <div className="loop__slide__container">
            <div className="loop__slide__group">
                <div className="loop__slide"></div>
                <div className="loop__slide"></div>
                <div className="loop__slide"></div>
            </div>
            <div className="loop__slide__group">
                <div className="loop__slide"></div>
                <div className="loop__slide"></div>
                <div className="loop__slide"></div>
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
                <div className="right" ref={sec2Ref}>
                    <div className="HIDDEN">
                        <p className="desc1 reveal2 BTT5">WHY, COLLABORATION AMONG</p>
                    </div>
                    <div className="HIDDEN">
                        <p className="desc1 reveal2 BTT5" id="desc1-1">DEVELOPERS </p>
                    </div>
                    <p className="desc2 pb0 mb20 underLine first sp1">최종 제품의 품질을 높이기 위해서는 협업은 필수적이라 생각합니다.</p>
                    <p className="desc2 split2 pt0 sp2">협업없이 혼자 프로젝트를 추진하는 것은 혼자만의 시야와 지식으로 한정된 결과물을 가져온다고 생각합니다.</p>
                    <p className="desc2 split2 pt0 sp3">협업을 통한 팀원 간의 피드백과 검토 과정은 다양한 문제에 대한 해결방안과 다양한</p>
                    <p className="desc2 split2 pt0 sp4">기술과 관점을 빠르게 배울 수 있는 기회라고 생각합니다.</p>
                    <p className="desc2 split2 pt0 sp5">작은 관점에서의 협업은 단순히 함께 일하는 것이겠지만, </p>
                    <p className="desc2 split2 pt0 sp6">시각을 넓혀 보면 협업이란 서로를 이해하고 지지하며 공동의 목표를 향해 나아가는 과정인 것 같습니다.</p>
                    <p className="desc2 desc__arrow pt0 mt20 whiteSpaceNo last sp7">
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
  )
}

export default Section2