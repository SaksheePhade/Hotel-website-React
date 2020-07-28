import React, {Component} from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import Media from 'react-bootstrap/Media';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderComments(comments) {

        if(comments!=null) {
            return (
                <div>
                    <div>
                        <h4> Comments </h4>
                    </div>
                    <div>
                    {
                        comments.map(
                                    comment => (
                                        <ul type="none">
                                        <li>{comment.comment}</li>
                                        <li>--{comment.author}, {comment.date}</li>
                                        </ul>
                                    )
                                )
                        }
                    </div>
                </div>
            )
        }

    }

    render() {

        //dish = this.props.dishes;

        return (

            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <Card >
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <p>{this.renderComments(this.props.dish.comments)}</p>
                </div> 
            </div>
            
        );
    }

}

export default Dishdetail;

