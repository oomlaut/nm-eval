import * as _ from "lodash"

/* Summary:
    Uses lodash in iterating over the data object
    lodash comes along for free with React packages
    Eliminates indexed values based on the provided filter criteria
    */

/* TODO: update function notation and documentation depending on team styles/standards if applicable */
const filterDataObject = (data, index, filter) => {
    const tmp = []
    data.map(item => {
      /* TODO: investigate how to import only the necessary 'includes' function instead of the whole lodash package */
      if( filter === null || filter === undefined || _.includes( item[index].toString().toLowerCase(), filter.toString().toLowerCase() ) ) {
        tmp.push(item)
      }
      return null
    })
    return tmp
}

export default filterDataObject
