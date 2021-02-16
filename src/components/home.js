import React from 'react';
import { useHistory } from 'react-router-dom';
import "../Css/Home.css";

function ViewAddSub(){
  document.getElementsByClassName("Home_Content_addSubject")[0].style.display = "inline-block";
}

function SubjectPrt(props){
  const subList = props.subject;

  return (
    <div className="Home_subjectList">
      {
          subList.map( subject => (
             <div className="Home_subject"> {subject} </div>
         ))
      }
    </div>
  )
}

function InfoData({userData, setUserData}) {
  const data = userData;
  console.log(userData)
  const DataChange = (e)=>{
    e.preventDefault()
    setUserData({
        ...userData,
        name: e.target.name.value,
        email : e.target.email.value,
        num: e.target.usrId.value,
        phoneNum: e.target.phoneNumber.value 
    }) 
    console.log(userData)
  }
  <from className='input_info' onSubmit={DataChange}>
    <input type='text' name='name' defaultValue={userData.name} /> <br/>
      <input type='text' name='email'defaultValue={userData.email} /><br/>
      <input type='number' name='usrId' defaultValue={userData.num} /><br/>
      <input type='number' name='phoneNumber' defaultValue={userData.phoneNum} /><br/>
      <button> 수정하기 </button>
    <button> 취소 </button>
  </from>
}

function Home({ userData }) {
    const history = useHistory();
    const Logout = () => {
      return history.push('');
    }
    /*
        userData {
          name, email, num, job, phoneNum
        }
    */
    const usrData = userData;
    const subject = ['1', '2', '3'];
    var addSubject_input = "";

    const AddChange = (e) => {
      addSubject_input = e.target.value;
    }
      
    const AddSub = function (){
      const subjectList = subject;
      const addSubjectName = addSubject_input;
      document.getElementsByClassName("Home_Content_addSubject")[0].style.display = "none";
      subjectList.push(addSubjectName);

      document.getElementsById("subject").value = " ";

      console.log(subjectList);
    }

  return (
    <div className="Home_body">
      <div className="Home_Header"> 
        <div className="Home_Logo"> 新塾 </div>
        <div className="Home_bar">
          <div className="Home_userName"> {usrData.name} 님 </div>
          <div className="Home_option"> 
            <div className="Home_DataChange"> <button className="Home_change_Btn" onClick={InfoData}> 정보수정 </button> </div>
            <div className="Home_Logout"> <button className="Home_Logout_Btn" onClick={Logout}> 로그아웃 </button> </div>
          </div>
        </div>
        <div className="Home_DataChange_Click">  </div>
      </div>
      <div className="Home_Content"> 
        <div className="Home_Content_list_Subject"> 
           <div className="Home_Content_Option"> 
              <div className="Home_Content_Option_subCount"> {subject.length} </div>
              <div className="Home_Content_Option_addSub"> <button onClick={ViewAddSub}> 그룹추가 </button> </div>
            </div>
           <SubjectPrt subject={subject} />
         </div>
         <div className="Home_Content_addSubject"> 
             <div>  </div>
             <div> <h1>그룹명</h1> </div>
             <div> <input className="Home_addSubejct_input" 
                     onChange={AddChange} 
                     name="subject" 
                    id="subject"
                     size="40"
                     placeholder="과목명 또는 그룹 이름을 적어주세요."/> </div>
              <div> <button onClick={AddSub} > 추가 </button> </div>
          </div>
       </div>
     </div>
   );
 }

export default Home;
