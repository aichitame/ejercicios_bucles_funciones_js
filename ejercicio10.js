//Desarrolla una función que reciba un país por parámetro y devuelva su capital.Utiliza un objeto para almacenar los países y sus capitales. 
//La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.

const capitals = [
{country:'Spain', capital: 'Madrid'},
    {country: 'France', capital: 'Paris'},
    {country: 'Italy', capital: 'Rome'},
    {country: 'Germany', capital: 'Berlin'},
    {country: 'Portugal', capital: 'Lisbon'},
    {country: 'Poland', capital: 'Warsaw'},
    {country: 'Greece', capital: 'Athens'},
    {country: 'Austria', capital: 'Vienna'},
    {country: 'Hungary', capital: 'Budapest'},
    {country: 'Ireland', capital: 'Dublin'},
    {country: 'Switzerland'}
];

function getCapital(country) {
    for (let i = 0; i < capitals.length; i++) {
        const capital = capitals[i];
        
    if(capital.country === country){
        if(capital.capital){
            return capital.capital;
        }else{
            return `No está registrada la capital de ${country}`
        }
    }
}

    return `El país "${country}" no está en la lista.`;
}

const capitalPais = getCapital("Italy");
console.log("La capital es: " + capitalPais);