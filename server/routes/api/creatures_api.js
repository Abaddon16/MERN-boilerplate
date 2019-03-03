const Creature=require('../../models/CreatureModel');

module.exports=(app) => {
	/**
     * `GET`; returns the current list of things
     * Non-destructive, returns the same every time
     */
	app.get('/api/creatures', (req, res, next) => {
		Creature.find().exec().then((creature) => res.json(creature)).catch((err) => next(err));
	});
	/**
     * `GET`; returns the clicked thing
     * Non-destructive, returns the same every time
     */
	app.get('/api/creatures/:id', (req, res, next) => {
		Creature.findById(req.params.id).exec().then((creature) => res.json(creature)).catch((err) => next(err));
	});
	/**
	 * `POST`; returns a new Creature object
	 * Non-destructive, repeat submits create new w/ new _ids
	 */
	app.post('/api/creatures/:name', function(req, res, next) {
		//* Pulls data from the request body now instead of just the URL, allowing more data to be handled
		//? Remove the `:name` from the URL, make it a `/new` endpoint?
		//? check if request body is empty? what if someone navs to the endpoint directly??
		const thing={};
		for (let x in req.body) {
			if (req.body[x]!='') {
				thing[x]=req.body[x];
			}
		}
		const creature=new Creature(thing);//! Need to better process this data - just inserting whatever willy-nilly is _bad_... probably? It doesn't add if it wasn't in the model
		creature.save().then(() => res.json(creature)).catch((err) => next(err));
	});
	// TODO: Creature routing - Add a GET for a single creature, will return drastically different page though... maybe return a redirect somehow?
}