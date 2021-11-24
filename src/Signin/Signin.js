import { useRef, useState } from 'react';
import { logout, login, signup, useAuth} from '../firebase';
import React, { Component } from 'react'
export default function Signin() {
        //Function loading and check
        const [ loading, setLoading ] = useState(false); 
        const currentUser = useAuth();
        const emailRef = useRef();
        const passwordRef = useRef();
        //sigin up fun
        async function handleSignup(){
            setLoading(true);
            try{
                await signup(emailRef.current.value, passwordRef.current.value)
                }catch{
                    alert("error^_^......please try again");
            }
            setLoading(false);
        }
        //login fun
        async function handlelogin(){
            setLoading(true);
            try{
                await login(emailRef.current.value, passwordRef.current.value)
                }catch{
                    alert("Error!");
            }
            setLoading(false);
        }
        
        //logout fun
        async function handlelogout() {
        setLoading(true);
        try {
            await logout();
         } catch {
            alert("Error!");
        }
        setLoading(false);
    }
        return (
            <div className="form">
                <div className="form-groub">
                    <label>Email </label>
                    <input ref={emailRef} type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-groub">
                    <label>Password</label>
                    <input ref={passwordRef} type="password" className="form-control" placeholder="Password"/>
                </div>
                <button className="btn btn-priymary btn-block" disabled={loading || currentUser } onClick={handleSignup} >Sign Up</button>
                <button className="btn btn-priymary btn-block" disabled={loading || currentUser } onClick={handlelogin}>Log In</button>
                <button className="btn btn-priymary btn-block" disabled={loading || !currentUser } onClick={handlelogout}>Log Out</button>
                <hr/><span>Currently logged in as: <span className="mail">{ currentUser?.email }</span></span>
            </div>
        )
    }


