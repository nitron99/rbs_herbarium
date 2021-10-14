import React, {useState, useRef} from 'react';
import './ques_ans.css';

function Ques_ans(props){
    const [isOpen, setIsOpen] = useState(false);

    // this useRef is hook which is use to get info of html components in react.
    const parentRef = useRef();

    return( 
        <div className="COLLAPSIBLE">
            <div className="collapsible" onClick={() => setIsOpen(!isOpen)}> 

                {props.data.title}
                    
            </div>
            <div 
                className="ANSWER" 
                ref={parentRef}
                style={isOpen 
                    ? {
                    height: parentRef.current.scrollHeight + "px",
                    }
                    : {
                        height: "0px",
                    }}
                >
                <div className="answer" >
                    {props.data.content}
                </div>

            </div>
        </div>

        

    );
}

export default Ques_ans;