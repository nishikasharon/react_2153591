import {
useState
}
from "react";


function PropertyGallery({

images

}){


const [

mainImage,

setMainImage

]

=
useState(
images[0]
);



return (

<div className="gallery">



<img

className="main-image"

src={
mainImage
}

alt="Property main view"

/>




<div className="thumbnail-container">


{

images.map(

(image,index)=>(


<img


key={index}


className="thumbnail"


src={image}


alt={`thumbnail ${index}`}


onClick={

()=>setMainImage(image)

}


/>


)

)


}



</div>



</div>

);


}



export default PropertyGallery;