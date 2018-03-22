import React from 'react'

export default () => {
    return <div className="dark">
        <h3>Get A Quote</h3>
        <form className="quote">
            <div>
                <label>Name</label><br/>
                <input type="text" placeholder="Name"/>
            </div>
            <div>
                <label>Email</label><br/>
                <input type="email" placeholder="Emial Address"/>
            </div>
            <div>
                <label>Message</label><br/>
                <textarea placeholder="Message"/>
            </div>
            <button className="button_1" type="submit">Send</button>
        </form>
    </div>
}