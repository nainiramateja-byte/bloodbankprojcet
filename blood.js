let services = [

    {
        title:"Blood Donation",

        image:
        "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=85",

        description:
        "Blood donation is an important community service. Donated blood can support patients during medical treatment, surgery and emergencies.",

        extra:
        "LifeConnect provides a simple donor registration system where users can provide their basic donor details.",

        related:[
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        title:"Blood Testing",

        image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",

        description:
        "Blood testing is an important part of blood bank services. Blood samples are tested according to required medical procedures.",

        extra:
        "Proper testing and processing help maintain organized blood bank operations.",

        related:[
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        title:"Blood Storage",
        image:
        "ff.avif",

        description:
        "Blood storage involves organized management of blood according to blood group and availability.",

        extra:
        "The Blood Stock section provides a simple visual representation of blood group availability.",

        related:[
            "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1581093458791-9d42e3c6f7a4?auto=format&fit=crop&w=800&q=80",

             "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        title:"Hospital Support",

        image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",

        description:
        "Blood banks work with hospitals to support patients who require blood or blood components.",

        extra:
        "LifeConnect includes a Blood Request page where hospital and patient details can be entered.",

        related:[
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        title:"Medical Team",

        image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85",

        description:
        "Medical professionals play an important role in blood collection, testing and patient support.",

        extra:
        "A coordinated medical team helps maintain organized blood bank activities.",

        related:[
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
        ]
    },


    {
        title:"Emergency Support",

        image:
        "ww.webp",

        description:
        "Emergency blood support is important when patients require blood urgently during medical emergencies.",

        extra:
        "LifeConnect provides blood group information and blood request functionality for this project.",

        related:[
            "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",

            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
        ]
    }

];


/* ==================================================
   LOAD SERVICE CARDS
================================================== */

function loadServices(){

    let container =
        document.getElementById("serviceCards");

    container.innerHTML="";

    services.forEach(function(service,index){

        container.innerHTML += `

            <div
                class="card"
                onclick="showDetails(${index})">

                <img
                    src="${service.image}"
                    alt="${service.title}">

                <div class="card-content">

                    <h3>
                        ${service.title}
                    </h3>

                    <p>
                        ${service.description.substring(0,120)}...
                    </p>

                    <button class="view-btn">
                        View Full Details
                    </button>

                </div>

            </div>

        `;

    });

}


/* ==================================================
   NAVIGATION
================================================== */

function showPage(pageId,button){

    let pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page){

        page.classList.remove("active");

    });


    document
        .getElementById(pageId)
        .classList.add("active");


    let buttons =
        document.querySelectorAll(".nav-links button");

    buttons.forEach(function(btn){

        btn.classList.remove("active");

    });


    if(button){
        button.classList.add("active");
    }

    window.scrollTo(0,0);

}


function showPageById(pageId){

    showPage(pageId);

}


/* ==================================================
   SERVICE DETAILS
================================================== */

function showDetails(index){

    let service =
        services[index];


    document.getElementById("detailTitle")
        .innerHTML = service.title;


    document.getElementById("detailImage")
        .src = service.image;


    document.getElementById("detailDescription")
        .innerHTML = service.description;


    document.getElementById("detailExtra")
        .innerHTML = service.extra;


    document.getElementById("detailWhy")
        .innerHTML =
        "This service supports organized blood bank operations and can help connect donors, hospitals and patients.";


    document.getElementById("detailWho")
        .innerHTML =
        "Donors, volunteers, hospitals and medical organizations can participate in blood bank activities.";


    document.getElementById("detailSupport")
        .innerHTML =
        "LifeConnect provides donor registration, blood stock information, blood requests and service details.";


    let related =
        document.getElementById("relatedImages");

    related.innerHTML="";


    service.related.forEach(function(image){

        let img =
            document.createElement("img");

        img.src=image;

        img.onclick=function(){

            document.getElementById("detailImage")
                .src=image;

        };

        related.appendChild(img);

    });


    document.getElementById("detailModal")
        .style.display="block";


    document.body.style.overflow="hidden";

}


function closeDetails(){

    document.getElementById("detailModal")
        .style.display="none";

    document.body.style.overflow="auto";

}


/* ==================================================
   BLOOD STOCK RECEIPT
================================================== */

let bloodUnits = {

    "A+":24,
    "A-":12,
    "B+":18,
    "B-":8,
    "AB+":10,
    "AB-":5,
    "O+":30,
    "O-":7

};


function showReceipt(group){

    let receiptID =
        "LB-" +
        Math.floor(
            100000 +
            Math.random()*900000
        );


    let today =
        new Date().toLocaleDateString();


    document.getElementById(
        "receiptBloodGroup"
    ).innerHTML=group;


    document.getElementById(
        "receiptId"
    ).innerHTML=receiptID;


    document.getElementById(
        "receiptGroup"
    ).innerHTML=group;


    document.getElementById(
        "receiptUnits"
    ).innerHTML=
        bloodUnits[group]+" Units";


    document.getElementById(
        "receiptDate"
    ).innerHTML=today;


    document.getElementById(
        "receiptModal"
    ).style.display="block";


    document.body.style.overflow="hidden";

}


function closeReceipt(){

    document.getElementById(
        "receiptModal"
    ).style.display="none";


    document.body.style.overflow="auto";

}


/* ==================================================
   DONOR
================================================== */

function registerDonor(){

    let name =
        document.getElementById("donorName").value;

    let age =
        document.getElementById("donorAge").value;

    let phone =
        document.getElementById("donorPhone").value;

    let group =
        document.getElementById("donorGroup").value;

    let city =
        document.getElementById("donorCity").value;


    if(
        name==="" ||
        age==="" ||
        phone==="" ||
        group==="" ||
        city===""
    ){

        alert("Please fill all donor details");

        return;

    }


    document.getElementById(
        "donorMessage"
    ).innerHTML =
        "✓ Thank you "+name+
        "! Your "+group+
        " donor registration has been submitted.";

    document.getElementById(
        "donorMessage"
    ).style.color="#258653";

}


/* ==================================================
   BLOOD REQUEST
================================================== */

function submitRequest(){

    let patient =
        document.getElementById("patientName").value;

    let hospital =
        document.getElementById("hospitalName").value;

    let group =
        document.getElementById("requestGroup").value;

    let units =
        document.getElementById("units").value;


    if(
        patient==="" ||
        hospital==="" ||
        group==="" ||
        units===""
    ){

        alert("Please fill all request details");

        return;

    }


    document.getElementById(
        "requestMessage"
    ).innerHTML =
        "✓ Blood request submitted for "+
        patient+" ("+group+").";


    document.getElementById(
        "requestMessage"
    ).style.color="#258653";

}


/* ==================================================
   CONTACT
================================================== */

function sendMessage(){

    alert(
        "Thank you! Your message has been submitted."
    );

}


/* ==================================================
   LOGOUT
================================================== */

function logout(){

    alert("Logged out successfully.");

    showPage("home");

}


/* ==================================================
   PAGE LOAD
================================================== */

window.onload=function(){

    loadServices();

    showPage("home");

};