import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';

function SigninPage({setUserData}) {
    const [isLogin, setIsLogin] = useState(false)

    const responseGoogle = (response) => {
    
        
        if(response){
            setUserData(response)
            setIsLogin(true)
        }
        
    };

    return (
        <SignInContainer>
            <Container>
                <ContainerBody>
                    <GoogleLogin
                        clientId="1098599664574-dks3nufmqlqommmrd79k205n76ttp8o4.apps.googleusercontent.com"
                        buttonText="GoogleLogin"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'} 
                        />
                    {isLogin ? <Redirect to={'/main'} />:<></>}
                </ContainerBody>
            </Container>
        </SignInContainer>
    );
}


export default SigninPage;

const SignInContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

const Container = styled.div`
  width: 300px;
  height: 200px;
`

// const ContainerTop = styled.div`
//     background-color: white;
//     border: none;
//     text-align:center;
// `

const ContainerBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100px;
`