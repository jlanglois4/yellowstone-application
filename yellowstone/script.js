$("#submitPersonal").click(function(e) {

    e.preventDefault()
    $('#position-tab').tab('show');
});

$("#submitPositions").click(function(e) {
    e.preventDefault()

    $('#work-tab').tab('show');
});

$("#submitWork").click(function(e) {
    e.preventDefault()
    $('#education-tab').tab('show');
});

$("#modalAccept").click(function(e) {
    e.preventDefault()
    $("#myModal").modal('hide');
});

$("#modalDecline").click(function(e) {
    e.preventDefault()
    window.location.replace("https://www.nps.gov/yell/index.htm");
});


function AddEntryLevelPositions(){
    var entryLevel = [
        "Dining Room Server Assistant",
        "Employee Dining Room Crew",
        "Fast Food Crew",
        "Kitchen Crew",
        "Laundry Help",
        "Room Attendant"
    ]

    for (let i = 0; i < entryLevel.length; i++) {
        $('#entryLevel').append($('<div class="col-md-6">'+ entryLevel[i] +'</div>'));
    }
}

function AddDriverPositions(){
    var driver = [
        "Boiler Service",
        "Bus Driver",
        "Campground Attendant",
        "Carpentry",
        "Carpet Cleaning",
        "Distribution",
        "Dock Helper",
        "Electrician",
        "Fire Systems",
        "Floor Cleaning",
        "Furniture Mover",
        "General Maintenance",
        "Heavy Equipment",
        "Kitchen",
        "Laundry",
        "Locksmith",
        "Marina Fishing",
        "Painter",
        "Recreation",
        "Security",
        "Tour Guide",
        "Vending"
    ]

    for (let i = 0; i < driver.length; i++) {
        $('#driver').append($('<div class="col-md-6">'+ driver[i] +'</div>'));
    }
}

function AddGeneralPositions(){
    var positions = [
        "Activities Sales Agent",
        "Administrative Assistant Maintenance",
        "Asst. HR Manager",
        "Audit Clerk",
        "Bar Lead",
        "Barista",
        "Bartender",
        "Bell Porter",
        "Cafeteria Management",
        "Camper Services Attendants",
        "Campground Management",
        "Chef",
        "Cocktail Server",
        "Cook",
        "Cookout Entertainer",
        "Dining Room Host",
        "Dining Room Host Lead",
        "Dining Room Management",
        "Dining Room Server",
        "Distribution Center Associate",
        "Distribution Lead",
        "Dorm Custodian",
        "Employee Dining Room Management",
        "Employee Pub Crew/Lead",
        "Fast Food Management",
        "Finish Floor Supervisor",
        "Food and Beverage Management",
        "Food and Beverage Office Assistant",
        "Front Office Management",
        "General Accounting Office",
        "Guest Services Agent",
        "Guest Services Agent (Campground)",
        "Housekeeping Management",
        "Housekeeping Room Inspector",
        "Housekeeping Trainer",
        "Housekeeping Office Assistant",
        "Housing Manager",
        "Internship",
        "Location Controller/Assistant",
        "Night Auditor",
        "Night Guest Services Agent",
        "Pantry Supervisor",
        "Personnel Management",
        "Pianist",
        "Porter",
        "Preservation Maintenance Crew Craftsperson",
        "Reservations Sales Agent",
        "Residence Coordinator",
        "Retail Management",
        "Retail Sales Associate",
        "R&amp;M Staff Assistant",
        "Seamstress",
        "Senior Guest Services Agent (Campground)",
        "Snack Shop / Deli Supervisor",
        "Sous Chef",
        "Steward",
        "Storekeeper",
        "Traveling Night Auditor",
        "Vending Clerk",
        "Vending Service Technician",
        "Warehouse Manager",
        "Warehouse Help",
        "Wash Deck Supervisor",
        "Wash Deck Lead",
        "Wrangler/Driver"
    ]

    for (let i = 0; i < positions.length; i++) {
        $('#general').append($('<div class="col-md-6">'+ positions[i] +'</div>'));
    }
}

$(document).ready(function(){
    $("#myModal").modal('show');
    AddEntryLevelPositions()
    AddDriverPositions()
    AddGeneralPositions()
});

$("#startDate").click(function(e) {
    e.preventDefault()
    $('#startDate').pickadate({ format: 'mmmm, d, yyyy' });
});

$("#endDate").click(function(e) {
    e.preventDefault()
    $('#endDate').pickadate({ format: 'mmmm, d, yyyy' });
});

$("#employerStartDate").click(function(e) {
    e.preventDefault()
    $('#employerStartDate').pickadate({ format: 'mmmm, d, yyyy' });
});

$("#employerEndDate").click(function(e) {
    e.preventDefault()
    $('#employerEndDate').pickadate({ format: 'mmmm, d, yyyy' });
});