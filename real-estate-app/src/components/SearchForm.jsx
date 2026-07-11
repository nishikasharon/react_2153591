import {
useState
}
from "react";


import DropdownList from "react-widgets/DropdownList";

import NumberPicker from "react-widgets/NumberPicker";

import DatePicker from "react-widgets/DatePicker";

import { filterProperties }
from "../utils/searchFilter";



function SearchForm({
properties,
setResults
}){


const [
criteria,
setCriteria
]
=
useState({});



function update(field,value){

setCriteria({

...criteria,

[field]:value

});

}



function handleSearch(){


const filtered =
filterProperties(
properties,
criteria
);


setResults(filtered);


}



function clearSearch(){


setCriteria({});

setResults(properties);


}



return (

<div className="search-form">


<h3>
Search Properties
</h3>



<label>
Property Type
</label>


<DropdownList

data={[
"any",
"house",
"flat"
]}

value={
criteria.type || "any"
}

onChange={
value =>
update(
"type",
value
)
}

/>



<label>
Minimum Price
</label>


<NumberPicker

placeholder="Min price"

value={
criteria.minPrice
}

onChange={
value =>
update(
"minPrice",
value
)
}

/>




<label>
Maximum Price
</label>


<NumberPicker


placeholder="Max price"


value={
criteria.maxPrice
}


onChange={
value =>
update(
"maxPrice",
value
)
}

/>




<label>
Minimum Bedrooms
</label>


<NumberPicker


placeholder="Bedrooms"


value={
criteria.minBedrooms
}


onChange={
value =>
update(
"minBedrooms",
value
)
}

/>




<label>
Maximum Bedrooms
</label>


<NumberPicker


placeholder="Bedrooms"


value={
criteria.maxBedrooms
}


onChange={
value =>
update(
"maxBedrooms",
value
)
}

/>



<label>
Added After
</label>


<DatePicker


value={
criteria.dateAdded
}


onChange={
value =>
update(
"dateAdded",
value
)
}


/>



<label>
Postcode Area
</label>


<input


type="text"


placeholder="BR1"


value={
criteria.postcode || ""
}


onChange={
e =>
update(
"postcode",
e.target.value
)
}


/>



<button

onClick={handleSearch}

>

Search

</button>




<button

onClick={clearSearch}

>

Clear

</button>


</div>

);

}


export default SearchForm;