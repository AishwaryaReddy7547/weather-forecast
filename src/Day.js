import React from "react";
// import SidebarMenu from "./SidebarMenu";
import "./App.css";

export default function Day(props){

  return (
    <div className="App">
     {/* <SidebarMenu /> */}
        <header  className="App-header">
        <br />
        <div className="container0">
        
        <div className="container1">
        <h3 align="center">Day 1</h3>
        {props.predicthumidity && <h6 align="center"><img src="humidityimg.png" alt="humiditygif" id="humiditygif" />Humidity:{props.predicthumidity} g.m-3</h6>}
        {props.predicttemp &&  <h6 align="center"><img src="temperatureimg.png" alt="temperaturegif" id="humiditygif" />Temperature:{props.predicttemp} C</h6> }
        {props.predictpressure &&  <h6 align="center"><img src="pressureimg.png" alt="pressuregif" id="humiditygif" />Pressure:{props.predictpressure} pa</h6> }
        </div>
        
        {props.value>1 && <div className="container1">
        <h3 align="center">Day 2</h3>
        {props.predicthumidity1 && <h6 align="center"><img src="humidityimg.png" alt="humiditygif" id="humiditygif" />Humidity:{props.predicthumidity1} g.m-3</h6>}
        {props.predicttemp1 &&  <h6 align="center"><img src="temperatureimg.png" alt="temperaturegif" id="humiditygif" />Temperature:{props.predicttemp1} C</h6> }
        {props.predictpressure1 &&  <h6 align="center"><img src="pressureimg.png" alt="pressuregif" id="humiditygif" />Pressure:{props.predictpressure1} Pa</h6> }
        </div>}
       
        {props.value>2 && <div className="container1">
        <h3 align="center">Day 3</h3>
        {props.predicthumidity2 && <h6 align="center"><img src="humidityimg.png" alt="humiditygif" id="humiditygif" />Humidity:{props.predicthumidity2} g.m-3</h6>}
        {props.predicttemp2 &&  <h6 align="center"><img src="temperatureimg.png" alt="temperaturegif" id="humiditygif" />Temperature:{props.predicttemp2} C</h6> }
        {props.predictpressure2 &&  <h6 align="center"><img src="pressureimg.png" alt="pressuregif" id="humiditygif" />Pressure:{props.predictpressure2} Pa</h6> }
        </div>}
        </div>
        </header>   
    </div>   
);
}