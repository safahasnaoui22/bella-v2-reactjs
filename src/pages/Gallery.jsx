import "./gallery.css";
import React from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = () => {
    const moveNext = () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    };

    const movePrev = () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    };




    

    return (
        <div className="gallery">
          

          <div className="gallery-container">
            <div className="slide">
                <div className="item" style={{ backgroundImage: `url(/MainRoom.jpg)` }}>
                    <div className="content">
                      
                        <div className="namegallery">
  <span className="letters" style={{ "--color": "#FF7F50" }}>R</span>
  <span className="letters" style={{ "--color": "#FF6347" }}>o</span>
  <span className="letters" style={{ "--color": "#FF4500" }}>o</span>
  <span className="letters" style={{ "--color": "#FF1493" }}>m</span>
  <span className="letters" style={{ "--color": "#1E90FF" }}>s</span>
</div>
                        <button className="seeMore"  > <a href="./roompic"> <span className="spangallery">See More</span></a> </button>
                    </div>
                </div>
                <div className="item"  style={{ backgroundImage: `url(/mainresto.jpg)` }}>
                    <div className="content">
                    
                      

                        <div className="namegallery">
  <span className="letters" style={{ "--color": "#FF7F50" }}>R</span>
  <span className="letters" style={{ "--color": "#FF6347" }}>E</span>
  <span className="letters" style={{ "--color": "#FF4500" }}>S</span>
  <span className="letters" style={{ "--color": "#FF1493" }}>T</span>
  <span className="letters" style={{ "--color": "#1E90FF" }}>A</span>
  <span className="letters" style={{ "--color": "#1E90F1" }}>U</span>
  <span className="letters" style={{ "--color": "#1E75FF" }}>R</span>
  <span className="letters" style={{ "--color": "#1E45FF" }}>E</span>
  <span className="letters" style={{ "--color": "#1E40FF" }}>N</span>
  <span className="letters"  style={{ "--color": "#FF7F50" }}>T</span>
  
</div>














                        <button className="seeMore"  > <a href="./Restaurentpic"> <span className="spangallery">See More</span></a> </button>
                    </div>
                </div>

                <div className="item" style={{ backgroundImage: `url(/generalview.jpg)` }}>
                    <div className="content">
                    <div className="namegallery">
  <span className="letters" style={{ "--color": "#FF7F50" }}>B</span>
  <span className="letters" style={{ "--color": "#FF6347" }}>E</span>
  <span className="letters" style={{ "--color": "#FF4500" }}>L</span>
  <span className="letters" style={{ "--color": "#FF1493" }}>L</span>
  <span className="letters" style={{ "--color": "#1E90FF" }}>A</span>

  
</div>
                    
                        <button className="seeMore"  > <a href="./Bellapic"> <span className="spangallery">See More</span></a> </button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(/Waterslides.jpg)` }}>
                    <div className="content">
                    <div className="namegallery">
  <span className="letters" style={{ "--color": "#FF7F50" }}>A</span>
  <span className="letters" style={{ "--color": "#FF6347" }}>Q</span>
  <span className="letters" style={{ "--color": "#FF4500" }}>U</span>
  <span className="letters" style={{ "--color": "#FF1493" }}>A</span>
 

  
</div>
                        <button className="seeMore"  > <a href="./Aquapic"> <span className="spangallery">See More</span></a> </button>
                    </div>
                </div>
                <div className="item" style={{ backgroundImage: `url(/miniclub.jpg)` }}>
                    <div className="content">
                    <div className="namegallery">
  <span className="letters" style={{ "--color": "#FF7F50" }}>K</span>
  <span className="letters" style={{ "--color": "#FF6347" }}>I</span>
  <span className="letters" style={{ "--color": "#FF4500" }}>D</span>
  <span className="letters" style={{ "--color": "#FF1493" }}>S</span>
 

  
</div>
         
                       
                        <button className="seeMore"  > <a href="./Kidspic"> <span className="spangallery">See More</span></a> </button>
                    </div>
                </div>
                {/* Add remaining items */}
            </div>
            <div className="button">
                    <button className="prev  "  onClick={movePrev}>
                         <FontAwesomeIcon className='galleryicon'  icon={faArrowLeft} />
                    </button>
                    <button className="next " onClick={moveNext}>
                         <FontAwesomeIcon  className='galleryicon'  icon={faArrowRight} />
                    </button>
                </div>

        </div>

        


        </div>
    );
};

export default Gallery;
