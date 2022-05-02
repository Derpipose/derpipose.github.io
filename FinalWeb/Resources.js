window.onload = function (){
    document.getElementById("races").addEventListener("click", function(){Races()});
    document.getElementById("spells").addEventListener("click", function(){Spells()});
    document.getElementById("classes").addEventListener("click", function(){Classes()});

}
let localHostNum = 5084



function Races(){
    //row 1
    //clearing the lower rows
    var row2 = document.getElementById("row2");
    var row3 = document.getElementById("row3");
    var row4 = document.getElementById("row4");
    var row5 = document.getElementById("row5");
    wipeRow(row2);
    wipeRow(row3);
    wipeRow(row4);
    wipeRow(row5);

    fetch(`http://localhost:${localHostNum}/races`)
    .then((result) => result.json() 
        .then((sheet) => {
            const campaigns = [];
            sheet.forEach(element => {if(campaigns.includes(element.campaign)){}else{campaigns.push(element.campaign);}});
            // Just a test to see if my event listener was working
            // var myDiv = document.getElementById("row2");
            // var button = document.createElement("BUTTON");
            // button.innerHTML = "Button";
            // myDiv.appendChild(button);
            var myDiv = document.getElementById("row2");
            campaigns.forEach(element => {

                var button = document.createElement("BUTTON");
                button.innerHTML = element;
                button.addEventListener("click", function(){Campaigns(element)});
                myDiv.appendChild(button);
            });
            console.log(campaigns);
        })
    );
}

function Campaigns(campaign){
    //row 2
    //clearing the lower rows
    var row3 = document.getElementById("row3");
    var row4 = document.getElementById("row4");
    var row5 = document.getElementById("row5");
    wipeRow(row3);
    wipeRow(row4);
    wipeRow(row5);

    fetch(`http://localhost:${localHostNum}/racescampaign?campaign=${campaign}`)
    .then((result) => result.json()
        .then((sheet) =>{
            const subraces = [];
            sheet.forEach(element=> {if(subraces.includes(element.subtype)){}else{subraces.push(element.subtype);}});
            var myDiv = document.getElementById("row3");
                subraces.forEach(element => {

                    var button = document.createElement("BUTTON");
                    button.innerHTML = element;
                    button.addEventListener("click", function(){Subraces(campaign, element)});
                    myDiv.appendChild(button);
                });
            console.log(subraces);
        })
    );
}

function Subraces(campaign, subrace){
    //row 3
    //clearing the lower rows
    var row4 = document.getElementById("row4");
    var row5 = document.getElementById("row5");
    wipeRow(row4);
    wipeRow(row5);

    fetch(`http://localhost:${localHostNum}/racescampaignsubraces?campaign=${campaign}&faction=${subrace}`)
    .then((result) => result.json()
        .then((sheet) =>{
            const subraces = [];
            sheet.forEach(element=> {if(subraces.includes(element.name)){}else{subraces.push(element.name);}});
            var myDiv = document.getElementById("row4");
                subraces.forEach(element => {

                    var button = document.createElement("BUTTON");
                    button.innerHTML = element;
                    button.addEventListener("click", function(){RaceInformation(campaign, subrace, element)});
                    myDiv.appendChild(button);
                });
            console.log(sheet);
        })
    );
}

function RaceInformation(campaign, subrace, name){
    //row 4
    //clearing the lower rows
    var row5 = document.getElementById("row5");
    wipeRow(row5);

    fetch(`http://localhost:${localHostNum}/racescampaignsubracesdescription?campaign=${campaign}&faction=${subrace}&raceName=${name}`)
    .then((result) => result.json()
        .then((element) =>{
            
            var myDiv = document.getElementById("row5");
            var p = document.createElement("p");
            p.innerHTML = element.description;
            myDiv.appendChild(p);
            
            console.log(element);
        })
    );
}

// function CampaignRaces(campaign){
//     fetch(`http://localhost:${localHostNum}/races`)
//         .then((result) => result.json() 
//         .then((sheet) => {
            
//             const campaigns = [];
//             sheet.forEach(element => {if(campaigns.includes(element.campaign)){}else{campaigns.push(element.campaign);}});
//             console.log(campaigns);
//         })
//     );
// }

function Spells(){
    // document.querySelectorAll("button").add("disabled");
    fetch(`http://localhost:${localHostNum}/spells`)
        .then((result) => result.json() 
        .then((sheet) => {
            
            const branch = [];
            sheet.forEach(element => {if(branch.includes(element.branch)){}else{branch.push(element.branch);}});
            console.log(branch);
        })
    );
}

function Classes(){
    fetch(`http://localhost:${localHostNum}/classes`)
        .then((result) => result.json() 
        .then((sheet) => {
            
            const type = [];
            sheet.forEach(element => {if(type.includes(element.subClass)){}else{type.push(element.subClass);}});
            console.log(type);
        })
    );
}

//With help from Josh
function wipeRow(row){
    while(row.firstChild){
        row.removeChild(row.lastChild);
    }
}