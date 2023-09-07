import React from "react";
import {GiSkills} from 'react-icons/gi';
import PageHeaderContent from "../../components/pageHeaderContent";
import { AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import {skillsData} from './utill';
import {Animate} from 'react-simple-animate'
import  './styles.scss';

const Skills=()=>{
    return(
        // <div>
        //     Skills Page
        // </div>

        <section id="skills" className="skills">
        <PageHeaderContent HeaderText="My Skills"
        icon = {<GiSkills size={40}/>}/>
        <div className="skills__content-wrapper">
            {
            skillsData.map((item,i)=>(
                <div key={i} className="skills__content-wrapper__inner-content">
                    <Animate
                    play
                    duration={1}
                    delay={0.3}
                    start={{
                        transform:'translateX(-200px)'
                    }}
                    
                    end={{
                        transform:'translateY(0px)'
                    }}
                    >
                        <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                        <div className="progress">{
                                item.data.map((skillItem,j)=>(

                                    <AnimateKeyframes
                                    play
                                    duration={1}
                                    keyframes={["opacity :1","opacity:0"]}
                                    iterationCount="1" >
                                        <div className="pregress-wrapper" key={j}>
                                            <p>{skillItem.skillName}</p>
                                            <Line 
                                            percent={skillItem.percentage}
                                            strokeWidth="2"
                                            strokeColor="var(--yellow-theme-main-color)"
                                            trailWidth="2"
                                            strokeLinecap="square"></Line>
                                        </div>
                                    </AnimateKeyframes>
                                ))
                            }</div>
                    </Animate>
                </div>
            ))
            }
        </div>
</section>
    )
}
export default Skills;
