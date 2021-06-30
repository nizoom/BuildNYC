function formatYear(year) {
    //format year so that it can be readable by API 
    const nextYear = parseInt(year, 10) + 1

    nextYear.toString();

    const formattedYear = `${year}-01-01T12:00:00`;

    const formattedNextYear = `${nextYear}-1990-01-01T12:00:00`;

    //console.log(formattedYear + " and " + formattedNextYear)

    //console.log([formattedYear, formattedNextYear])

    return [formattedYear, formattedNextYear]
}

//formatYear(1990)

module.exports = formatYear;