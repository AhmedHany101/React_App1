import React, { Component } from 'react'
import '../App.css';
import {Route, Link} from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
export class Courses extends Component {
    render() {
        return (
            <div className="co11 col-md-6 col-lg-3 mx-0 mb-4">  
                <div className="cartt">
                    <Route>
                        <Link to={this.props.link} className="link">
                            <Card>
                                <CardImg top width="100%" src={this.props.img} alt="Card image cap"  className="CardImg"/>
                                <CardBody>
                                    <CardTitle tag="h5" className="tit">{this.props.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    </Route>
                </div>
            </div>
        )
    }
}
export default Courses
