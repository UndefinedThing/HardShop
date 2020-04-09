import React from 'react'
import "./config.css"

var Page = React.Component({
    render: function() {
        return (
            <div>
                <h1>Ceci est le début de mon app </h1>
                <p>C'est du React !</p>
            </div>
        )
    }
});
ReactDOM.render(<Page />, document.getElementById('main'));