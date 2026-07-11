import {

useContext

}

from "react";


import {

FavouriteContext

}

from "../context/FavouriteContext";



function FavouriteList(){


const {

favourites,

removeFavourite,

clearFavourites,

addFavourite

}

=
useContext(
FavouriteContext
);



function dropHandler(e){


e.preventDefault();



const property =
JSON.parse(

e.dataTransfer.getData(
"property"
)

);



addFavourite(property);


}



function allowDrop(e){

e.preventDefault();

}



return (

<div

className="favourites"


onDrop={dropHandler}


onDragOver={allowDrop}


>
//Add a drop area on the search page



<h2>

Favourite Properties

</h2>



<p>

Drag properties here

</p>



{

favourites.map(

property=>(


<div

key={
property.id
}


className="favourite-item"


draggable


onDragStart={

e=>{

e.dataTransfer.setData(

"remove",

property.id

)

}

}



>


<img

src={
property.images[0]
}

alt=""

/>


<div>


<strong>

{
property.location
}

</strong>


<p>

£
{
property.price.toLocaleString()
}

</p>



<button

onClick={

()=>removeFavourite(
property.id
)

}

>

Remove

</button>


</div>


</div>


)


)


}



<button

onClick={clearFavourites}

>

Clear All

</button>


</div>


);


}


export default FavouriteList;