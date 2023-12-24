import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Hello beautiful ladies!!</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/zero-waste-beauty-products_23-2149304150.jpg?w=1060&t=st=1701767861~exp=1701768461~hmac=e0473ec6602aa2922c48840b0a2a72375e50f9ce4b1fd07259e1253d12d61892"
        alt=""
      />
    </div>
  );
}