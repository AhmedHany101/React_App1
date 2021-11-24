import React, { Component } from 'react'
import data from '../Data';
import Courses from '../Courses/Courses';
export class Home extends Component {
    render() {
  return (
      <div className="homepage"> 
        <section className="py-4 py-lg container">
          <div className="row justify-content-cnter">
            {data.coursesdata.map((item, index)=>{
                return(
                  <Courses key={index} name={item.name} img={item.img} link={`/Detailse/${item.id}`} />
                )
            })}
          </div>
        </section>
      </div>
    )
  }
}
export default Home


