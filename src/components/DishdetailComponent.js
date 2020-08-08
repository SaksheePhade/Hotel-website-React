import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import Media from 'react-bootstrap/Media';

//during initial call, dish is empty because user hasnt clicked. Thats why the problem. Did not write if else.
 function RenderComments({dish}) {

    console.log("Rendercomments called!");
   
    if(dish==null) {
        return(
        <div>
            {console.log("Dish is null, as in components.")}
        </div>
        );
    }
    else{
        console.log(dish.name)
        let comments = dish.comments;
            if(comments!=null) {
                return (
                    <div className="container">
                        <div>
                            <h4> Comments </h4>
                        </div>
                        <div>
                        {
                            comments.map(
                                        comment => (
                                            <ul type="none">
                                            <li>{comment.comment}</li>
                                            <li>--{comment.author},
                                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </li>
                                            </ul>
                                        )
                                    )
                            }
                        </div>
                    </div>
                );
            }
            else {
                return(<div>
                    {console.log("WTH is the problen!!")}
                    </div>);
            }

        }
}

    function RenderDish({dish}) {

        console.log("Renderdish called");
        
        if(dish!=null) {
            return (
                <div>
                    <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        {console.log(dish.name)}
                    </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return (
                <div>
                    {console.log("Dish is null!")}
                </div>
            );
        }
    }

    const Dishdetail = (props) => {

        //dish = this.props.dishes;
        return(
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {console.log("Goddddd")}
                        <RenderComments dish={props.dish} />
                    </div> 
                </div>
            </div>
        );
    }

export default Dishdetail;

/*
   <li>--{comment.author}, 
                                        { new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format( 
                                            new Date.parse(comment.date)) } </li>

     */