import React, { useEffect, useRef } from 'react'
import animate1 from '../../../assets/js/gsap/section1';
import text1 from '../../../assets/js/gsap/text/textS1';

const Section1 = () => {
    const itemRef = useRef(null);
    const textRef1 = useRef(null);

    

  return (
    <div id="section1">
    <div className="sec1__text">
        <span className="img" ref={textRef1}></span>
        <div className="HIDDEN">
            <div className="reveal1 BTT1" ref={itemRef}>FRONTEND</div>
        </div>
        <div className="HIDDEN">
            <div className="reveal1 BTT2" ref={itemRef}>DEVELOPER</div>
        </div>
        <div className="HIDDEN">
            <div className="reveal1 BTT3" ref={itemRef}>I WANT TO BE.</div>
        </div>
    </div>
    <div className="sec1__intro">
        <p className="split1" ref={textRef1}>
            신입 프론트엔드 개발자 임종한입니다!<br />
            저는 사용자 중심의 코드를 작성하는 동시에, 효율적이며 경제적인 프로그램을 만드는 개발자가 되고 싶습니다.<br />
            제한된 리소스 내에서도 최고의 성능을 내는 프로그램을 만들어내는 것이 바로 저의 목표입니다.
            <br />
            이를 위해, 저는 항상 새로운 기술과 트렌드를 학습하고, 배운 기술들을 갈고 닦는데 노력할 것입니다. <br />
        </p>

    </div>
</div>
  )
}

export default Section1