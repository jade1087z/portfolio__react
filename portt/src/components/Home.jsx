import React, { useState } from 'react'
import Header from './layout/Header';
import Section1 from './layout/section/Section1';
import Section2 from './layout/section/Section2';
import Section3 from './layout/section/Section3';
import Section4 from './layout/section/Section4';
import Section5 from './layout/section/Section5';
import Section6 from './layout/section/Section6';
import Footer from './layout/Footer';

const Home = () => {

  

  return (
    <div>
    <Header />
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>

    <Footer />
</div>
  )
}

export default Home