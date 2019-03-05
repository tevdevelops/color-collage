import React, {Component} from 'react'
import namer from 'color-namer'
import Unsplash from 'unsplash-js'
import PhotoItem from './PhotoItem'
import Loader from './Loader'
import './PhotoCollage.css'



const unsplash = new Unsplash({
    applicationId: "3c52afac6f4778aad50202e7ccdd5cba4213e4dba97564b655653f566107b734",
    secret: "fdbb9ef797527848f0d5b66aa10bcf248b26e2f50b8f37cd78bb454dd50efda2"
  });

class PhotoCollage extends Component {
    constructor() {
        super()
        
        this.state = {
            colorPicker: "#000000",
            imgArray: [],
            isLoading: false
        }
    }

    searchPhotos() {
        this.setState({ isLoading: true })
        let colorName = namer(this.state.colorPicker).pantone[0].name
        console.log(colorName)
        unsplash.search.photos(colorName, 1)
            .then(response => response.json())
            .then(response => {
                this.setState({ imgArray: response.results, isLoading: false })
            }) 
    }

    handleChange = event => {
        const {name, value} = event.target
            this.setState({ [name]: value })
    }

    componentDidMount() {
        this.searchPhotos()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.colorPicker !== this.state.colorPicker) {
            this.searchPhotos()
        }
        
    }

    render() {
        const photoItems = this.state.imgArray.map(item => <PhotoItem key={item.id} source={item.urls.small} link={item.links.html} alt={item.user.first_name} />)

        return(
            <div>

                <div className="color-picker">
                    <input 
                        type="color" 
                        name="colorPicker" 
                        value={this.state.colorPicker} 
                        onChange={this.handleChange}
                    />
                    <span>Your Selected Color: {namer(this.state.colorPicker).pantone[0].name}</span>
                </div>

                {
                    this.state.isLoading ?
                        <Loader />
                    :
                    <div className="photo-grid slide-up-fade-in">
                        {photoItems}
                        <div className="clearfix"></div>
                    </div>
                }

            </div>
        )
    }
}

export default PhotoCollage