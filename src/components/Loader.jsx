import React from 'react'
import '../UI/loader/loder.scss'


const Loader = () => {
    return (
        <div className="spinner-border text-secondary loader" role="status">
            {/*<span className="visually-hidden">Loading...</span>*/}
        </div>
    )
}

export default Loader