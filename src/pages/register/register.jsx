import "./register.css";


export default function Register(){
  return(
    <div className="register">
    <span className="registerTitle">Register</span>
     <form className="registerForm">
       <label>Name</label>
       <input type="text" className="registerInput" placeholder="Enter your Name.."/> 
     <label>Email</label>
      <input type="text" className="registerInput" placeholder="Enter your email.."/> 
       <label>Password</label>
       <input type="text" className="registerInput" placeholder="Enter your password.."/> 
       <label>Confirm Password</label>
        <input type="text" className="registerInput" placeholder="Enter your password.."/> 
      
       <button className="registerButton"><a href="/">Register</a></button>
     </form>
      <button className="registerLoginButton"><a href="/login">Login</a></button>
    </div> 
  );
}