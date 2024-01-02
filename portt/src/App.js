import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');  // 여기서 '#root'는 앱의 루트 요소의 id입니다.
const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App