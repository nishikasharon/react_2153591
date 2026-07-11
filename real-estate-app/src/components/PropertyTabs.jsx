import {

Tab,

Tabs,

TabList,

TabPanel

}

from "react-tabs";


import "react-tabs/style/react-tabs.css";



function PropertyTabs({

property

}){


return (

<Tabs>


<TabList>


<Tab>

Description

</Tab>


<Tab>

Floor Plan

</Tab>


<Tab>

Map

</Tab>


</TabList>




<TabPanel>


<h3>

Property Description

</h3>


<p>

{
property.description
}

</p>


</TabPanel>




<TabPanel>


<h3>

Floor Plan

</h3>



<img


src={
property.floorplan
}


alt="Floor plan"


className="floor-plan"


/>



</TabPanel>





<TabPanel>


<h3>

Location

</h3>



<iframe


title="Google Map"


width="100%"


height="400"


style={{
border:0
}}


loading="lazy"


src={

`https://maps.google.com/maps?q=${property.lat},${property.lng}&output=embed`

}


/>



</TabPanel>




</Tabs>

);


}



export default PropertyTabs;