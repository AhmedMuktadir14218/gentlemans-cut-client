/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import Service from '../Service/Service'

function About() {
  return (
    <>
          <section className="margin-section">

<div className="about-history">

    <h1>PROFESSIONAL SALOON FOR MEN ONLY</h1>
    <div className="item-2">
        <h3>SINCE 2015</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda harum sit nemo. Nobis, dicta amet!</p>
    </div>
    <div className="item-3">
        <h3>1000+ CLIENS</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, dicta!</p>
    </div>
    
</div>

<div className="about-details">

    <img src="./images/about-details.jpg" alt=""></img>
    <div className="about-paragraph">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi asperiores sequi nulla? Molestiae ea vel voluptas sequi sed fugiat quaerat?</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit culpa vel earum recusandae quaerat reiciendis amet asperiores deleniti repellat ex.</p>
    </div>
    
</div>

<div className="shop-head-master">
    <h1>MEET THE MASTERS</h1>
</div>


<div className="shop-masters">
    <div className="master">
        <img src="./images/ralph edwards.jpg" alt=""></img>
        <h3>RALPH EDWARDS</h3>
        <p>TOP BARBER</p>
    </div>
    
    <div className="master">
        <img src="./images/marvin.jpg" alt=""></img>
        <h3>MARVIN MCKINNEY</h3>
        <p>HAIR STYLIST</p>
    </div>

    <div className="master">
        <img src="./images/albert.jpg" alt=""></img>
        <h3>ALBERT FLORES</h3>
        <p>BARBER</p>
    </div>

</div>

</section>

<section className="our-works">

<h1 className="shop-head-works">OUR WORKS</h1>

<div className="our-works-images">
    <img src="./images/our-works-1.jpg" alt=""></img>
    <img src="./images/our-works-2.jpg" alt=""></img>
    <img src="./images/our-works-3.jpg" alt=""></img>
    <img src="./images/our-works-4.jpg" alt=""></img>
</div>

</section>


<section className="about-us">


<div className="clients-comment">

    <h1>WHAT OUR CLIENTS SAY ABOUT US</h1>

    <div className="clients-comment-paragraphs">
        
        <div className="clients-comment-paragraph">
            <img src="./images/user-1.jpg" alt="user-1"></img>
            <div className="comment-paragraph-content main-paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid quo commodi temporibus ad, non doloremque molestiae aut asperiores tempore.</p>
                <h6>FLOYED MILES</h6>
            </div>

        </div>

        <div className="clients-comment-paragraph">
           <img src="./images/user-2.jpg" alt="user-2"></img>
            <div className="comment-paragraph-content main-paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid quo commodi temporibus ad, non doloremque molestiae aut asperiores tempore.</p>
                <h6>ESTHER HOWARD</h6>
            </div>
            
        </div>

    </div>

</div>    

</section>


<section className="ready-to-transform">

<h1>READY TO TRANSFORM?</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis earum ipsum error amet, iusto aut tempora numquam facilis alias eum!</p>
<a href="#" style={{"backgroundColor":"red"}} className="second-btn">BOOK NOW</a>

{/* <button className='btn btn-primary'>BOOK NOW</button> */}
</section>
    </>
  )
}

export default About