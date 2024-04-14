import React from 'react'
import logo from '../assest/Logo.jpg'
const Logo = ({w,h}) => {
    return (
        <div>
            <img width={w} height={h} src={logo}/>
        </div>
    )
}

export default Logo