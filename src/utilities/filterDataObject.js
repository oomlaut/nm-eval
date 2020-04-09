import * as _ from "lodash"

/* Summary:
    Expects index and filter parameters, but will return the unchanged data object if either are missing
    Uses lodash in comparing the strings while iterating over the data object
    lodash comes along for free with React packages
    Eliminates indexed values based on the provided filter criteria
    */

/* TODO: update function notation and documentation depending on team styles/standards if applicable */
const filterDataObject = (data, index = '', filter = '') => {
  /* if either string index or filter are absent, return the data unchanged */
  if ( (index || filter) === (null || '') ) {
    return data
  }

  /* the `includes` function expects strings, so do some work on the values so they're always strings in lower case */
  const normalize = val => val.toString().toLowerCase()

  /* TODO: investigate how to import only the necessary 'includes' function instead of the whole lodash package */
  return data.filter( item => _.includes( normalize( item[index] ), normalize( filter ) ) )
}

export default filterDataObject
