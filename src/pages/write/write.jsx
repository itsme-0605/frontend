import "./write.css";
export default function Write(){
  return(
  <div className="write">
  <form className="writeForm">
  <div className="writeFormGroup">
    <label htmlFor="fileInput">
        <i class="writeIcon fa-solid fa-plus"></i>
      </label>
     <input type="file" id="fileInput" style={{display:"None"}}/>
     <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
    </div>    
    <div className="writeFormGroup">
      <textarea type="text" placeholder="Share your beauty secrets..." className="writeInput writeText" autoFocus={true}/>
       </div> 
    <button className="writeSubmit">Publish</button>
  </form>
  </div>  
  );
}