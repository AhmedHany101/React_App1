import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
export class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <Row>
                    <Col>
                        <ul>
                            <li>About</li>
                            <li>Home</li>
                            <li>Contect</li>
                            <li>How You Download Courses </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Team of Online Courses</li>
                            <li>User Of site</li>
                            <li>Related Site</li>
                        </ul>
                    </Col>
                    <Col>
                        <li className="list">
                            <i class="fab fa-facebook-square" id="i" ></i>
                            <i class="fab fa-twitter-square" id="i"></i>
                            <i class="fab fa-github-square" id="i"></i>
                            <i class="fab fa-instagram-square" id="i"></i>
                        </li>
                        <p className="copywrite">© 2021 Ahmed hany</p>
                    </Col>
                </Row>  
            </ section>
        )
    }
}
export default Footer
