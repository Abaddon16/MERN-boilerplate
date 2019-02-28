const Creature = require('../../models/Creature');

module.exports = (app) => {
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
  app.post('/api/creatures/:name', function (req, res, next) {
    const creature = new Creature({name: req.params.name});
    creature.save()
      .then(() => res.json(creature)).catch((err) => next(err));
  });
}