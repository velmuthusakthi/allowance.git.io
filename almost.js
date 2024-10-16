
let url ='https://script.google.com/macros/s/AKfycbxxZ2Kjg5Uuil3FKuccZCUD1Gij6R_v4eaawJhWhH-uUQHxhjJaEzsYdwfJHDz8k-4G/exec';
let form=document.querySelector('#form');
form.addEventListener("submit",(e)=>{
e.target.btn.innerHTML="Submitting.....";
let d =new FormData(form);
fetch(url,{method:"POST",
    body:d
}).then((res)=>res.text())
.then((finalRes)=>{
    e.target.btn.innerHTML="Submit";
    document.getElementById("res").innerHTML=finalRes;
    form.reset();
     setTimeout(()=>{
        document.getElementById("res").innerHTML=""; 
     },3000)        
})
e.preventDefault();
})
// Example data for blocks and names with amounts
const blockData = {
    "BLOCK A": {
        "VALLIYAMMAL": {"amount": "3500.00"},
"JEYALAKSHMI": {"amount": "3500.00"},
"ARPUTHAKANI": {"amount": "3500.00"},
"SENDHURKANI": {"amount": "3500.00"},
"GRACE": {"amount": "3500.00"},
"MANUVEL": {"amount": "3700.00"},
"VELSAMY": {"amount": "3700.00"},
"MARIYA SELVAM": {"amount": "3700.00"},
"KARNAN": {"amount": "3200.00"},
"IRUTHAYARAJ": {"amount": "2400.00"},
"SHANTHI": {"amount": "3500.00"},
"SOUNDRAWALLI": {"amount": "3500.00"},
"PRAVEEN KUMAR": {"amount": "3500.00"},
"RAMALATHA": {"amount": "3500.00"},
"MALAVALLI": {"amount": "3500.00"},
"KANIYAMMAL": {"amount": "3500.00"},
"SELVAMARY": {"amount": "2500.00"},
"VASANTHA": {"amount": "2500.00"},
"PARIMALA": {"amount": "3700.00"},
"KARUPPASAMY": {"amount": "3700.00"},
"SASIKALA": {"amount": "3700.00"},
"YESUBALAN": {"amount": "2800.00"},
"MUTHUSAMY": {"amount": "2800.00"},
},
"BLOCK B": {
"SENDHURKANI": {"amount": "3500.00"},
"GRACE": {"amount": "3500.00"},
"MANUVEL": {"amount": "3700.00"},
"VELSAMY": {"amount": "3700.00"},
"MUNIYAMMAL": {"amount": "3500.00"},
"MUTHU MUNIYAMMAL": {"amount": "3500.00"},
"VEERA SAKKAMMAL": {"amount": "3500.00"},
"MUTHUMARI": {"amount": "3500.00"},
"KANNIYAMMAL": {"amount": "3500.00"},
"YESUDHASAN": {"amount": "3700.00"},
"THANGAMARIAPPAN": {"amount": "3700.00"},
"SIVARAMA SUBRAMANIYAN": {"amount": "3700.00"},
"MARIAPPAN": {"amount": "3700.00"},
"MUNIYASAMY": {"amount": "3100.00"},
"NITHYA": {"amount": "3500.00"},
"MARIYAMMAL": {"amount": "3500.00"},
"SELVI": {"amount": "3500.00"},
"MALLIKA": {"amount": "3500.00"},
"VALLIYAMMAL": {"amount": "3500.00"},
"SASIKALA": {"amount": "3500.00"},
"NAGESWARI": {"amount": "2700.00"},
"ARUMUGAM": {"amount": "2400.00"},
"SETHULAKSHMI": {"amount": "2200.00"},
"STEELA RANI": {"amount": "1900.00"},
"UMAIYAMMAL": {"amount": "1900.00"},
"MUNEESWARI": {"amount": "1800.00"},
"VIJAYA": {"amount": "1800.00"},
"RAJAPANDI": {"amount": "3700.00"},
"ANTHONY PACKIYAM": {"amount": "3700.00"},
"THANGA MARIAPPAN": {"amount": "3700.00"},
"VIJAY": {"amount": "2800.00"},
"GANAM": {"amount": "2800.00"},
},
"C,M,N BLOCK": {
"RAMTHAI": {"amount": "3500.00"},
"MUTHUMARI": {"amount": "3500.00"},
"IRULAYEE": {"amount": "3500.00"},
"PACKIYAM": {"amount": "3500.00"},
"SIVAKALLI": {"amount": "3500.00"},
"GOKILA": {"amount": "3500.00"},
"MARUTHAVALLI": {"amount": "3500.00"},
"SEKAR": {"amount": "3500.00"},
"CHITRADEVI": {"amount": "3500.00"},
"KAVIPRIYA": {"amount": "3500.00"},
"KALIAMMAL": {"amount": "3500.00"},
"POORNAVALLI": {"amount": "3200.00"},
"UTHIRAKANI": {"amount": "2700.00"},
"MUTHULAKSHMI": {"amount": "2100.00"},
"M.KALA": {"amount": "3700.00"},
"PAULPANDI": {"amount": "3700.00"},
"MURUGAN": {"amount": "3700.00"},
"RAJ": {"amount": "2800.00"},
"ARUMUGAM": {"amount": "2600.00"},
"UTHAMI": {"amount": "3500.00"},
"THANGAMARI": {"amount": "3500.00"},
"PANJAVARNAM": {"amount": "3500.00"},
"KALA": {"amount": "3500.00"},
"G.SELVI": {"amount": "3500.00"},
"MUTHAMMAL": {"amount": "3500.00"},
"MURUGALAKSHMI": {"amount": "3500.00"},
"S.LAKSHMI": {"amount": "3400.00"},
"BANUMATHI": {"amount": "2500.00"},
"ANNALAKSHMI": {"amount": "3700.00"},
"JEYAM": {"amount": "3700.00"},
"KANIYAMMAL": {"amount": "3700.00"},
"MUNIYASAMY": {"amount": "2800.00"},
"TAMILARASI": {"amount": "3500.00"},
"AYYARAKKAL": {"amount": "3500.00"},
"KASTHURI": {"amount": "3500.00"},
"SHANMUGATHAI": {"amount": "3500.00"},
"THANGARAJ @ NAGARAJ": {"amount": "3500.00"},
"C/O": {"amount": "124800.00"},
"NAME": {"amount": "AMOUNT"},
"B/F": {"amount": "124800.00"},
"FRANCIS": {"amount": "3500.00"},
"MARIAMMAL": {"amount": "3500.00"},
"ARUMUGATHAI": {"amount": "3500.00"},
"SANKARAMMAL": {"amount": "3500.00"},
"ANTONY RAYAPPAN": {"amount": "3700.00"},
"PALANISAMY @ BALAMURUGAN": {"amount": "3700.00"},
"KANNAPIRAN": {"amount": "3700.00"},
"MURUGESAN @ KANAGARAJ": {"amount": "3700.00"},
"SANTHOSH KUMAR": {"amount": "3700.00"},
"PANDI": {"amount": "3700.00"},
"NAGARAJ @ MURUGESAN": {"amount": "3700.00"},
"RAMASAMY": {"amount": "3400.00"},
"MARIENDRAN": {"amount": "2400.00"},
},
"BLOCK D": {
"PETCHIAMMAL": {"amount": "3500.00"},
"MUTHU KARUPPAYE": {"amount": "3500.00"},
"PONNAMMAL": {"amount": "3500.00"},
"SHANMUGARAJ": {"amount": "3500.00"},
"BALAMURUGAN": {"amount": "3700.00"},
"RAJKUMAR": {"amount": "3700.00"},
"GANESHAN": {"amount": "3700.00"},
"RAJAKANI": {"amount": "3600.00"},
"M.BALAMURUGAN": {"amount": "2000.00"},
"K.MUTHUMARI": {"amount": "3500.00"},
"RAJA": {"amount": "3500.00"},
"B.SHANMUGAKANI": {"amount": "3500.00"},
"M.KANNAMMAL": {"amount": "3500.00"},
"KALIMUTHU": {"amount": "3500.00"},
"LINGAMMAL": {"amount": "3500.00"},
"SELVI": {"amount": "3500.00"},
"ASANTHA": {"amount": "3400.00"},
"SHAMUDRAVALLI": {"amount": "2900.00"},
"VELMURUGAN": {"amount": "3700.00"},
"MUNIYANDI": {"amount": "3700.00"},
"ETAPPAN": {"amount": "2800.00"},
},
"BLOCK E": {
"MARESHWARI": {"amount": "3500.00"},
"MARIAMMAL": {"amount": "3500.00"},
"SUNDARALAKSHMI": {"amount": "3500.00"},
"TAMILSELVI": {"amount": "3500.00"},
"DURAI": {"amount": "3700.00"},
"SUBBURAJ": {"amount": "3700.00"},
"JEVARATHINAM": {"amount": "3700.00"},
"KAVITHA": {"amount": "3500.00"},
"MURUGAVALLI": {"amount": "3500.00"},
"KASTHURI": {"amount": "3500.00"},
"SATHYA": {"amount": "3500.00"},
"JOTHI": {"amount": "3500.00"},
"SASIKUMAR": {"amount": "3500.00"},
"M.MUTHUMARI": {"amount": "3300.00"},
"M.MUTHAMMAL": {"amount": "3200.00"},
"SARAVANAN": {"amount": "3700.00"},
"SELVADURAI MURUGAN": {"amount": "3700.00"},
"GURUSAMY": {"amount": "2800.00"},
},
"BLOCK F": {
"SHANMUGAKANI": {"amount": "3500.00"},
"PONMADATHI": {"amount": "3500.00"},
"RAMU": {"amount": "3500.00"},
"CHINNA MADASAMY": {"amount": "3700.00"},
"MUNIYASAMY": {"amount": "3700.00"},
"VELCHAMY": {"amount": "3700.00"},
"SHANTHI": {"amount": "3500.00"},
"MURUGESWARI": {"amount": "3500.00"},
"VELLANKANNI": {"amount": "3500.00"},
"CHITHIRAIKANI": {"amount": "3500.00"},
"T.VELLAMMAL": {"amount": "3500.00"},
"LAKSHMI": {"amount": "3500.00"},
"VELLAMMAL": {"amount": "3500.00"},
"SELVA": {"amount": "2700.00"},
"SAVARIYAYEE": {"amount": "2100.00"},
"RAJEEV GANDHI": {"amount": "3700.00"},
"ANTONYAMMAL": {"amount": "3700.00"},
"KAMALAKANNAN": {"amount": "2800.00"},
},
"BLOCK G": {
"MUTHAMMAL": {"amount": "3500.00"},
"SARASWATHI": {"amount": "3500.00"},
"POOCHAMMAL": {"amount": "3500.00"},
"KARUPASAMY": {"amount": "3700.00"},
"ANTONY": {"amount": "3700.00"},
"MARIMUTHU": {"amount": "3700.00"},
"SARASWATHI": {"amount": "3500.00"},
"JEYAMARI": {"amount": "3500.00"},
"MUNIYAMMAL": {"amount": "3500.00"},
"SHANMUGAVALLI": {"amount": "3500.00"},
"RAJESHWARAN": {"amount": "3500.00"},
"VENNILA": {"amount": "3500.00"},
"SOOLAIYAMMAL": {"amount": "3500.00"},
"SELVI": {"amount": "3500.00"},
"RAJESHWARI": {"amount": "2400.00"},
"MARIAMMAL": {"amount": "2300.00"},
"GOVINDARAJAN": {"amount": "3700.00"},
"ABINAYA": {"amount": "3700.00"},
"ARUNKUMAR": {"amount": "2800.00"},
},
"H,I,J,L,G & O (New) BLOCK": {
"ELLAMMAL": {"amount": "3500.00"},
"MALAISAMY": {"amount": "3500.00"},
"MUNIYASAMY": {"amount": "3500.00"},
"MARIYAMMAL": {"amount": "3500.00"},
"LAKSHMI": {"amount": "3500.00"},
"PANCHAVARNAM": {"amount": "3500.00"},
"SURESH MUTHUVEL": {"amount": "3500.00"},
"JEYAPANDI": {"amount": "3500.00"},
"CHENTHURPANDI": {"amount": "3700.00"},
"AJITHKUMAR": {"amount": "3700.00"},
"SAHAYA SELVI": {"amount": "3700.00"},
"KATHIRVEL MURUGAN": {"amount": "3700.00"},
"STEPHEN": {"amount": "3700.00"},
"MUNEESHWARI": {"amount": "3500.00"},
"ABIRAMI": {"amount": "3500.00"},
"LAKSHMI": {"amount": "3500.00"},
"BHARATHA SELVI": {"amount": "3500.00"},
"SHANTHI": {"amount": "3500.00"},
"ARUMUGADEVI": {"amount": "3500.00"},
"THIRUMALAI SELVI": {"amount": "3500.00"},
"MUTHUMARI": {"amount": "3500.00"},
"ANGALA ESWARI": {"amount": "3500.00"},
"PACKIYAM": {"amount": "3500.00"},
"RAMALAKSHMI": {"amount": "3500.00"},
"VALARMATHI": {"amount": "3500.00"},
"MARIMUTHU": {"amount": "3500.00"},
"ALAGHU MURUGAN": {"amount": "3700.00"},
"ARUNPANDI": {"amount": "3700.00"},
"PACKIYARAJ": {"amount": "3700.00"},
"MATHARAI PAUL": {"amount": "3700.00"},
"ANTONY SEELAN": {"amount": "2800.00"},
"MUTHUSELVAM": {"amount": "2800.00"},
},
"P BLOCK Ist ROW": {
"RATHI": {"amount": "3500.00"},
"RAMACHANDRAN": {"amount": "3500.00"},
"PACKIYARAJ": {"amount": "3500.00"},
"LOURTHU PACKIYA SUVITHA": {"amount": "3500.00"},
"MOTCHA MERY": {"amount": "3700.00"},
"SAVARIMUTHU": {"amount": "3700.00"},
"MARIESHWARAN": {"amount": "3600.00"},
"MARIYA ANATHARAJ": {"amount": "3400.00"},
"KALEESHWARI": {"amount": "3500.00"},
"M.VALLI": {"amount": "3500.00"},
"IRULLAYEE": {"amount": "3500.00"},
"MUTHEESWARI": {"amount": "3500.00"},
"KALIMUTHU": {"amount": "3500.00"},
"ALAGUVEL ANBUKENIYAVAN": {"amount": "3500.00"},
"KALIMUTHU": {"amount": "2500.00"},
"SUNDARAMAHALINGAM": {"amount": "2500.00"},
"VALLI": {"amount": "3700.00"},
"MUNIYASAMY": {"amount": "3700.00"},
"ESWARI": {"amount": "2800.00"},
},
"P BLOCK IIst ROW": {
"ESTHER RAJAMMAL": {"amount": "3500.00"},
"THANGA MARIAMMAL": {"amount": "3500.00"},
"THUTHU MARIAMMAL": {"amount": "3500.00"},
"AROCKIYA MERY": {"amount": "3500.00"},
"DHANALAKSHMI": {"amount": "3500.00"},
"JEYARANI": {"amount": "3500.00"},
"CHINADURAI": {"amount": "3700.00"},
"THANGA MARIAPPAN": {"amount": "3700.00"},
"MUTHUCHAMY": {"amount": "3700.00"},
"GOPALAKRISHNAN": {"amount": "3600.00"},
"PONNUTHAI": {"amount": "3500.00"},
"STELLA": {"amount": "3500.00"},
"RAKKU": {"amount": "3500.00"},
"MURUGAN LAKSHMI": {"amount": "3500.00"},
"THOMMAI AROCKIYA SINGARI": {"amount": "3500.00"},
"MUNIYASAMY CHELLATHAI": {"amount": "3500.00"},
"JAGATHEESH": {"amount": "2300.00"},
"KARUPPASAMY": {"amount": "3700.00"},
"NALLAMANI": {"amount": "3700.00"},
"PETCHIYAMMAL": {"amount": "2800.00"},
},
"BLOCK Q": {
"ANJALIDEVI": {"amount": "3500.00"},
"MARIAMMAL": {"amount": "3500.00"},
"PERIYASAMY": {"amount": "3700.00"},
},
"BLOCK R": {
"MUTHUMARI": {"amount": "3500.00"},
"PETCHIAMMAL": {"amount": "3500.00"},
"SELVARAJ": {"amount": "3700.00"},
"XEVIER JOHNSON": {"amount": "3600.00"},
},
"Weekly / Daily labour": {
"THOMMAI ARULANANTHAM": {"amount": "3600.00"},
"S.REGENA": {"amount": "3500.00"},
"MUTHULAKSHMI": {"amount": "3400.00"},
"SHANMUGA LAKSHMI": {"amount": "3000.00"},
"ANTONYSAMY": {"amount": "3600.00"},
"ANTONY AROKIYASELVAM": {"amount": "3600.00"},
},
"Motor Attender": {
"S.MURUGANDI": {"amount": "4200.00"},
"S.PANDI": {"amount": "4200.00"},
"DEVARAJ": {"amount": "4200.00"},
"P.EZHILARASAN": {"amount": "4200.00"},
"A.GURUSAMY": {"amount": "4200.00"},
"M.MUNIASAMY": {"amount": "4200.00"},
"M.AMBIKAPATHY": {"amount": "4200.00"},
"T.ANTONYSAMY": {"amount": "4200.00"},
"A.RAMASAMY": {"amount": "4200.00"},
"M.RANGASAMY": {"amount": "4200.00"},
"ABBASS": {"amount": "4200.00"},
"NAGARAJ": {"amount": "4200.00"},
"RAJEEV GANDHI": {"amount": "4200.00"},
"JHON XEVIER": {"amount": "4200.00"},
"GANESHAN": {"amount": "4200.00"},
"CHINNA MUNIASAMY": {"amount": "3300.00"},
"BALA": {"amount": "3100.00"},
},
"Raw Salt Loading (JCB/Tractor)": {
"KALAIVANAN": {"amount": "3600.00"},
"S.AROCKIYARAJ": {"amount": "3600.00"},
"M.SOLIYAPPAN": {"amount": "3600.00"},
"K.ASHOK KUMAR": {"amount": "3600.00"},
"S.MUNIYASAMY": {"amount": "3600.00"},
"P.SETHURAMAN": {"amount": "3600.00"},
"C.KARUPPASAMY": {"amount": "3600.00"},
"SARAVANA SHANMUGAVEL": {"amount": "3600.00"},
"S.KRISHNAN": {"amount": "3600.00"},
"T.KRISHNAMOORTHY": {"amount": "3600.00"},
"PURUSOTHAMAN": {"amount": "3600.00"},
"V.KANIMOZHI": {"amount": "3600.00"},
"M.MAASANAMUTHU": {"amount": "3600.00"},
"MICHALRAJ": {"amount": "3600.00"},
"PACKIYA PARALOGARAJ": {"amount": "3600.00"},
"M.THANGARAJ": {"amount": "3600.00"},
},

};

// Populates the name list based on the block selection
function populateNameList() {
    const block = document.getElementById('blocklist').value;
    const nameList = document.getElementById('namelist');
    
    // Clear previous name options
    nameList.innerHTML = '<option value="">Select a name</option>';
    
    // Populate the name list based on the block selected
    if (blockData[block]) {
        for (const name in blockData[block]) {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            nameList.appendChild(option);
        }
    }

    // Clear the text fields when switching blocks
    clearTextFields();
}

// Populates amount based on the selected name
function nameAmount() {
    const block = document.getElementById('blocklist').value;
    const selectedName = document.getElementById('namelist').value;

    document.getElementById('blockValue').value = block; // Set block value
    document.getElementById('optionValue').value = selectedName; // Set name value

    if (blockData[block] && blockData[block][selectedName]) {
        document.getElementById('amountValue').value = blockData[block][selectedName].amount; // Set amount value
    } else {
        document.getElementById('amountValue').value = "";
    }
}

// Clears the text fields when switching blocks
function clearTextFields() {
    document.getElementById('blockValue').value = '';
    document.getElementById('optionValue').value = '';
    document.getElementById('amountValue').value = '';
}

// Display selected bank name in a separate text input
function displayBankName() {
    const bankName = document.getElementById('bankName').value;
    document.getElementById('selectedBank').value = bankName;
}

// Clock Functionality
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString(undefined, options);
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately
