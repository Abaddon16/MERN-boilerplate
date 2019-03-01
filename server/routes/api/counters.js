/*
 * Doctored by: Abaddon16
 * Document Function: Provide all the backend interaction code
 */

const Counter=require('../../models/Counter');

module.exports=(app) => {
	/**
	 * `GET`; returns the current list of counters
	 * Non-destructive, returns the same every time
	 */
	app.get('/api/counters', (req, res, next) => {
		Counter.find().exec()
			.then((counter) => res.json(counter)).catch((err) => next(err));
	});
	/**
	 * `POST`; returns a new Counter object
	 * Non-destructive, repeat submits create new w/ new _ids
	 */
	app.post('/api/counters', function(req, res, next) {
		const counter=new Counter();
		counter.save()
			.then(() => res.json(counter)).catch((err) => next(err));
	});
	/**
	 * `DELETE`; deletes specific _id's
	 * Destructive
	 */
	app.delete('/api/counters/:id', function(req, res, next) {
		Counter.findOneAndDelete({_id: req.params.id}).exec()
			.then((counter) => res.json()).catch((err) => next(err));
	});
	/**
	 * `PUT`; increments the specific counter _id
	 * Destructive update
	 */
	app.put('/api/counters/:id/increment', (req, res, next) => {
		Counter.findById(req.params.id).exec()
			.then((counter) => {
				counter.count++;
				counter.save()
					.then(() => res.json(counter)).catch((err) => next(err));
			}).catch((err) => next(err));
	});
	/**
	 * `PUT`; increments the specific counter _id
	 * Destructive update
	 */
	app.put('/api/counters/:id/decrement', (req, res, next) => {
		Counter.findById(req.params.id).exec()
			.then((counter) => {
				counter.count--;
				counter.save()
					.then(() => res.json(counter)).catch((err) => next(err));
			}).catch((err) => next(err));
	});
};
