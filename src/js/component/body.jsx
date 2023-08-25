import React from "react";
import Card from "./card";
import Welcome from "./welcome";

function Body () {
    return(
    <div>
        <div>
            <Welcome />
        </div>
        <div className="d-flex justify-content-around">
            <Card title="Doggy" img="https://picsum.photos/id/237/330" text="This is a cute picture of a dog!"/>
            <Card title="White Windmill" img="https://picsum.photos/id/49/330" text="The white giant on the hill."/>
            <Card title="Rock On" img="https://picsum.photos/id/168/330" text="Are the rocks huge or just close to the camera?"/>
            <Card title="Default title" img="https://picsum.photos/330" text="Default description text"/>
        </div>
    </div>
    )
}

export default Body