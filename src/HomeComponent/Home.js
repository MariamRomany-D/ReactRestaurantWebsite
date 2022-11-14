import React, { Fragment } from "react";
import Header from "./Header";
import prid from './../assets/5.png';
import make from './../assets/4.png';
import Data from "../Data";

import {Carousel , Form} from 'react-bootstrap';
import female from './../assets/femal.jpg';
import male from './../assets/male.jpg';



const HomePage = () => {
// ----------------------------------blogsSection :-
const blogItems = Data.map((item)=>{
    return (
    <div className="col-lg-4 col-md-6 col-sm-12">
        <img src={item.img} alt="" />
        <h3>{item.title}</h3>
        <span>Time: {item.time}</span>
        <h4>{item.price} <del>{item.delPrice}</del> </h4>
        <hr/>
        <button>Order now</button>
    </div>
    )
 } )


    return ( 

    <Fragment>

        <Header></Header>
            <section className="numbers">
            <div className="container">
                    <div className="row">
                        <div className=" col-lg-3 col-md-6 col-sm-12">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
{/* ------------------ */}
            <section id="Pride" className="Pride">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                          <img src={prid} alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 caption">
                          <h2>We pride ourselves on making real food from the best ingredients.</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
                          <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>
{/* ------------------ */}
            <section className="weMake">
               <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 caption">
                       <h2>We make everything by hand with the best possible ingredients.</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                     <img src={make} alt="" />
                    </div>
                </div>
               </div>
            </section>
{/*----------------  */}
            <section id="Foods" className="senaB">
                 <div className="container">
                    <div className="row">                       
                        <div className="col-md-12">
                            <h2>When a man's stomach is full it makes no
                            difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button>Watch our story</button>
                        </div>
                    </div>
                 </div>
            </section>
{/*----------------  */}
            <section className="blogs">
               <div className="container">
                <div className="row Caption">
                   <div className="col-md-12">
                    <h2>Explore Our Foods</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo.
                         Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                         there live the blind texts. Separated they live in Bookmarksgrove.</p>
                   </div>
                </div>
                <div className="row blogImg">
                    {blogItems} 
                    {/* imp */}
                </div>
               </div>
            </section>
{/*----------------  */}
            <section id="Reviews" className="slideShow">
               <h2>Testimonials</h2>
               <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <Carousel>
                    <Carousel.Item>
                        <img src={female} />
                        <Carousel.Caption>
                        <p>"Far far away, behind the word mountains, there live the blind texts. "</p>
                        <span class="author">Maccy Doe - Front End</span>                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={male} />
                        <Carousel.Caption>
                        <p>"Far far away, behind the word mountains, there live the blind texts. Separated they live."</p>
                        <span class="author"> Simab Dave-Web Designer</span>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                    </div>
                </div>
               </div>
            </section>
{/*----------------  */}
            <section id="FAQ" className="Question">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <h3> <span>~</span> Is Foodera Bread really baked fresh each day?</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <h3><span>~</span> Do you bake breads containing animal fats or products?</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <h3><span>~</span> Can I order your products online?</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <h3><span>~</span> When are you opening a shop near me?</h3>
                          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                </div>
            </section>
{/*----------------  */}
            <section className="dailyBaked">
              <div className="opacity">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                           <h3>Baked fresh daily by bakers with passion.</h3>
                        </div>
                        <div className="col-md-6 col-sm-12">
                             <button>Learn More</button>
                        </div>
                    </div>
                </div>
              </div>
            </section>
{/*----------------  */}
            <section className="HarryUp">
                <div className="container">
                    <h5>Hurry up! Subscribe our newsletter and get 25% Off</h5>
                    <h6>Limited time offer for this month. No credit card required.</h6>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <Form.Group className="mb-3 inp" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3 inp" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <button>Learn More</button>   
                        </div>
                    </div>
                </div>
            </section>
    </Fragment>
     );
}
 
export default HomePage;