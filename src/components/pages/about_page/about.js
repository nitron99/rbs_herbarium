import React, {Component} from 'react';
import './about.css';
import Ques_ans from './question_answer/ques_ans';
import {questions} from './question_answer/questions';

class about extends Component{
    render() {
        return(
            <div className="ABOUT">
        
                <div className="about_written_content">
                        <div className="about_para1">
                            <em >Nature Does Not Hurry, Yet Everything Is Accomplished</em><br/><br/>The R.B.S. Herbarium contains over 500 specimens of vascular plants which have
                                been preserved in digital as well as real form. The Herbarium has been published in
                                the “Flora of Agra” (BSI, Dehradun) {"&"} is available for reference..
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                        </div>
                     
                
                    <div className="question_answer">
                        {questions.map((item, index) => {
                            return (
                                <Ques_ans data={item} key={index}/>
        
                            )
                        })}
                    </div>

                </div>
                
            </div>
        );
    }
}

export default about;