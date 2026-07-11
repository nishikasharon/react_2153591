import {
useContext
}
from "react";


import {
FavouriteContext
}
from "../context/FavouriteContext";


import {
FaHeart
}
from "react-icons/fa";



function FavouriteButton({
property
}){


const {

addFavourite

}

=
useContext(
FavouriteContext
);



return (

<button


className="favourite-button"


onClick={

()=>
addFavourite(property)

}


>


<FaHeart/>

Add Favourite


</button>


);


}


export default FavouriteButton;