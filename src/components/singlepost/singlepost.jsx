import "./singlepost.css";

export default function Singlepost(){
  return(
    <div className="singlepost">
      <div className="singlePostWrapper">
        <div className="singlePostHeader"> 
        <span className="singlePostTitle">How to use honey for skin
          </span>  
         <div className="singlePostEdit">   
          <i class="singlePostIconEdit fa-regular fa-pen-to-square"></i>
         <i class="singlePostIconDel fa-solid fa-trash-can"></i>
            </div> 
         <span className="singlePostAuthor">Author</span>
         <span className="singlePostDate">Date</span>
    </div>
      <img src="https://images.pexels.com/photos/6422025/pexels-photo-6422025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="singlePostImg"/> 
   
        <div className="singlePostContent">
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or an editorial production whose final text is not yet ready.
          This expedient serves to get an idea of the finished product that will soon be printed or disseminated via digital channels.

          In order to have a result that is more in keeping with the final result, the graphic designers, designers or typographers report the Lorem ipsum text in respect of two fundamental aspects, namely readability and editorial requirements.

          The choice of font and font size with which Lorem ipsum is reproduced answers to specific needs that go beyond the simple and simple filling of spaces dedicated to accepting real texts and allowing to have hands an advertising/publishing product, both web and paper, true to reality.

          Its nonsense allows the eye to focus only on the graphic layout objectively evaluating the stylistic choices of a project, so it is installed on many graphic programs on many software platforms of personal publishing and content management system.
        </p></div>
      </div>
    </div>
  );
}