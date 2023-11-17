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
const btOptionsCalculator = document.querySelector("#btOptionsCalculator")
const optionsCalculator = document.querySelector("#optionsCalculator")

btOptionsCalculator.addEventListener("click", () => { 
    optionsCalculator.classList.toggle("disabled")
    document.querySelector("#btOptionsCalculator svg").classList.toggle("rotate")
})


// Lang
const btLang = document.querySelector("#btLang")
const DivOptionsLang = document.querySelector("#DivOptionsLang")
const optionPt_Br = document.querySelector("#optionPt_Br")
const optionEn = document.querySelector("#optionEn")

btLang.addEventListener("click", () => { 
    DivOptionsLang.classList.toggle("disabled")
    document.querySelector("#btLang svg").classList.toggle("rotate")
})

optionPt_Br.addEventListener("click", TranslatePt_Br())
optionEn.addEventListener("click", TranslateEn())

function TranslatePt_Br(){
    
}

function TranslateEn(){
}

const loading = document.querySelector("#LoadingCalculator")
const opIMC = document.querySelector("#opIMC")
const opDensity = document.querySelector("#opDensity")
const opEnergy = document.querySelector("#opEnergy")
const opMetabolic = document.querySelector("#opMetabolic")
const opNutritional= document.querySelector("#opNutritional")
const calculator = document.querySelector("#Calculator")

const calculatorImc = document.querySelector("#CalculatorIMC")
const calculatorDensity = document.querySelector("#CalculatorDensity")
const calculatorEnergy = document.querySelector("#CalculatorEnergy")
const calculatorMetabolic = document.querySelector("#CalculatorMetabolic")
const calculatorNutritional = document.querySelector("#CalculatorNutritional")
let calculatorAtual = loading


opIMC.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorImc.classList.remove("disabled")
    calculatorAtual = calculatorImc    
    document.querySelector("#titleOptionsCalculator").innerHTML = opIMC.innerHTML
}) 

opDensity.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorDensity.classList.remove("disabled")
    calculatorAtual = calculatorDensity
    document.querySelector("#titleOptionsCalculator").innerHTML =  opDensity.innerHTML
})

opEnergy.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorEnergy.classList.remove("disabled")
    calculatorAtual = calculatorEnergy
    document.querySelector("#titleOptionsCalculator").innerHTML = opEnergy.innerHTML
})

opMetabolic.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorMetabolic.classList.remove("disabled")
    calculatorAtual = calculatorMetabolic
    document.querySelector("#titleOptionsCalculator").innerHTML = opMetabolic.innerHTML
})

opNutritional.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorNutritional.classList.remove("disabled")
    calculatorAtual = calculatorNutritional
    document.querySelector("#titleOptionsCalculator").innerHTML = opNutritional.innerHTML
})