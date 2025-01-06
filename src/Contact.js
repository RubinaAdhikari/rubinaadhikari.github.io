import './App.css';
import React from 'react';
import './Contact.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>

<div className='icon'>
       <div className='linkedin'>
           <a href='https://www.linkedin.com/in/rubina-adhikari-1724612a0/' target='blank'>
            <FaLinkedin size="35" />
            </a>
        </div>
            
            <div classname='Github'>
                <a href='https://github.com/' target='blank'>
                  <FaGithub size="35"/>
                </a>
            </div>
            </div>
            
           
        </section>
    );
}