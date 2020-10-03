import React from 'react';
import './AboveFoldBody.css';

function AboveFoldBody(props) {
    if(props.page === "home"){
        return (
                <div id="aboveFoldBody">
                    <div id="aboveFoldBody__name">
                        Lewis Young
                    </div>
                    <div id="aboveFoldBodySlogan">
                        create, develop, progress
                    </div>
                </div>
        )
    } else if (props.page === "projects") {
        return (
            <div>
                Projekte
            </div>
        )
    }
}

export default AboveFoldBody
