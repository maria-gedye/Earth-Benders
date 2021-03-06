
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('landmark').del()
    .then(function () {
      // Inserts seed entries
      return knex('landmark').insert([
        {id: 1, name: 'Sky Tower', description: "Experience an icon of Auckland's city skyline", ticket_link: 'https://skycityauckland.co.nz/sky-tower/admissions/', image:'/images/images/sky-tower.jpg', city_id: 0},
        {id: 2, name: 'Waiheke Island', description: 'Discover a slice of paradise with beautiful beaches and over 30 wineries ', ticket_link: 'https://www.waiheke.co.nz', image:'/images/images/waiheke-island.jpg', city_id: 0},
        {id: 3, name: 'Kelly Tarltons Aquarium', description: "Visit the world's largest penguin colony exhibit", ticket_link: 'https://www.kellytarltons.co.nz/price-table/', image:'/images/images/kelly-tarltons.jpg', city_id: 0}, 
        {id: 4, name: 'Auckland Museum', description: 'Explore one of the finest Museums in the Southern Hemisphere', ticket_link: 'https://www.aucklandmuseum.com/visit/plan-your-visit/hours-and-admission', image:'/images/images/Auckland-museum-v1.jpg', city_id: 0}
      ]);
    });
  };
