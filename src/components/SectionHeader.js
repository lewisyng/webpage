import React from 'react';
import './SectionHeader.css';

function SectionHeader(props) {
    return (
        <div className="sectionHeader">
           {props.section} 
        </div>
    )
}

export default SectionHeader
