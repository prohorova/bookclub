import React from 'react';
import { Col, Row, Glyphicon } from 'react-bootstrap';

const Home = (props) => (
    <div>
        <div className="banner text-center">
            <h1>Bookswap</h1>
            <p>A place to exchange books</p>
            <Glyphicon glyph="book" />
        </div>
        <div className="container">
            <Row className="features">
                <Col md={4} xs={12}>
                    <h2><Glyphicon glyph="th-large" />Books cataloque</h2>
                    <p>
                        See the books our users own and are ready to borrow.
                        Add the books you own to your personal cataloque.
                    </p>
                </Col>
                <Col md={4} xs={12}>
                    <h2><Glyphicon glyph="retweet" />Exchange books</h2>
                    <p>
                        Request to borrow books from other users and wait for them to approve your request.
                        Approve or reject requests for your books.
                    </p>
                </Col>
                <Col md={4} xs={12}>
                    <h2><Glyphicon glyph="user" />Personal dashboard</h2>
                    <p>Manage requests and your books cataloque through a private dashboard.</p>
                </Col>
            </Row>
        </div>
    </div>
);

export default Home;