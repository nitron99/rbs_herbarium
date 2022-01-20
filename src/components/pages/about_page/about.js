import React, {Component} from 'react';
import './about.css';
import Ques_ans from './question_answer/ques_ans';
import {questions} from './question_answer/questions';

class about extends Component{
    render() {
        return(
            <div className="ABOUT">
        
                <div className="about_written_content">
                        <div className="about_img">
                            <img id="about_img" src="/assets/images/about_page.png" alt="" ></img>
                       
                            <div className="about_para1">
                                <em >Nature Does Not Hurry, Yet Everything Is Accomplished</em><br/><br/>The R.B.S. Herbarium contains over 500 specimens of vascular plants which have
                                    been preserved in digital as well as real form. The Herbarium has been published in
                                    the “Flora of Agra” (BSI, Dehradun) {"&"} is available for reference..
                                    
                            </div>
                        </div>

                        <div className="heading">
                            About the Department
                        </div>

                        <div className="about_the_department">
                            Department is recognized as a research centre for Ph.D. {"&"} Post Doctoral Research by
                            Dr. B. R. Ambedkar University, Agra, Dr. A. P. J. Kalam Technical Universty, Lucknow (formerly
                            known as UP Technical University, Lucknow and Mahamaya Technical University, Noida). <br/> <br/><br/>

                            <em>Recognitions of the Department of Botany<br/><br/></em>
                            - DST- FIST( I {"&"} II Level) Sponsored Department.<br/>
                            - DSIR, Govt. of India - Recognized.<br/>
                            - UGC, Govt. of India -CPE Star Performer.

                            
                        </div>


                        <div className="heading">
                                History {"&"} Genesis
                        </div>
                        
                        <div className="history_block">
                            <div className="history_genesis">
                                - <em>Dr. Bahadur Singh</em>, the founder of the department had been Eminent Botanist {"&"} Plant Morphologist worked on the 
                                embryology of parasitic angiosperms U/G <em>Prof. P. Maheshwari</em> {"&"} <em>Prof. Birbal Sahni</em>. Established a research
                                centre in plant morphology. <br/>

                                - First in country to start specialization in Cytogenetics {"&"} Plant Breeding at PG level - 1953. <br/>
                                
                                - It has recognition as an important research centre in Cytogenetics and Plant Breeding ,plant
                                morphology, anatomy, taxonomy, plant physiology, reproductive biology, plant pathology and ecology. <br/>

                                - Renown helpers to <em>Dr. Bahadur Singh - Dr. S.C. Chakarvarti, Dr. Vijay Pal Singh, Dr. R.P. Singh,
                                Dr. Dalbir Singh, Prof. B. M. Johri, Prof. R.N. Dave and Dr. O.P.Madhok</em>.
                            </div>

                            <img id="history_img" src="/assets/images/history.png" alt="" ></img>
                            
                        </div>

                        <div className="heading">
                            Facilities Offered
                        </div>

                        <div className="facilites_block">
                            <div className="facilites_offered">
                                - 1 UG lab.<br/>
                                - 3 PG labs.<br/>
                                - 2 Research labs.<br/>
                                - 1 computer central facility lab.<br/>
                                - 1 Head of Department room.<br/>
                                - 1 Staff room + Department library.<br/>
                                - 1 Museum + store.<br/>
                                - 1 UG lecture room + 1 lab staff room.<br/><br/>
                                    
                                <em>Equipments</em>

                                - Fluorescence Microscop. 
                                - Atomic Absorption.
                                - Spectrophotometer.
                                - GC. 
                                - Fermenter.
                                - Leaf Image analyzer. 
                                - Anaerobic culture chamber. 
                                - Nitrogen analyzer. 
                                - Refrigerated Ultracentrifuge. 
                                - PCR machine. 
                                - Deep freeze. 
                                - Sonicator.
                                - Shaker cum incubator. 
                                - Millipore water system. 
                                - UV-VIS.
                                - Spectrophotometer. 
                                - FT-IR. 
                                - Particle size Analyser. 
                                - HPLC.

                                <br/><br/>

                                <em>Library facilities</em> - Departmental library, - Central Library, - Jawahar Library,
                                - Engineering Library, - University library, - Journals. 

                                <br/><br/>

                                <em>Botanical Garden {"&"}
                                Experimental field</em> - 5 Acres with Boundary wall, a Gardener Quarter, Poly house and 100
                                plants irrigated by submersible

                                <br/><br/>
                                <em>Herbarium</em> - More than 500 plants of Agra preserved in herbarium {"&"} published in the “Flora
                                of Agra” (BSI, Dehradun) is available for reference.
                            </div>
                            <img id="facility_img" src="/assets/images/facility.png" alt="" ></img>
                        </div>

                        <div className="heading">
                            Heads Of Department
                        </div>

                        <div className="head_of_dept_block">
                            <img id="head_img" src="/assets/images/headofdept.png" alt="" ></img>
                            <div className="head_of_department">
                                - <em>Dr. S. P. Singh</em> succeeded, Dr. Bahadur Singh as head, visited the University of Illinois (USA) under the T.C.M. Scheme and began work
                                on plant breeding of crop plants after his return to India.<br/><br/>

                                - <em>Dr. S. N. Chaturvedi</em> (1978-1986) worked on histopathology and
                                histochemistry of diseased plants and plant galls ,induced
                                mutagenesis and ecology. He was elected President of the Indian
                                Botanical Society.<br/><br/>

                                - <em>Dr. Jawahar Singh Dhakre</em> (1986-89)-published the flora of Agra
                                district with Dr. A K Sharma by BSI, Dehradun. He became Principal
                                of the College in June 1989 by UP Higher Edu Commission.<br/><br/>

                                - <em>Dr. B. P. S. Chauhan</em> (1989-91) Best teacher of genetics and expert
                                in breeding skills {"&"} NCC officer.<br/><br/>

                                - <em>Dr. S. V .S. Chauhan</em> (1991-1998) is D.Sc. ,12 research projects ,50
                                seminars, members of 21 scientific societies. Expert in male
                                sterility, reproductive biology, plant physiology {"&"} biochemical
                                investigation. Dr. Chauhan is a cricket commentator of world repute.<br/><br/>

                                - <em>Dr. R.K.S. Rathore</em> (1998-2001) - plant morphology, cytog enetics
                                and plant breeding. Introduced Seed technology course at PG level,
                                established Botanical Garden and authored -TREES OF AGRA.<br/><br/>

                                - <em>Dr. Vijay Laxmi Singh</em> (2001-2007) -Reproductive biology and
                                ecology, introduced Nakshtra Vatika in Botanical Museum.<br/><br/>
                            </div>
                        </div>

                        <div className="heading">
                            Our Faculty
                        </div>
                            
                        <div className="faculty_block">
                            <div className="faculty">
                                - <em>Dr. A.K.Singh</em> (2007 - 2020) is Taxonomist and Ecologist with
                                good leadership and governance. He is General Secretary of
                                Agra University Teachers’ Association.<br/><br/>

                                - <em>Dr. K P Singh</em> (1988 - ) contribution in the addition of
                                Cucurbits diversity with 3 major projects on biodiversity,
                                organized 5 national conferences, authored 5 books and
                                helped students to achieve their career.<br/><br/>

                                - <em>Dr. Seema Bhadauria</em> (1991 - till date {"&"} Head from 2020) has
                                international contribution in agriculture, nanotechnology,
                                biotech, microbiology, environment and cultural heritage
                                with DST-National award. She has run 21 projects - 5
                                international and 4 industrial resulting to 4 patents ,3 new
                                fungal reports, one NCBI genomic accession of Chlorella
                                and 6 technologies transferred with commercialization and
                                made department DSIR and FIST – DST sponsored.<br/><br/>

                                - <em>Dr. Anil Kumar</em> (2001 - ) {"&"} Dr. Devesh Kumar(2010-) - good
                                motivators, best coaches and working in the fields of
                                molecular biology and plant pathology respectively. A good
                                Number of students are able to pass NET/GATE exam with
                                their help.<br/><br/>

                                - <em>Dr. Saroj Singh Chahar</em>(2011 - ) is Plant Virologist ,good
                                manager and active faculty member.<br/><br/>        
                            </div>
                            <img id="faculty_img" src="/assets/images/faculty.png" alt="" ></img>
                        </div>
                        <div className="heading">
                            Courses Offered
                        </div>

                        <div className="about_the_department">
                            <em>- Under Graduation Course - 3 years<br/><br/>  
                            - Post Graduation Course - 2 years<br/><br/> 
                            - Ph.D.</em>
                        </div>
                        
                        {/* <div className="heading">
                            Our Achievements
                        </div> */}

                        <div className="heading">
                            Our Projects
                        </div>

                        <div className="project_block">
                            <div className="international_projects">                               
                                <em>International</em><br/>

                                1. Microbiological analysis of biofilms on stone artefacts and their conservation by chemically
                                and biologically synthesized nanomaterials (Department of Sci. and Technology (Indo-Italian Project) Italian PI -Prof.Baglioni, Univ.Of Florence, Italy)
                                <br/><br/>
                                2. Development of nano biosensor probe for detection of metal cations 
                                    <br/>    (INT/ RFBR / P-125 International Collaborative Project with Russia (sanctioned by DST and Russian
                                Foundation of Basic Research (RFBR)
                                Sanction date: 12.07.2012
                                <br/><br/>
                                3. Application of aptamer functionalized gold nanoparticles in biosensors for
                                rapid control of heavy metals in water samples (INT/RUS/RFBR/P-223) -2015
                            </div>

                            <div className="industrial_projects">
                                    <em>Industrial</em><br/>

                                    1. Application of Nanosilicates for monument conservation International Industrial Collaborative Project with Japan 2013-2016
                                    <br/><br/>
                                    2. Development of non- electronic soil analytical kit supplemented with soil health and fertilizer recommendation
                                    card- Phase II. Deptt. of Sci. and Technology, Govt. of India, New Delhi (ID/SEN/96/07) BIOLINK OVERSEAS CO.,
                                    <br/><br/>
                                    3. Incorporation of Additional soil micronutrients testing facility and Development of soil nutrients and leaf
                                    nitrogen deficiency software with fertilizer management - Deptt. of Sci. And
                                    Technology, (IDP/ IND/ 12/2013) BIOLINK OVERSEAS CO., AGRA
                                </div>
                        </div>

                        <div className="heading">
                            Our Patents
                        </div>

                        <div className="patents">

                            1. <em>Non-Electronic and Electronic Soil testing kit(FERTICHECK™)</em> available at instrumentation –development programme: i. India.bigpatents.org/ names/13780 <br/>

                            International classification: G01N37/00
                            <br/><br/>
                            2. <em>Bioprocess for Cleaning of Organic Pollution and other Biological alterations on Stone Surfaces.</em><br/>

                            PATENT APPLICATION PUBLICATION: Application
                            No.96/DEL/2010 A INDIA
                            <br/><br/>
        
                            3. <em>Bioethanol from Petha waste -Applied through TIFAC</em><br/><br/>

                            4. <em>Nanocopper and Nanolead Biosynthesis -Applied through TIFAC</em>
                        </div>
                        {/* <div className="heading">
                            Placements
                        </div> */}
                
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