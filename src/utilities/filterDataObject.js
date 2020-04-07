import * as _ from "lodash";

/* TODO: update function notation and documentation */
const FilterDataObject = (data, filter) => {
    const tmp = [];
    data.map(item => {
      if( filter === null || _.includes( item.name.toString().toLowerCase(), filter.toString().toLowerCase() ) ) {
        tmp.push(item);
      }
      return null;
    })
    return tmp;
};

export default FilterDataObject;
