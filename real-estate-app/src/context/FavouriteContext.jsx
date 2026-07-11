import {
createContext,
useState
}
from "react";


export const FavouriteContext =
createContext();



export function FavouriteProvider({
children
}){


const [
favourites,
setFavourites
]
=
useState([]);



function addFavourite(property){


const exists =
favourites.some(

item =>
item.id === property.id

);



if(!exists){

setFavourites(

[
...favourites,
property
]

);

}


}



function removeFavourite(id){


setFavourites(

favourites.filter(

property =>
property.id !== id

)

);


}



function clearFavourites(){


setFavourites([]);


}



function removeByDrag(id){


removeFavourite(id);


}



return (

<FavouriteContext.Provider


value={

{

favourites,

addFavourite,

removeFavourite,

clearFavourites,

removeByDrag

}

}


>


{children}


</FavouriteContext.Provider>


);


}