exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('teams').insert([
        { name: "I'm Too Old for this Shit" },
        { name: 'The Peanut Gallery' },
        { name: 'Stuffing Studs' },
        { name: 'The Mooninites' },
        { name: "O'Trivia Newton John" },
        { name: "That's So Ke$ha" },
        { name: "Drop It Like It's Hoth" },
        { name: 'The Finer Things Club' },
        { name: "We're Just Guessing" },
        { name: 'Gnomies' },
        { name: 'Tequila Mockingbird' },
        { name: 'Can I Have Some Tots' },
        { name: 'Stone Cold Jane Austen' },
        { name: 'Shots In The Dark' },
        { name: 'Toto By Africa' },
        { name: 'E=MC Vagina' },
        { name: 'Dirty Mike And Da Boyz' },
        { name: 'Good News Bears' },
        { name: 'The Gruesome Twosome' },
        { name: 'Blobs Burgers' },
        { name: 'Coronas And Limes' },
        { name: "Stevie Wonder's Driving School" }
      ]);
    });
};
