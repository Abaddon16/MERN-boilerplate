const Creature=require('../../models/Creature');

module.exports=(app) => {
    /**
   * `GET`; returns the current list of things
   * Non-destructive, returns the same every time
   */
	app.get('/api/creatures', (req, res, next) => {
		Creature.find().exec()
			.then((creature) => res.json(creature)).catch((err) => next(err));
	});
	/**
	 * `POST`; returns a new Creature object
	 * Non-destructive, repeat submits create new w/ new _ids
	 */
	app.post('/api/creatures/:name', function(req, res, next) {
		//* Pulls data from the request body now instead of just the URL, allowing more data to be handled
		//? Remove the `:name` from the URL, make it a `/new` endpoint?
		//? check if request body is empty? what if someone navs to the endpoint directly??
		const creature=new Creature(req.body);//! Need to better process this data - just inserting whatever willy-nilly is _bad_
		creature.save()
			.then(() => res.json(creature)).catch((err) => next(err));
	});
	// TODO: Creature routing - Add a GET for a single creature, will return drastically different page though... maybe return a redirect somehow?
}