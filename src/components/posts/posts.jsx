import Post from "../post/post";
import "./posts.css";

export default function Posts(){
  return(
    <div className="postsContent">
    <span className="postHead">LATEST ARTICLE</span>
      <div className="posts">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}