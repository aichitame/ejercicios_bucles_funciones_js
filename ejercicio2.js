//Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  let countBefore2000 = 0;
  let countAfter2000 = 0;

  for (let i = 0; i < movies.length; i++){
    const movie = movies[i];
    if(movie.releaseYear < 2000){
        console.log("La película " + movie.title + " es de antes del 2000");
        countBefore2000++;
    }else{
        console.log("La película " + movie.title + " es de después del 2000")
        countAfter2000++;
    }
  }

  console.log("")
  console.log("Películas de antes del 2000: " + countBefore2000);
  console.log("Películas de después del 2000: " + countAfter2000);
  