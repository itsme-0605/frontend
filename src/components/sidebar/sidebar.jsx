import "./sidebar.css";

export default function Sidebar(){
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About the brand</span>
        <img
          src="https://images.everydayhealth.com/images/what-are-natural-skin-care-products-alt-1440x810.jpg?sfvrsn=616dd3f2_1"
          alt=""/>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>   
       <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
      
      </div>
  );
}