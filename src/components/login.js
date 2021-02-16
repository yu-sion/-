import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import "../Css/Login.css";
import { response } from 'express';

function SigninPage({setUserData}) {
    const [isLogin, setIsLogin] = useState(false)

    const responseGoogle = (response) => {    
        if(response){
            setUserData(response)
            setIsLogin(true)

        }

    };
    // 백과의 통신 부분 
     

    return (
        <div className="Login_Main">
            <div className="Login_Frame"> 
                <div className="Login_Logo"> <p> 新塾 </p> </div>
                <div className="Login_Btn_Frame"> 
                    <div className="Login_Btn">
                        <GoogleLogin
                            clientId="1098599664574-dks3nufmqlqommmrd79k205n76ttp8o4.apps.googleusercontent.com"
                            buttonText="GoogleLogin"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'} 
                        />
                        {isLogin ? <Redirect to={'/main'} />:<></>}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default SigninPage;


const Login_Btn = styled.div`
     display: flex;
     position: fixed;
     left:800px;
     top: 50px;
 `