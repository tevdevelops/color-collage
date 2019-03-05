import React, {Component} from 'react'
// import PhotoGrid from './PhotoGrid'
import PhotoItem from './PhotoItem'

import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
    applicationId: "3c52afac6f4778aad50202e7ccdd5cba4213e4dba97564b655653f566107b734",
    secret: "fdbb9ef797527848f0d5b66aa10bcf248b26e2f50b8f37cd78bb454dd50efda2"
  });

class PhotoCollage extends Component {
    constructor() {
        super()
        
        this.state = {
            colorPicker: "#e66465",
            imgArray: []
        }
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("Should Change Image Collage")
    }

    componentDidMount() {
        unsplash.photos.listPhotos(2, 15, "latest")
            .then(response => response.json())
            .then(response => {
                this.setState({ imgArray: response })
            });    
    }

    render() {
        const photoItems = this.state.imgArray.map(item => <PhotoItem source={item.urls.small} alt={item.user.first_name} />)

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="color" 
                        name="colorPicker" 
                        value={this.state.color} 
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
                </form>
                <p>Your Selected Color: {this.state.colorPicker}</p>
            
                {/*<PhotoGrid />*/}
                <div>
                    {photoItems}
                </div>

            </div>
            
        )
    }
}

export default PhotoCollage