import React from 'react'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
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
  )
}

export default Section3