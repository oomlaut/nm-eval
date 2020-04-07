/* TODO: abstract API request to service layer */

/*
In other applications that I have written, this would consist of a dedicated Express
route that would accept  GET parameters (probably the `locale` as I have it lablled)
and form the request to the public API along with a token if applicable.

Then on receipt verify the integrity and expeced values, returning the data or
an appropriate status code to the Ajax process
*/
