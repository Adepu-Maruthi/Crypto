import React from 'react'
import '../App.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";




const FlipCards = () => {
    return (
        <div>
            <h1 className='text-white text-center p-5'>Our Team</h1>
           <div className="container d-flex justify-content-around flex-wrap ">
           <div className="wrapper mb-5">
                <div className="card front-face ">
                    <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div className="card back-face">
                    <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    <div className="info">
                        <div className="title">
                            CodingLab</div>
                        <p>
                            User interface designer and <br />front-end developer</p>
                    </div>
                    <ul>
                        
                        <a href=""><FaGithub className='text-dark'/></a>
                        <a href=""><CiLinkedin className='text-dark'/></a>
                        <a href=""><CiFacebook className='text-dark'/></a>
                        <a href=""><FaInstagram className='text-dark'/></a>
                    </ul>
                </div>
            </div>

            <div className="wrapper">
                <div className="card front-face">
                    <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div className="card back-face">
                    <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    <div className="info">
                        <div className="title">
                            CodingLab</div>
                        <p>
                            User interface designer and <br />front-end developer</p>
                    </div>
                    <ul>
                       
                    <a href=""><FaGithub className='text-dark'/></a>
                        <a href=""><CiLinkedin className='text-dark'/></a>
                        <a href=""><CiFacebook className='text-dark'/></a>
                        <a href=""><FaInstagram className='text-dark'/></a> </ul>
                </div>
            </div>

            <div className="wrapper">
                <div className="card front-face">
                    <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div className="card back-face">
                    <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    <div className="info">
                        <div className="title">
                            CodingLab</div>
                        <p>
                            User interface designer and <br />front-end developer</p>
                    </div>
                    <ul>
                       
                    <a href=""><FaGithub className='text-dark'/></a>
                        <a href=""><CiLinkedin className='text-dark'/></a>
                        <a href=""><CiFacebook className='text-dark'/></a>
                        <a href=""><FaInstagram className='text-dark'/></a> </ul>
                </div>
            </div>
           </div>

        </div>
    )
}

export default FlipCards
