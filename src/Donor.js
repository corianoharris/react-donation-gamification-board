import React, {useEffect} from 'react'
import data from "./data";
import ReactList from 'react-list';

const Donor = () => {

  const percentageTop3colors = () => {
  const percentage = document.querySelectorAll(".percentage");
  percentage[0].style.color = "#fdd017";
  percentage[1].style.color = "#b6afa9";
  percentage[2].style.color = "#b87333";
  }
useEffect(()=> {
  data.sort((a,b) => {
    return b.current_donation_amount - a.current_donation_amount; 
  });
  percentageTop3colors();
}, []);



 const renderItems = () => {
  
  
  return (
    data.map((donor, index) => (
      <>
      <div className="donor__container" key={index}>
        <div className= "donor__profile">
      <img className="image" src={donor.img} alt={"A picture of the donor" + {index}}/>
    <div className="info__container">
      <h2 className="donor__name" >{donor.name}</h2>
      <h4 className="specie__name">{donor.specie}</h4>
    </div>
    </div>
    <div className="donation__container ">
      <h2 className="percentage">{Math.floor(Math.abs(donor.current_donation_amount/donor.donation_goal_amount).toFixed(2) * 100)}</h2>
      <div className="amounts" >
        <p className="amounts__text current__amount" >{donor.current_donation_amount}</p>
        <p className="of__text">of</p>
        <p className="amounts__text goal__amount">{donor.donation_goal_amount}</p>
      </div>
    </div>
    </div>
    </>
  ))
)}


return (
  <div>
    <h1 className="header">Leaderboard</h1>
    <div>
      <ReactList
        itemRenderer={renderItems}
        length={1}
        type="uniform"
        minSize={5}
        pageSize={6}
      />
    </div>
  </div>
);
}
export default Donor;