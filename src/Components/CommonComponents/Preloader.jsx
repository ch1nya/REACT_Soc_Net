import React from 'react'
import PreloaderPicture from '../../Assets/Images/Reload-1s-200px.svg'

const Preloader = (props) => {
    return (
        <div style={{ opacity: 0.5 }}>
            <img src={PreloaderPicture} />
        </div>
    )
}

export default Preloader