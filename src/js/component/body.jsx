import React from "react";
import Card from "./card";
import Welcome from "./welcome";

function Body () {
    return(
    <div>
        <div>
            <Welcome />
        </div>

            <div className="row">
                <div className="col-12 col-sm-3"><Card title="Doggy" img="https://picsum.photos/id/237/320" text="This is a cute picture of a dog!"/></div>
                <div className="col-12 col-sm-3"><Card title="White Windmill" img="https://picsum.photos/id/49/300" text="The white giant on the hill."/></div>
                <div className="col-12 col-sm-3"><Card title="Rock On" img="https://picsum.photos/id/168/300" text="Are the rocks huge or just close to the camera?"/></div>
                <div className="col-12 col-sm-3"><Card title="Default title" img="https://picsum.photos/300" text="Default description text"/></div>
            </div>

    </div>
    )
}

export default Body