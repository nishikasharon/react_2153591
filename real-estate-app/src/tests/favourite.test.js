import {
renderHook,
act
}
from "@testing-library/react";


import {
FavouriteProvider,
FavouriteContext
}
from "../context/FavouriteContext";



test(
"does not allow duplicate favourites",
()=>{


const property={

id:1,

location:"London"

};



let value;



renderHook(

()=>{

value =
React.useContext(
FavouriteContext
);

},

{

wrapper:
FavouriteProvider

}

);



act(()=>{

value.addFavourite(property);

value.addFavourite(property);

});



expect(
value.favourites.length
)
.toBe(1);


});