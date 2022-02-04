import React from 'react';
import './main.css';
import MenuitemContainer from '../../components/MenuitemContainer';

export default function Main(props) {

  return (
    <div>
      <MenuitemContainer className="maincontainer" itemData={props.data} addtocart={props.addtocart} type={props.type}/>
    </div>
  );
}