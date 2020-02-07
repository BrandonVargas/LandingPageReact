import React from 'react'
import {Element} from 'react-scroll'
import ProcessBox from './ProcessBox'
import '../css/Process.css'

interface ProcessProps {
    processArray: Array<{
        title: string
        description: string
        url: string
    }>
}

const Process: React.FC<ProcessProps> = ( {processArray} ) => {
    return(
        <Element name="process">
            <div className="process">
                <h1 className="process-title">Deation & Evaluation - Best Way to Kick off Your Product Idea</h1>
                <div className="process-boxes">
                    {processArray.map( (p, i) => (
                        <ProcessBox key={p.title} process={p}/>
                    ))}
                </div>
            </div>
        </Element>
    )
}

export default Process