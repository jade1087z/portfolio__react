import React from 'react'
import section4 from '../../../data/sectionData/section4';
const Section4 = () => {

    const toggleDesc = (e) => {

    }

return (    

<div id="section4">
<div className="project__wrap">

    {section4.map((sec, key) => (
    <div className="project work p1" key={key}>
        <div className="project__flex">
            <div className="left">
                <div className="NUMHIDDEN">
                    <div className="reveal1 BTT3 num">{key + 1}</div>
                </div>
            </div>
            <div className="middle">(Digital Stage)</div>
            <div className="right">
                <div className="HIDDEN title">
                    <h4 className="reveal1 BTT2">{sec.tit1}</h4>
                </div>
                <div className="HIDDEN title">
                    <h4 className="reveal1 BTT2">{sec.tit2}</h4>
                </div>
                <div className="item__wrap">
                    <div className="HIDDEN img">
                        <img src={sec.img} alt="proj01" />
                    </div>
                    <div className="item__desc mt40 pb100">
                        <div className="desc__wrap" onClick={(e) => toggleDesc(e)}>
                            <div className="flex__desc pl10">
                                <span>Discovery</span>
                                <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.25H15" stroke="black" strokeWidth="2" />
                                    <path d="M8 0V16" stroke="black" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className="hidden__desc pl10">
                                <span>asd</span>
                            </div>
                        </div>
                        <div className="desc__wrap" onClick={(e) => toggleDesc(e)}>
                            <div className="flex__desc pl10">
                                <span>Discovery</span>
                                <svg className="icon__plus" width="15" height="16" viewBox="0 0 15 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 8.25H15" stroke="black" strokeWidth="2" />
                                    <path d="M8 0V16" stroke="black" strokeWidth="2" />
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
    ))}
    
</div>
</div>
  )
}

export default Section4