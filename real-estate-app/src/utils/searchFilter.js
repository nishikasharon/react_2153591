export function filterProperties(properties, criteria) {

    return properties.filter(property => {


        // Property type
        if (
            criteria.type &&
            criteria.type !== "any" &&
            property.type !== criteria.type
        ) {
            return false;
        }


        // Minimum price
        if (
            criteria.minPrice &&
            property.price < criteria.minPrice
        ) {
            return false;
        }


        // Maximum price
        if (
            criteria.maxPrice &&
            property.price > criteria.maxPrice
        ) {
            return false;
        }


        // Minimum bedrooms
        if (
            criteria.minBedrooms &&
            property.bedrooms < criteria.minBedrooms
        ) {
            return false;
        }


        // Maximum bedrooms
        if (
            criteria.maxBedrooms &&
            property.bedrooms > criteria.maxBedrooms
        ) {
            return false;
        }


        // Date added after
        if (
            criteria.dateAdded &&
            new Date(property.dateAdded)
            <
            new Date(criteria.dateAdded)
        ) {

            return false;

        }


        // Postcode area
        if (
            criteria.postcode &&
            !property.postcode
            .toLowerCase()
            .startsWith(
                criteria.postcode.toLowerCase()
            )
        ) {

            return false;

        }


        return true;


    });

}