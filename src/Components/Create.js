import React from "react";
import { FcGoogle, } from 'react-icons/fc';
import { BsGithub, } from 'react-icons/bs';
import { MdAlternateEmail,MdFingerprint } from 'react-icons/md';

const Create = () => {

    return (
        <>
            <div className="contain">
                <div className="minheight">
                    <div className="image">
                        <img src="Image/img-web-mobile-app-dev.jpg"></img>
                    </div>
                    <div className="content">
                        <h2>Explore</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique itaque beatae iste. </p>
                        <form>
                            <div className="positionicon">
                                <input type="email" name="email" placeholder="Email"></input>
                                <div className="iconposition">                                
                                <MdAlternateEmail />
                                </div>

                                <br></br>
                            </div>
                            <div className="positionicon">
                            <input type="password" name="pass" placeholder="Password"></input>
                            <div className="iconposition">
                            <MdFingerprint/>
                            </div>
                            <br></br>
                            </div>
                            <button type="button" name="btn">Login</button>
                            <div className="positionicon">
                                <span clasName="span">Sign in whith Google </span>
                                <div className="iconposition">
                                    <FcGoogle />
                                </div>
                            </div>
                            <div className="positionicon">
                                <span clasName="span">Sign in with Github </span>
                                <div className="iconposition">
                                    <BsGithub />
                                </div>
                            </div>
                            <p>don't have an account yet? <b>Sign Up</b></p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create