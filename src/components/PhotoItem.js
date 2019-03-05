import React from 'react'

function PhotoItem(props) {
    return(
        <div>
            <img src={props.source} alt={props.alt}/>
        </div>
    )
}

export default PhotoItem