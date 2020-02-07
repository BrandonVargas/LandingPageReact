import React from 'react'
import '../css/ProcessBox.css'

interface ProcessBoxProps {
    process: {
        title: string
        description: string
        url: string
    }
}
const ProcessBox: React.FC<ProcessBoxProps> = ({process}) => {
    return(
        <div className="box">
            <p className="title">{process.title}</p>
            <p className="description">{process.description}</p>
            <a href={process.url} className="more">Read More</a>
        </div>
    )
}

export default ProcessBox