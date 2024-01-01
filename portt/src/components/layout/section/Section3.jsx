import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { animate3 } from "../../../assets/js/gsap/section3.js";


const Section3 = () => {
    const sec3Ref = useRef(null)

    useEffect(() => {
        if(sec3Ref.current) {
            animate3(sec3Ref.current)
        }
    }, [])
  return (
    <div id="section3" ref={sec3Ref}>
    <div className="work__inner">
        <div className="sec3__text">
            <div className="HIDDEN">
                <div className="img reveal3 BTT8">
                </div>
            </div>
            <div className="HIDDEN">
                <div className="reveal3 BTT9">FRONTEND</div>
            </div>
            <div className="HIDDEN ml10">
                <div className="reveal3 BTT7">WORK-LIST</div>
            </div>
        </div>
    </div>

    <div className="work__wrap">
        <div className="sec3__intro mt70">
            <div className="right" >
                <p className="sec3__split desc2 pb0 mb20 underLine first">나의 작업 리스트!</p>
                <p className="sec3__split desc2 pt0 split3-1">"Node.js, PHP, React를 활용한 다양한 프로젝트에 참여하며,</p>
                <p className="sec3__split desc2 pt0 split3-2">실전에서 필요한 기술 스택을 경험하고 익혔습니다. 이런 경험은 저에게 깊이 있는 이해와 능숙한 활용
                    능력을 가져다주었습니다.</p>
                <p className="sec3__split desc2 pt0 split3-3">저는 항상 새로운 기술 트렌드를 두려워하지 않습니다. </p>
                <p className="sec3__split desc2 pt0 split3-4">오히려 적극적으로 도전하고, 배우고자 하는 열정을 가진 개발자입니다.</p>
                <p className="sec3__split desc2 pt0 split3-5">복잡한 문제에 대한 해결책이 결국 기본에 있다는 사실을 알기에, 저는 기본기를 탄탄히 다지는 데 노력을
                    기울일 것입니다.</p>
                <p className="sec3__split desc2 pt0 split3-6">제 목표는 더 나은 서비스를 제공하는 개발자가 되는 것입니다.</p>
                <p className="sec3__split desc2 desc__arrow pt0 mt20 whiteSpaceNo last">
                    <Link href="#">React.js,&nbsp; Node.js,&nbsp; php</Link>
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Section3