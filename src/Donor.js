import React, {useEffect, useMemo, useState} from 'react'
import data from "./data";
import ReactList from 'react-list';
import alert from "sweetalert";
import {Line} from 'rc-progress';







const Donor = () => {
  const [list, setList ] = useState(data);
  const percentageTop3colors = () => {
    const progress = document.querySelectorAll(".progressBar");
  const topThreePlaces = document.querySelectorAll(".donor__container");
    const percentage = document.querySelectorAll(".percentage");
    
    console.log(progress);
 
    topThreePlaces[0].style.boxShadow = "2px 2px 6px black";

    percentage[0].style.color = "#fdd017";
    percentage[1].style.color = "#b6afa9";
    percentage[2].style.color = "#b87333";

    progress[0].style.boxShadow = "2px 2px 6px black";
  }



  // Memoization
  const header = ['Leaderboard'];
  const title = useMemo(() => header[0]);
  

  const reachDonationGoal =(donor) => {
      if(donor.current_donation_amount === 1000) {

        alert(`Congratulations, ${donor.name}! You are the first donor to reach your pledge goal of $1000!`);
      
       setTimeout(() => {
        removeDonor();
         console.log(`${donor.name} is removed`);
       }, 5000);
      }

    
  };

  const removeDonor = (item)  => {
    console.log(item);
    const newList = list.filter((item) => item.current_donation_amount !==  1000);
    console.log("New List", newList)
    setList(newList);
  }






  

  const todayDate = new Date().toLocaleDateString();
  const today = new Date();
  const hour = ('0'+today.getHours()).slice(-2)
  const mins = ('0'+today.getMinutes()).slice(-2);
  const time = hour + ":" + mins;
  document.getElementsByClassName('today__time').innerText = time;


 setTimeout(() => {
  window.location.reload(renderItems(), time);
    console.log("timeout is working"); 
  }, 60000);

  
 const renderItems = () => {
  
  return (
    list.map((donor, index, time) => (
      donor.percentage = Math.floor(Math.abs(donor.current_donation_amount/donor.donation_goal_amount).toFixed(2) * 100),
      reachDonationGoal(donor),
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
    <Line className="progressBar" 
        percent={donor.percentage} 
        strokeWidth="2" 
        strokeColor="skyblue" 
        trailColor = "grey"
        trailWidth={donor.percentage}
        strokeLinecap="butt"
        gapPosition="bottom"
        
        />
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
  
  <div class="header-container">
    <h1 className="header">{title}</h1>
      <div className="date">
        <p className="date__text"> as of </p>
      <h5 className ="today__date">{todayDate}</h5>
      <h4 className= "today_time">{time}</h4>
      </div>
      <ReactList
        itemRenderer={renderItems}
        length={1}
        type="uniform"
        minSize={1}
        pageSize={6}
      />
  </div>
);
}
export default Donor;