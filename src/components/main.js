import React,{ useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import queryString from 'query-string'

   
function MainPage({userData, setUserData}) {
    const history = useHistory(); 
    const handleData = (e)=>{
        e.preventDefault()
        setUserData({
            ...userData,
            name: e.target.name.value,
            email : e.target.email.value,
            num: e.target.num.value,
            job: e.target.job.value,
            phoneNum: e.target.phoneNum.value
            
        }) 
        history.push('home')
    }
    useEffect(()=>{
        console.log(userData)
    },[userData])
    
    return (
        <form id='test' onSubmit={handleData} >
            이름 <input type="text" 
                name='name'
                defaultValue={userData.Fs.sd}/> <br/>
            이메일<input type="text" 
                name = 'email' 
                value={userData.Fs.lt}/> <br/>
            학번 <input type="text"  
                name = 'num'
                placeholder={'학번은 7자리 숫자입니다.'}/> <br/>
            직업<label><input type="radio" 
                name='job' 
                value="teacher" />교수님</label>
                <label><input type="radio" 
                name='job' 
                value="student"  />학생</label> <br/>
            전화번호 <input type="text" name='phoneNum' 
                    placeholder={'전화번호는 숫자만 입력해주세요.'}/> <br/>
            <button>로그인</button>
        </form>
        );
}


export default MainPage;

// const SignInContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
// `

// const Container = styled.div`
//   width: 300px;
//   height: 200px;
// `

// const ContainerTop = styled.div`
//     background-color: white;
//     border: none;
//     text-align:center;
//  `
