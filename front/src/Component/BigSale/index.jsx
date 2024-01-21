import React from "react";
import "./style.scss";

function BigSale() {
  return (
    <section id="bigsale">
      <div className="bigsale">
        <div className="bigsale_head">
          <span></span>
          <h1>Big Sale</h1>
        </div>
        <div className="bigsale_center">
          <div className="left">
            <img
              src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg.webp"
              alt=""
            />
          </div>

          <div className="right">
           <h1>  50% less in all items</h1> 
          <div className="date">
          <span>By Carl Smith</span>
           <span> • September 3, 2018</span> 
          </div>
           <p>Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor
            accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
            <button>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigSale;
