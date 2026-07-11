import {
useContext
}
from "react";


import {
FavouriteContext
}
from "../context/FavouriteContext";


function RemoveFavouriteZone(){


const {
removeFavourite
}
=
useContext(
FavouriteContext
);



function drop(e){


e.preventDefault();


const id =
Number(

e.dataTransfer.getData(
"remove"
)

);


removeFavourite(id);


}



return (

<div

className="remove-zone"

onDrop={drop}

onDragOver={
e=>e.preventDefault()
}

>

Drag here to remove favourite

</div>


);


}


export default RemoveFavouriteZone;