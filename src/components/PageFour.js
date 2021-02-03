import React from 'react'
import {Link} from '@reach/router';

 const PageFour = (props) => {
    return (
        <div>
            <h1 style={{color:props.color1, backgroundColor:props.color2}}>The World is {props.hello}</h1>
        </div>
    )
}
export default PageFour;
