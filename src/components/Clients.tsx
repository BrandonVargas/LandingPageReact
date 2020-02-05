import React from 'react'
import '../css/Clients.css'

const Clients: React.FC = () => {
    return (
        <div className="clients">
            <img src={require("../assets/clients.png")} alt="clients" className="clients-image"/>
        </div>
    )
}

export default Clients