import React, { useState, useRef } from 'react';
import classes from '../SignUp/Sign_up.module.css'
import loginImg from '../../Assets/loginImg.svg'
import profileImg from '../../Assets/profileIcon.svg'


function Sign_Up() {

    return (
        <div className={classes.general}>
            <div className={classes.imgSpace}>
                <img src={loginImg} className={`${classes.LoginImg} ${classes.noScale}`} />
            </div>
            <div className={classes.inputField}>

                <h2>HRM</h2>

                <div className={classes.Inpcontaer}>
                    <h4>SIGN UP</h4>
                    <p>SIgn up as an employee or an HR manager</p>


                    <div className={classes.inputContainer}>
                        <img src={profileImg} />
                        <div>
                            <h5>HR MANAGER</h5>
                            <p>Manage your company staff with custom made tools for your company </p>
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <img src={profileImg} />
                        <div>
                            <h5>Employee</h5>
                            <p>Join your team, be in the loop of your company activities </p>
                        </div>
                    </div>
                    <button className={classes.loginBtn}>Continue</button>

                </div>
            </div>
        </div>
    )
}
export default Sign_Up;