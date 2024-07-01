import React from 'react'
import Layout from '../components/layouts/layout'

function Policy() {
  return (
    <Layout>
      <div className="policy">
        <div className='policyphoto'>
          <img src='/privacypolicy_photo.jpg' alt='PrivacyPolicy' id="policyphoto"/>
        </div>
        <div className='policycontent'>
          <h2 style={{textAlign:"center"}}>Privacy Policy</h2>
          <p style={{textAlign:"center"}}>Welcome to Assailant ShopMall, your go-to destination for fashion, electronics, home goods, and more. Founded in 2022, ShopMall began in a small home office with a passion for eco-friendly and innovative products. Today, we proudly serve customers worldwide, offering a vast selection of high-quality items at competitive prices.</p>
          <h2 style={{textAlign:"center"}}>Information We Collect</h2>
          <div style={{textAlign:"center"}}>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
          </div>
        </div>
        <div className='policyinfo'>
          <h2 style={{textAlign:"center"}}>How We Use Your Information</h2>
          <div style={{textAlign:"center"}}>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
          </div>
        </div>
        <div className='policyshare'>
          <h2 style={{textAlign:"center"}}>Sharing Your Information</h2>
          <div style={{textAlign:"center"}}>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <li><strong>Customer Focus</strong> : Your needs are our priority.</li>
            <br/>
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            &nbsp; &nbsp;
            <label className="form-check-label" for="invalidCheck" ><strong style={{fontSize:"20px"}}>I agree to terms and conditions</strong></label>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Policy