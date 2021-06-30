function formatJobType(job_type) {
    //formatting job_type so that it is readable for the API 
    switch (job_type) {
        case "Demolition":
            return "DM"
        case "New Building":
            return "NB"
        case "Building Alteration":
            return "A1"
        // A1 indicates major alteration according to DOB data guide
    }
}

module.exports = formatJobType