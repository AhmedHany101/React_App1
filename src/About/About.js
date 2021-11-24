import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';export class About extends Component {
    render() {
        return (
            <div className="aboutpage">
              <h1 className="titl">Online Courses</h1>
               <div className="dv1">
                  <ul>
                      <li>This site contains a large number of learning courses</li>
                      <li>Since the world is going through a difficult time due to the damage of the new Corna virus, this site is the best solution for many people.</li>
                      <li>This site contains many courses of learning</li>
                      <ol>
                        <li>Design</li>
                        <li>Devolpment</li>
                        <li>Marketing</li>
                        <li>Software</li>
                        <li>Photography</li>
                        <li>Personal Devolpment</li>
                        <li>Business</li>
                        <li>Music</li>
                        <li>Data Scince</li>
                        <li>IT</li>
                        <li>Progrming Languages</li>
                        <li>AI</li>
                      </ol>
                      <li>With coordination with international educational platforms and some great universities we have brought together some of the best courses that facilitate your way and pave the way for success</li>
                  </ul>
                </div> 
                <hr/>
                <h1 className="titl">User opinions</h1>
                <div>
                    <div >                   
                        <Card>
                            <CardBody>
                                <span className="log">
                                    <i class="fas fa-user-circle" ></i>
                                </span>
                                <CardTitle tag="h5" className="tit">Johnny</CardTitle>
                                <CardText>This site is one of the best sites I've used since the beginning of learning programming.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardBody>
                                <span className="log">
                                    <i class="fas fa-user-circle"></i>
                                </span>
                                <CardTitle tag="h5" className="tit">Mark</CardTitle>
                                <CardText>Amazing site I learned the music through it in one month.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardBody>
                                <span className="log">
                                    <i class="fas fa-user-circle"></i>
                                </span>
                                <CardTitle tag="h5" className="tit">sara</CardTitle>
                                <CardText>I enjoyed this site very much, and I told all my friends and advised them to use it.</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div> 
            </div>
        )
    }
}
export default About
