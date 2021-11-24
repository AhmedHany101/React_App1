import React, { Component } from 'react'
import data from '../Data';
export class Details extends Component {
    render() {
        let getid = this.props.match.params.id;
        const getdata =  data.coursesdata[getid - 1];
        console.warn(getdata);
        return (
            <section className="container">
                <div className="row">
                    <div className="div1">
                        <img src={getdata.img1} alt="" ></img>
                        <p>{getdata.title1}</p>
                        <h4>{getdata.dec}</h4>
                        <span className="down">
                            <i class="fas fa-arrow-circle-down"></i>
                        </span>
                    </div>
                    <div className="div1">
                        <img src={getdata.img2} alt=""/>
                        <p>{getdata.title2}</p>
                        <h4>{getdata.dec}</h4>
                        <span className="down">
                            <i class="fas fa-arrow-circle-down"></i>
                            
                        </span>
                    </div>
                    <div className="div1">
                        <img src={getdata.img3} alt=""/>
                        <p>{getdata.title3}</p>
                        <h4>{getdata.dec}</h4>
                        <span className="down">
                            <i class="fas fa-arrow-circle-down"></i>
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="div1">
                        <img src={getdata.img4} alt=""/>
                        <p>{getdata.title4}</p>
                        <h4>{getdata.dec}</h4>
                        <span className="down">
                            <i class="fas fa-arrow-circle-down"></i>
                        </span>
                    </div>
                    <div className="div1">
                        <img src={getdata.img5} alt=""/>
                        <p>{getdata.title5}</p>
                        <h4>{getdata.dec}</h4>
                        <span className="down">
                            <i class="fas fa-arrow-circle-down"></i>
                        </span>
                    </div>
                    <div className="div1">
                        <img src={getdata.img6} alt=""/>
                        <p>{getdata.title6}</p>
                        <h4>{getdata.dec}</h4>
                        <span className="down">
                            <i class="fas fa-arrow-circle-down"></i>
                        </span>
                    </div>
                </div>
            </section>
        )
    }
}
export default Details




