import React from 'react'

function PhotoItem(props) {
    return(
        <div>
            <a href={props.link} target="_blank" rel="noopener noreferrer"><img src={props.source} alt={props.alt}/></a>
        </div>
    )
}

export default PhotoItem