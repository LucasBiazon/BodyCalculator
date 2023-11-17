const translate = {
    en: {
        typeCalculator: "TypeCalculator",
        imc: "IMC",
        corporalDensity: "Corporal Density",
        dailyEnergyExpenditure: "Daily Energy Expenditure",
        basalMetabolicRate: "Basal Metabolic Rate",
        nutritionalNeeds: "Nutritional needs",
        submit: "Calculate"
    }, 
    pt_br: {

    }
}

// Types Calculator
const optionsBt = document.querySelector("#optionsBt")
const optionsCalculator = document.querySelector("#optionsCalculator")

optionsBt.addEventListener("click", () => { 
    optionsCalculator.classList.toggle("disabled")
})


// Lang
const btLang = document.querySelector("#btLang")
const optionsLang = document.querySelector("#DivOptionsLang")
const optionPt_Br = document.querySelector("#optionPt_Br")
const optionEn = document.querySelector("#optionEn")

btLang.addEventListener("click", () => { 
    optionsLang.classList.toggle("disabled")
})

optionPt_Br.addEventListener("click", TranslatePt_Br())
optionEn.addEventListener("click", TranslateEn())

 function TranslatePt_Br(){
    
}

function TranslateEn(){
}

const loading = document.querySelector("#loading")
const opIMC = document.querySelector("#opIMC")
const opDensity = document.querySelector("#opDensity")
const opEnergy = document.querySelector("#opEnergy")
const opMetabolic = document.querySelector("#opMetabolic")
const opNutritional= document.querySelector("#opNutritional")
const calculator = document.querySelector("#Calculator")

opIMC.addEventListener("click", () => {
    loading.classList.add("disabled")
}) 
