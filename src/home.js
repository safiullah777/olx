import React from 'react'
import Categories from './components/categories'
import Middle from './components/middle'
import PostAd from './components/postad'
import Header from './components/header'
import Sell from './components/sell'


function Home() {
  return (
      <>
        <Header />
        <Categories />
        <Middle />
      </>
  );
}

export default Home;