import React, { useEffect, useRef, useState } from "react";
import { animate2 } from "../../../assets/js/gsap/section2.js";
import axios from "axios";

const Section6 = () => {
    const sec6Ref = useRef(null);
    const scrollContainer = useRef(null);
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);

    const updateTranslateX = (increment) => {
        console.log("Before:", scrollContainer.current.style.transform);
        let currentTranslateX = parseFloat(
            scrollContainer.current.style.transform
                .replace("translate3d(", "")
                .replace("px, 0px, 0px)", "")
        );
        if (isNaN(currentTranslateX)) {
            currentTranslateX = 0;
        }
        scrollContainer.current.style.transform = `translate3d(${
            currentTranslateX + increment
        }px, 0px, 0px)`;
        scrollContainer.current.style.transition = "transform 0.5s ease-out";
        console.log("After:", scrollContainer.current.style.transform);
    };

    useEffect(() => {
        if (sec6Ref.current) {
            animate2(sec6Ref.current);
        }
        const next = () => {
            if (nextButtonRef.current) {
                updateTranslateX(-window.innerWidth * 0.5);
            }
        };

        const prev = () => {
            if (prevButtonRef.current) {
                updateTranslateX(window.innerWidth * 0.5);
            }
        };
        nextButtonRef.current.addEventListener("click", next);
        prevButtonRef.current.addEventListener("click", prev);

        return () => {
            if (nextButtonRef.current) {
                nextButtonRef.current.removeEventListener("click", next);
            }
            if (prevButtonRef.current) {
                prevButtonRef.current.removeEventListener("click", prev);
            }
        };
    }, []);

    // 박스 움직이기 및 애니메이션

    const [desc, setDesc] = useState();
    const [postList, setPostList] = useState([]);

    // 요구 사항
    // 1. 댓글 작성 완료시 동적으로 댓글이 생겨야 함 --> 새로고침 되지 않고 --> 최신이 먼저 배치되게끔
    // 2. 새로고침하더라도 글목록은 최신순으로
    // --> 글 목록이 늘어나면 해당 값만큼 maxWidth값 키워주기 + 밑에 목록 숫자 업데이트 해주기

    useEffect(() => {
        axios
            .get("/api/post/list")
            .then((res) => {
                if (res.data.success) {
                    setPostList(res.data.postList);
                    console.log("axios list");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const addPost = async (e) => {
        e.preventDefault();
        if (desc) {
            let body = {
                content: desc,
            };
            await axios
                .post("/api/post/write", body)
                .then((res) => {
                    if (res.data.success) {
                        setPostList((prevPosts) => [
                            res.data.newPost,
                            ...prevPosts,
                        ]);
                        alert("댓글 작성이 완료되었습니다.");
                    } else {
                        console.log("axios실패");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("내용을 입력해주세여");
        }
    };

    return (
        <div id="section6">
            <div className="skill__flex" ref={sec6Ref}>
                <div className="skill__left">
                    <div className="HIDDEN svg">
                        <p className="reveal2 BTT6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                            </svg>
                        </p>
                    </div>
                </div>
                <div className="skill__right">
                    <div className="HIDDEN">
                        <p className="desc1 reveal2 BTT5 desc6">
                            Utilized Skills and Their
                        </p>
                    </div>
                    <div className="HIDDEN">
                        <p className="desc1 reveal2 BTT5" id="desc6-1">
                            Rationale{" "}
                        </p>
                    </div>
                </div>
            </div>

            <div className="skill__inner">
                <div className="skill__flex__box" ref={scrollContainer}>
                    <form className="my__skill form__box">
                        <textarea
                            className="desc"
                            placeholder="desc"
                            style={{ overflow: "auto" }}
                            value={desc} // state와 연결
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                        <div>
                            <button
                                className="post"
                                onClick={(e) => addPost(e)}
                            >
                                POST
                            </button>
                        </div>
                    </form>
                    {postList &&
                        postList.map((post, key) => (
                            <div className="skillBox" key={key}>
                                <div className="my__skill">
                                    <p className="sub__desc">{post.content}</p>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="skill__scrollBar">
                    <div className="scroll__num whiteSpaceNo">
                        <span className="now">01 - </span>
                        <span className="all">05</span>
                    </div>
                    <div className="bar"></div>
                    <div className="rem">
                        <div className="prev" ref={prevButtonRef}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 36 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.22441 17.3145C0.25263 18.2953 0.259964 19.8782 1.24079 20.85L17.2242 36.686C18.2051 37.6578 19.788 37.6505 20.7597 36.6696C21.7315 35.6888 21.7242 34.1059 20.7434 33.1341L6.53584 19.0577L20.6123 4.85016C21.5841 3.86934 21.5767 2.28644 20.5959 1.31467C19.6151 0.34289 18.0322 0.350225 17.0604 1.33105L1.22441 17.3145ZM34.9884 16.4258L2.98876 16.5741L3.01193 21.574L35.0116 21.4258L34.9884 16.4258Z"
                                    fill="#000"
                                />
                            </svg>
                        </div>
                        <div className="next" ref={nextButtonRef}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 35 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M33.7678 20.7678C34.7441 19.7915 34.7441 18.2085 33.7678 17.2322L17.8579 1.32233C16.8816 0.34602 15.2986 0.34602 14.3223 1.32233C13.346 2.29864 13.346 3.88155 14.3223 4.85786L28.4645 19L14.3223 33.1421C13.346 34.1184 13.346 35.7014 14.3223 36.6777C15.2986 37.654 16.8816 37.654 17.8579 36.6777L33.7678 20.7678ZM0 21.5H32V16.5H0V21.5Z"
                                    fill="#000"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section6;
