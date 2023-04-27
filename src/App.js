
import './App.css';
import React from "react";
import Day from "./Day"
import './SidebarMenu.css';
//import SidebarMenu from "./SidebarMenu";

function App() {
  const [message,setMessage]=React.useState("");
  const [predicthumidity,setHumidity]=React.useState(null);
  const [predicttemp,setTemperature]=React.useState(null);
  const [predictpressure,setPressure]=React.useState(null);
  const [predicthumidity1,setHumidity1]=React.useState(null);
  const [predicttemp1,setTemperature1]=React.useState(null);
  const [predictpressure1,setPressure1]=React.useState(null);
  const [predicthumidity2,setHumidity2]=React.useState(null);
  const [predicttemp2,setTemperature2]=React.useState(null);
  const [predictpressure2,setPressure2]=React.useState(null);
  const [days, setDays] = React.useState(null);

  function SidebarMenu(){
    return(
       <div className="sidebar">
       <a href="#home" onClick={App}><i className="fa fa-home"></i> Home</a>
       <br />
       <a href="#1day" onClick={()=>{setDays(1)}}><i className="fa fa-calendar"></i> 1 day</a>
       <br />
       <a href="#2day" onClick={()=>{setDays(2)}}><i className="fa fa-calendar"></i> 2 days</a>
       <br />
       <a href="#3day" onClick={()=>{setDays(3)}}><i className="fa fa-calendar"></i> 3 days</a>
       </div>
    );
  }

  function Weatherinfo(event){
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };


  function Fetchfunc(){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${message}&APPID=6557810176c36fac5f0db536711a6c52`)
      .then((res)=>res.json())
      .then((data)=>{
             setHumidity(data.list[0].main.humidity);
             setTemperature(data.list[0].main.temp_kf);
             setPressure(data.list[0].main.pressure);
             setHumidity1(data.list[7].main.humidity);
             setTemperature1(data.list[7].main.temp_kf);
             setPressure1(data.list[7].main.pressure);
             setHumidity2(data.list[15].main.humidity);
             setTemperature2(data.list[15].main.temp_kf);
             setPressure2(data.list[15].main.pressure);
             console.log(data);
  });
}

  return (
    <div className="App">
        <header  className="App-header">
        <SidebarMenu />
        <box border="1" id="table">
        <h1 className="header1" align="center">Weather Forecast</h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div align="center">
        <input className="inputtype" type="text" placeholder="Search.." name="search2" value={message} onChange={Weatherinfo}></input>
        <button type="submit" onClick={Fetchfunc}><i className="fa fa-search"></i></button>
        </div>
        </box>
        <br />
        <div className="container0">
          {days && <Day value={days} predicthumidity={predicthumidity} predicthumidity1={predicthumidity1} predicthumidity2={predicthumidity2} predictpressure={predictpressure} predictpressure1={predictpressure1} predictpressure2={predictpressure2} predicttemp={predicttemp} predicttemp1={predicttemp1} predicttemp2={predicttemp2} />}
        </div>
        </header>
    </div>
);
}
export default App;

