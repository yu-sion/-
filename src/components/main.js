import React,{ useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "../Css/Main.css";
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
            num: e.target.usrId.value,
            job: e.target.job.value,
            phoneNum: e.target.phoneNumber.value 
        }) 
        console.log(userData)
        history.push('home')
    }
    useEffect(()=>{
        console.log(userData)
    },[userData])

    const usrName = userData.Fs.sd;
    const email = userData.Fs.lt;
    
    return (
        <div className="Main_Body">
            <div className="Main_Form">
                <div className="Main_Form_Value">
                    <form id='test' onSubmit={handleData} >
                    <table className="Main_inputTable">
                        <tbody>
                            <tr>
                                <td> 이름 </td>
                                <td> <input type="text" name="name" defaultValue={usrName}/> </td>
                            </tr>
                            <tr>
                                <td> 이메일 </td>
                                <td> <input type="text" name="email" value={email} /> </td>
                            </tr>
                            <tr>
                                <td> 학번 </td>
                                <td> <input type="number" 
                                            name="usrId" 
                                            placeholder="학번은 7자리 입니다." 
                                            required/> </td>
                            </tr>
                            <tr>
                                <td> 직업 </td>
                                <td> <div>
                                    <input type="radio" name="job" id="teacher" value="교수님"/>
                                    <label htmlFor="teacher" > 교수님 </label>
                                    <input type="radio" name="job" id="student" value="학생"/>
                                    <label htmlFor="student" > 학생 </label>
                                </div> </td>
                            </tr>
                            <tr>
                                <td> 전화번호 </td>
                                <td> <input type="number" name="phoneNumber" placeholder="전화번호를 입력해 주세요." required></input> </td>
                            </tr>
                            <tr>
                                <td colSpan="2"> <button> 로그인 </button> </td>
                            </tr>
                        </tbody>
                    </table>
                    </form>
                </div>
            </div>
        </div>
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
