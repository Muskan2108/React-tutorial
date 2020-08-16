import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let clsname = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${clsname} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
