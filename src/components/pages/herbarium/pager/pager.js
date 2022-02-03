import React from 'react';
import './pager.css';

function Pager(props) {
 
   const {data , next , prev,  total} = props
   const  multi = (data-1)*20;

  return(
    <div className="PAGER">
        <div className="pager">
           <div className="upper_text">
             
              Result {multi+1} - {(total >= (multi+20)) ? multi+20 : total} of {total}
           </div>
           <div className="lower_text">
              {data} of {Math.ceil(total/20)} 
              <img id="prev_btn" src="/assets/images/prev.png" alt="" onClick={prev} ></img>
              <img id="next_btn" src="/assets/images/next.png" alt="" onClick={next} ></img>
           </div>
        </div>
    </div>
  )
}

export default Pager;
