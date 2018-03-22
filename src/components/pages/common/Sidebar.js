import React from 'react'

export default (props) => {

    return <aside id="sidebar">
        <div className="dark">
            <h3>What I do?</h3>
            {props.body}
        </div>
    </aside>
}
