import React, { useEffect, useState } from "react";

const ColorPalette = () => {
  const [hexCode1, setHexCode1] = useState("#9B9BDA");
  const [hexCode2, setHexCode2] = useState("#9B9BDA");
  const [hexCode3, setHexCode3] = useState("#9B9BDA");
  const [hexCode4, setHexCode4] = useState("#9B9BDA");
  const [hexCode5, setHexCode5] = useState("#9B9BDA");
  const [hexCode6, setHexCode6] = useState("#9B9BDA");

  function getRandomHex() {
    const hexChars = '0123456789ABCDEF';
    let hex1 = '';
    let hex2 = '';
    let hex3 = '';
    let hex4 = '';
    let hex5 = '';
    let hex6 = '';

    for (let i = 0; i < 6; i++) {
      hex1 += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
      hex2 += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
      hex3 += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
      hex4 += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
      hex5 += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
      hex6 += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
    }

    const newHexCode1 = '#' + hex1;
    const newHexCode2 = '#' + hex2;
    const newHexCode3 = '#' + hex3;
    const newHexCode4 = '#' + hex4;
    const newHexCode5 = '#' + hex5;
    const newHexCode6 = '#' + hex6;
  

    setHexCode1(newHexCode1);
    setHexCode2(newHexCode2);
    setHexCode3(newHexCode3);
    setHexCode4(newHexCode4);
    setHexCode5(newHexCode5);
    setHexCode6(newHexCode6);

    console.log("color changed");
  }

  return (
    <>
        <div className="card-body">
          <div  className="card-title">
            <span style={{align:"center"}} className="grid grid-flow-col gap-4">
              <h1 style={{color:hexCode4}}>C</h1>
              <h1 style={{color:hexCode5}}>O</h1>
              <h1 style={{color:hexCode3}}>L</h1>
              <h1 style={{color:hexCode1}}>O</h1>
              <h1 style={{color:hexCode4}}>R</h1><br></br>
              <h1 style={{color:hexCode6}}>P</h1>
              <h1 style={{color:hexCode4}}>A</h1>
              <h1 style={{color:hexCode1}}>L</h1>
              <h1 style={{color:hexCode6}}>E</h1>
              <h1 style={{color:hexCode4}}>T</h1>
              <h1 style={{color:hexCode2}}>T</h1>
              <h1 style={{color:hexCode3}}>E</h1>
            </span></div>
          <span className="grid grid-flow-col">
            <div style={{ background: hexCode1 }} className="card w-20 h-60 shadow-xl"></div>
            <div style={{ background: hexCode2 }} className="card w-20 h-60 shadow-xl"></div>
            <div style={{ background: hexCode3 }} className="card w-20 h-60 shadow-xl"></div>
            <div style={{ background: hexCode4 }} className="card w-20 h-60 shadow-xl"></div>
            <div style={{ background: hexCode5 }} className="card w-20 h-60 shadow-xl"></div>
            <div style={{ background: hexCode6 }} className="card w-20 h-60 shadow-xl"></div>
          </span>
          <span className="grid grid-flow-col gap-10">
            <h1>{hexCode1}</h1>
            <h1>{hexCode2}</h1>
            <h1>{hexCode3}</h1>
            <h1>{hexCode4}</h1>
            <h1>{hexCode5}</h1>
            <h1>{hexCode6}</h1>
          </span>
          <div className="card-actions justify-end">
            <button onClick={getRandomHex} style={{color:hexCode2}}className="btn btn-block ">GENERATE RANDOM COLOR PALETTE</button>
          </div>
        </div>

    </>
  );
};

export default ColorPalette;
