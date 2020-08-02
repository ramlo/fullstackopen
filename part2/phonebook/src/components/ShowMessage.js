import React from 'react'

const ShowMessage = ({message, error}) =>{
    const style = {
        color: error?'red':'green',
        background: 'lightgrey',
        fontSize: 20,
        fontStyle: 'solid',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if(message===null){
        return null
    }
    return(
        <div style={style}>
            {message}
        </div>
    )
}

export default ShowMessage