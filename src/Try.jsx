import "./try.css";
import React from "react";

const Try = () => {
  const img = (anything) => {
    document.querySelector('.slide').src = anything;
  }

  const change = (change) => {
    const line = document.querySelector('.image');
    line.style.background = change;
  }

  return (
    <section className="home" id="home">
      <div className="head_container">
        <div className="box">

            
          <div className="text">
          <div className="rowhero">
    <div className="col-md-12 text-center">
      <h3 className="animate-charcter"> BELLA VISTA</h3>
      <div className="wrapperbtntry ctn">

  
</div>
    </div>
  </div>
          </div>
        </div>
        <div className="image">
          <img src="/generalview.jpg" alt="" className="slide" />
        </div>
        <div className="image_item">
          <img src="/generalview.jpg" alt="" className="slide active" onClick={() => img('/generalview.jpg')} />
          <img src="/Waterslides.jpg" alt="" className="slide" onClick={() => img('/Waterslides.jpg')} />
          <img src="/loisir.jpg" alt="" className="slide" onClick={() => img('/loisir.jpg')} />
          <img src="/kidpool1.jpg" alt="" className="slide" onClick={() => img('/kidpool1.jpg')} />
        </div>
      </div>
    </section>
  );
}

export default Try;
