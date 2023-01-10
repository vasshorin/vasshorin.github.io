import React, { useEffect } from 'react'
import { useState } from 'react'
import { projectsData } from './Data'
import { projectNav } from './Data'
import {Carousel} from 'react-bootstrap';


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

    // On img click open carousel of images in full size
    const handleImgClick = (e) => {
        // OPEN CAROUSEL

        const img = e.target;
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <img src="${src}" alt="${alt}" />
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            modal.remove();
        }
        )
    }


// function NoTransitionExample() {
//   return (
//     <Carousel slide={false}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=First slide&bg=373940"
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Second slide&bg=282c34"
//           alt="Second slide"
//         />

//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="holder.js/800x400?text=Third slide&bg=20232a"
//           alt="Third slide"
//         />

//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }



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
                    {/* On img click open carousel of images in full size */}
                    <img src={item.image } alt="" className='work__img' onClick={handleImgClick} />


                    <div className="work__data">
                        <div>
                        <h3 className="work__title">{item.title}</h3>
                        </div>
                        <div>
                        <span className="work__subtitle">{item.subtitle}</span>
                        </div>
                        {/* <span className="work__category">{item.category}</span> */}
                        <br />
                        <div>
                        <a href={item.link} className="work__button">Demo
                            <i className="uil uil-link-alt work__button-icon"></i>
                        </a>
                        </div>
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