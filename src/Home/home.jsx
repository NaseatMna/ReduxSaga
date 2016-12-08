import React from'react';
import ReactDOM from 'react-dom';

const listImage=[
    "/public/images/1.jpg",
    "/public/images/2.jpg",
    "/public/images/3.jpg",
    "/public/images/4.jpg",
    "/public/images/5.jpg",
    "/public/images/6.jpg"
];

export default class Home extends React.Component{
constructor(props){
    super(props);
    this.state={
            images:listImage,
            selectImage:listImage[0]
    }
}
    handleClick(selectImage){
        this.setState({
            selectImage
        })
    }
 render(){
     const {images,selectImage}=this.state
        return(
            <div>
                <div className="image-gallery">
                    <div className="gallery-image">
                        <div>
                            <img src={selectImage} />
                        </div>
                    </div>
                    <div className="image-scroller">
                        {images.map((image, index) => (
                            <div key={index} onClick={this.handleClick.bind(this,image)}>
                                <img src={image}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
 }
}