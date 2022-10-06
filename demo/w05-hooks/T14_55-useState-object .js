import React, { useState } from 'react';

const T14_55_UseStateObject = () => {
  const [person ,setPerson] = useState({
    name:'蔡武勳',
    age: 19 ,
    message:'random message'
  });

  const changeMessage = () => {
    setPerson({...person, message:'蔡武勳 , 210410055'});
  }
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button className="btn" onClick={changeMessage}>change Message</button>
  </>
};

export default  T14_55_UseStateObject;
