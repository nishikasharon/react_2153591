import {
useParams
}
from "react-router-dom";


import properties from "../data/properties.json";


import PropertyGallery 
from "../components/PropertyGallery";


import PropertyTabs 
from "../components/PropertyTabs";


import FavouriteButton 
from "../components/FavouriteButton";



function PropertyPage(){


const {
id
}
=
useParams();



const property =
properties.find(

item =>
item.id === Number(id)

);



if(!property){

return (

<h2>
Property not found
</h2>

);

}



return (

<div className="property-page">



<h1>

{
property.location
}

</h1>




<div className="property-summary">


<h2>

£
{
property.price.toLocaleString()
}

</h2>



<p>

{
property.type
}

</p>



<p>

{
property.bedrooms
}
Bedrooms

</p>



<p>

Postcode:

{
property.postcode
}

</p>


<FavouriteButton

property={property}

/>


</div>




<PropertyGallery

images={
property.images
}

/>



<PropertyTabs

property={
property
}

/>



</div>


);


}



export default PropertyPage;