import "./topbar.css";

export default function Topbar(){
  return (
    <div className="top">
      <div className="topLeft">
        <img className="iconImg" src="https://wallpapers.com/images/hd/letter-u-with-vines-hebq1dnln7nsc1z9.jpg" alt=""/>
        <h className="heading1">UBeauty</h>
      </div>
      <div className="topCenter">
        <ul className="topList">
        <li className="topListItem">Home</li>
        <li className="topListItem">SkinCare</li>
        <li className="topListItem">HairCare</li>
        <li className="topListItem">Ask Expert</li>
        <li className="topListItem">Write</li>
        </ul>
        </div>
      <div className="topRight">         
        <img className="topImg" src="https://i.pinimg.com/564x/97/bb/fc/97bbfc02c3a801b42673d99b4c93d3d2.jpg" alt=""/>
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}