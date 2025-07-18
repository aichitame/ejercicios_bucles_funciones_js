//Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  const groupByGenre = {};

  for (const track of tracks){
    const genre = track.genre;

    if(!groupByGenre[genre]){
        groupByGenre[genre] = [];
    }
    groupByGenre[genre].push(track.title);
  }

  console.log(groupByGenre);
  