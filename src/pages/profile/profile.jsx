import "./profile.css";
import Sidebar from "../../components/sidebar/sidebar";

export default function Profile(){
  return(
    <div className="profile">
      <div className="profileWrapper">
      <div className="profileTitle">
        <span className="profileTitleUpdate">Update Account</span>
        <span className="profileTitleDelete">Delete Account</span>
      </div>
        <form className="profileForm">
          <label>Profile Picture</label>
          <div className="profilePicture">
            <img
        src="https://i.pinimg.com/564x/97/bb/fc/97bbfc02c3a801b42673d99b4c93d3d2.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profileIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="profileInput"
            />
          </div>
          <label>Username</label>
          <input type="text" className="profileEnter" placeholder="kajal" name="name" />
          <label>Email</label>
          <input type="email" className="profileEnter" 
 placeholder="kajal@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" className="profileEnter"  placeholder="Password" name="password" />
          <button className="profileSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar/>
      </div>  
  );
}