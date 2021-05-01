import React, {useEffect} from 'react'
import data from "./data";
import ReactList from 'react-list';

const Donor =() => {

  console.log(data[0]);

  console.log(Object.values(data));
  

 const renderItems = () => {
  
  return (
    data.map((donor, index) => (
      data.sort((a,b) => {
        return b.current_donation_amount - a.current_donation_amount
      }),
      // donationAmount = Math.ceil(Math.abs(Math.random() * donor.donation_goal_amount - donor.current_donation_amount)),
      // percentage = Math.ceil(Math.abs(donationAmount/donor.donation_goal_amount).toFixed(2) * 100),
      <>
      <div className="donor__container" key={index}>{donor.sor}
        <div className= "donor__profile">
      <img className="image" src={donor.img} alt=""/>
    <div className="info__container">
      <h2 className="donor__name" >{donor.name}</h2>
      <h4 className="specie__name">{donor.specie}</h4>
    </div>
    </div>
    <div className="donation__container ">
      <h2 className="percentage">{donor.percentage}</h2>
      <div className="amounts" >
        <p classname="amounts__text current__amount" >{donor.current_donation_amount}</p>
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
        minSize={data.length}
        pageSize={data.length}
      />
    </div>
  </div>
);
}
export default Donor;