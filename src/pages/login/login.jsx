import "./login.css";


export default function Login(){
  return(
    <div className="login">
    <span className="loginTitle">Login</span>
     <form className="loginForm">
     <label>Email</label>
      <input type="text" className="loginInput" placeholder="Enter your email.."/> 
       <label>Password</label>
       <input type="text" className="loginInput" placeholder="Enter your password.."/> 
       <button className="loginButton"><a href="/">Login</a></button>
     </form>
      <button className="loginRegisterButton"><a href="/register">Register</a></button>
    </div> 
  );
}