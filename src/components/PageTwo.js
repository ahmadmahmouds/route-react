import React from 'react'
import {Link} from '@reach/router';
const PageTwo = (props) => {
    
        
                 if(isNaN(props.id)){
                    return(<h1> this is a String : {props.id}</h1>)

                 }
                
                return(<h1> this is a number : {props.id}</h1> ) 



           
        
    
}
export default PageTwo;
