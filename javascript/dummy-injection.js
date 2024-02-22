
function prepopulateData(){
    prepopulatedData = []
    const information = {
        Number: "000",
        Name: "John Doe",
        startDate: "2001-01-01",
        endDate: "2001-01-01",
    }
    
    let dataCount = 3;
    for(let i = 0; i < dataCount; i++){
        prepopulatedData.push(information)
    }
    
    localStorage.setItem("userProfileStandart", JSON.stringify(prepopulatedData))
    localStorage.setItem("userProfileDeluxe", JSON.stringify(prepopulatedData))
    localStorage.setItem("userProfileSuperior", JSON.stringify(prepopulatedData))
}

prepopulateData();