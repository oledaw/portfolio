import React, { useState } from 'react';
import './Timeline.css';
import data from './data'

const StepBar = (props) => {
  return (
    <div className={props.isActive ? "circle active" : "circle"}
      onClick={() => props.onClick(props.num)}>
      <div className="icon"
        style={{
          backgroundImage: "url(" + props.work.icon + ")",
          backgroundSize: '100%'
        }}
      />
      <span className="icon-text">{props.work.workplace}</span>
    </div>
  );
}

const ShortDescription = (props) => {
  return (
    <div className={props.isActive ? "description active" : "description"}>
      {props.isActive && `${props.work.info} ${props.work.position} from ${props.work.dates.start} to ${props.work.dates.end} (${props.work.dates.months})`}
      {props.isActive && <ul style={{paddingLeft: '20px'}}> {props.work.responsibilities.map(responsibility => <li>{responsibility}</li>)}</ul>}
    </div>)
}

function Timeline() {

  const [active, setactive] = useState(data.length-1)
  const updateCurrent = (i) => {
    setactive(i)
  }

  return (

    <div className="cont">
    <h1 onClick={() => { setactive(0.1) }}>Career</h1>
    
    <div className="container" >
      <div className="progress-container">
        <div className="progress" style={{ "--pro": active / (data.length-1) * 100 + '%' }} />
        {data.map((work, index) =>
          <StepBar num={index} work={work} onClick={updateCurrent} isActive={index === active ? true : false} />
        )}
      </div>
      <div className="description-container" >
        {data.map((work, index) =>
          <ShortDescription work={work} index={index} isActive={index === active ? true : false} />
        )}
      </div>
    </div>
    </div>
    
  );
}

export default Timeline;
