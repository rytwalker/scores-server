exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('teams').insert([
        { name: "I'm Too Old for this Shit" },
        { name: 'The Peanut Gallery' },
        { name: 'Stuffing Studs' }
      ]);
    });
};
