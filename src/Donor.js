import React, {useEffect} from 'react'
import data from "./data";
import ReactList from 'react-list';
import alert from "sweetalert";
import {Line} from 'rc-progress';

const Donor = () => {

  const percentageTop3colors = () => {
  const percentage = document.querySelectorAll(".percentage");
  percentage[0].style.color = "#fdd017";
  percentage[1].style.color = "#b6afa9";
  percentage[2].style.color = "#b87333";
  }
  

  const winner = (donor) => {
    if(donor.current_donation_amount === 1000) {
    alert(`Congartulations, ${donor.name}! You have reached your pledge goal of $1000!`);
  }};

  const todayDate = new Date().toLocaleDateString();
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  if(today.getMinutes() < 10) {
    document.getElementsByClassName('today__time').innerHTML = "0" + today.getMinutes();
  }

 setTimeout(() => {
  window.location.reload(renderItems(), time);
    console.log("timeout is working"); 
  }, 60000);

  
 const renderItems = () => {
  
  return (
    data.map((donor, index, time) => (
      donor.percentage = Math.floor(Math.abs(donor.current_donation_amount/donor.donation_goal_amount).toFixed(2) * 100),
      winner(donor),
      <>
      <div className="parent">
      <div className="donor__container" key={index}>
        <div className= "donor__profile">
      <img className="image" src={donor.img} alt={"A picture of the donor" + {index}}/>
    <div className="info__container">
      <h2 className="donor__name" >{donor.name}</h2>
      <h4 className="specie__name">{donor.specie}</h4>
    </div>
    </div>
    <div className="donation__container ">
      <h2 className="percentage">{donor.percentage}</h2>
      <div className="amounts" >
        <p className="amounts__text current__amount" >{donor.current_donation_amount}</p>
        <p className="of__text">of</p>
        <p className="amounts__text goal__amount">{donor.donation_goal_amount}</p>
      </div>
    </div>
    </div>
    <Line className="progressBar" percent={donor.percentage} strokeWidth="1.5" strokeColor="skyblue" trailWidth="100"strokeLinecap="square"/>
    </div>
    </>
  ))
)}


useEffect(()=> {
  data.sort((a,b) => {
    return b.current_donation_amount - a.current_donation_amount; 
  });
  percentageTop3colors();
}, []);

return (
  <div>
    <h1 className="header">Leaderboard</h1>
      <div className="date">
        <p className="date__text"> as of </p>
      <h5 className ="today__date">{todayDate}</h5>
      <h4 className= "today_time">{time}</h4>
      </div>
      <ReactList
        itemRenderer={renderItems}
        length={1}
        type="uniform"
        minSize={5}
        pageSize={6}
      />
  </div>
);
}
export default Donor;