export default function lastDate(lastDate) {
 
    let dateNow = Date.now(),
        resultado = dateNow - toMilliseconds(lastDate),
        days = Math.floor(resultado / (1000*60*60*24));

    const numbers = ["", "", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"];

    if(days == 0) return "hoy";

    if(days == 1) return "hace un dia"
    if(days < 7) return `hace ${numbers[days]} dias`;

    let weeks = Math.floor(days / 7);
    if(weeks == 1) return "hace una semana";
    if(weeks < 4)  return `hace ${numbers[weeks]} semanas`;
    
    let months = Math.floor(weeks / 4);
    if(months == 1) return "hace un mes";
    if(months <= 12) return `hace ${numbers[months]} meses`;

    let years = Math.floor(months / 12);
    if(years == 1) return "hace un año";
    return `hace ${numbers[years]} años`;
}

function toMilliseconds(updatedAt) {

    let lastDate = updatedAt.slice(0, 10).split("-");
    const year = lastDate[0],
        month = lastDate[1]-1,
        day = lastDate[2]-1;
    
    lastDate = new Date(year, month, day);
    return Date.parse(lastDate);
}



