import "./post.css";
export default function Post(){
  return (
    <div className="post">
      
     <img className="postImg" src="https://images.pexels.com/photos/6422025/pexels-photo-6422025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
     <div className="postInfo">
  <span className="postCat">SKINCARE</span>
    <span className="postTitle">How to use Honey for skin</span>
    <span className="postDate">12 min ago</span>
     </div> 
    </div>
  );
}