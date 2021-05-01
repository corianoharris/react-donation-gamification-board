import React from 'react'
import data from "./data";
import ReactList from 'react-list';

const Donor =() => {

  console.log(data.length);
 
 const renderItems = () => {
  return (
    data.map((donor, index) => (
      <>
      <div className="donor__container" key={index}>
        <div className= "donor__profile">
      <img className="image" src={donor.img} alt=""/>
    <div className="info__container">
      <h2 className="donor__name" >{donor.name}</h2>
      <h4 className="specie__name">{donor.specie}</h4>
    </div>
    </div>
    <div className="donation__container ">
      <h2 className="percentage" >{donor.percentage}%</h2>
      <div className="amounts" >
        <p classname="amounts__text" >{donor.current_donation_amount}</p>
        <p className="of__text">of</p>
        <p className="amounts__text">{donor.donation_goal_amount}</p>
      </div>
    </div>
    </div>
    </>
  ))
)}
  
return (
  <div>
    <h1>Leaderboard</h1>
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