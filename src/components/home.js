import React from 'react'

function home({userData}) {
    console.log(userData)
  return (
    <div>
      <p>{userData.name}님의 정보</p><br />
      <p>Email : {userData.email}</p><br />
      <p>학번 : {userData.num}</p><br />
      <p>Job : {userData.job}</p><br />
      <p>phone : {userData.phoneNum}</p><br />
    </div>
  );
}

export default home;
