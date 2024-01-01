import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer1">
            <div className="title">Contact Me</div>
            <div className="link relative">
                <div className='box__wrap'>
                    <Link to={"#"} target="_blank">imjonghan146@gmil.com</Link>
                    <div className="copyBox">Click to copy</div>
                </div>
            </div>
        </div>
        <div className="footer2">
            <div className="siteMap">
                <p className="tit mb20">SiteMap</p>
                <p className="t1"><Link to={"#"}>about</Link></p>
                <p className="t1"><Link to={"#"}>work</Link></p>
                <p className="t1"><Link to={"#"}>skill</Link></p>
                <p className="t1"><Link to={"#"}>contact</Link></p>
                <p className="t1"><Link to={"#"}>comment</Link></p>
            </div>
            <div className="socials">
                <p className="tit mb20">Socials</p>
                <p className="t1">010.7180.2384</p>
                <p className="t1"><Link to={"#"}>GitHub</Link></p>
            </div>
        </div>
        <div className="footer3">
            <p className="mainTit">IMDOOB</p>
            <p className="BTT"><Link to={"#section1"}>Back to top</Link></p>
        </div>
    </footer>
  )
}

export default Footer