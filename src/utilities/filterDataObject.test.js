import FilterDataObject from './filterDataObject'

let unfilteredData = [
  { name: 'Washington' },
  { name: 'Jefferson' },
  { name: 'Adams' }
]

let filteredData = [
  { name: 'Adams' }
]

test('FilterDataObject is a function', () => {
  expect(typeof FilterDataObject).toEqual('function')
})

test('FilterDataObject returns unchanged object with null filter', () => {
  expect(FilterDataObject( unfilteredData, 'name' )).toEqual(unfilteredData);
})

test('FilterDataObject filters on criteria', () => {
  expect(FilterDataObject( unfilteredData, 'name', 'ms' )).toEqual(filteredData)
})
