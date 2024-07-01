import React from 'react'
import Layout from '../components/layouts/layout'

function About() {
  return (
    <Layout>
      <div className="aboutus">
        <div className='aboutusphoto'>
          <img src='/aboutus_photo.jpg' alt='AboutUs' id="aboutusphoto"/>
        </div>
        <div className='aboutuscontent'>
          <h2 style={{textAlign:"center"}}>About Us</h2>
          <p style={{textAlign:"center"}}>Welcome to Assailant ShopMall, your go-to destination for fashion, electronics, home goods, and more. Founded in 2022, ShopMall began in a small home office with a passion for eco-friendly and innovative products. Today, we proudly serve customers worldwide, offering a vast selection of high-quality items at competitive prices.</p>
          <h2 style={{textAlign:"center"}}>Our Mission</h2>
          <p style={{textAlign:"center"}}>Our mission is to provide an exceptional shopping experience by offering a diverse range of top-quality products, competitive prices, and outstanding customer service.</p>
        </div>
        <div className='aboutusvalues'>
          <h2 style={{textAlign:"center"}}>Our Values</h2>
          <div style={{textAlign:"center"}}>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
          </div>
        </div>
        <div className='aboutuswhychooseus'>
          <h2 style={{textAlign:"center"}}>Why Choose Us?</h2>
          <div style={{textAlign:"center"}}>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About