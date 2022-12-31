import React, { useEffect } from 'react'
import { useState } from 'react'
import { projectsData } from './Data'
import { projectNav } from './Data'

const Works = () => {
    const [selected, setSelected] = useState({name: 'all'});
    const [data, setData] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(selected.name === 'all') {
            setData(projectsData);
        } else { 
            const newProjects = projectsData.filter((data) => {
                return data.category === selected.name;
            });
            setData(newProjects);
        }
    }, [selected]);


    const handleClick = (e, index) => {
        setSelected(projectNav[index]);
        setActive(index);
    }

  return (
  <div>
      <div className="work__filters">
        {projectNav.map((item, index) => {
            return (
                <span key={index} className={`${active === index ? 'active-work' : "work__item" }`} onClick={(e) => {
                    handleClick(e, index);
                }}>
                    {item.name}
                </span>
            )

        })}
    </div>

    <div className="work__container container grid">
        {data.map((item, index) => {
            return (
                <div className="work__card">
                <div key={index} className="work__img">
                    <img src={item.image } alt="" className='work__img' />
                    <div className="work__data">
                        <h3 className="work__title">{item.title}</h3>
                        <span className="work__subtitle">{item.subtitle}</span>
                        {/* <span className="work__category">{item.category}</span> */}
                        <br />
                        <a href={item.link} className="work__button">Demo
                            <i className="uil uil-link-alt work__button-icon"></i>
                        </a>
                    </div>
                </div>
                </div>
            )
        })} 
    </div>

    {/* <div className="work__button">
        <a href="#" className="button button--flex">
            More projects
            <i className="uil uil-arrow-right button__icon"></i>
        </a>
        </div> */}
    
  </div>
)}

export default Works