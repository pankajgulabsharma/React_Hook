import React from 'react'

const S_Search = (props) => {
    const image=`https://source.unsplash.com/400x300/?${props.imgname}`;
    return (
        <div>
            <img src={image} alt="search" style={{marginBottom:"50px "}}/>
        </div>
    )
}

export default S_Search
