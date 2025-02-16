import React from 'react';
import bgImage from '../../../assets/finance.gif';

const HomeScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     
      }}
    >
        <img src={bgImage} width={500} height={500}/>
    </div>
  );
};

export default HomeScreen;
