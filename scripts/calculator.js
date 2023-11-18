// Lang
const btLang = document.querySelector("#btLang")
const DivOptionsLang = document.querySelector("#DivOptionsLang")
const optionPt_Br = document.querySelector("#optionPt_Br")
const optionEn = document.querySelector("#optionEn")

// Types Calculator
const btOptionsCalculator = document.querySelector("#btOptionsCalculator")
const optionsCalculator = document.querySelector("#optionsCalculator")

const opIMC = document.querySelector("#opIMC")
const opDensity = document.querySelector("#opDensity")
const opEnergy = document.querySelector("#opEnergy")
const opMetabolic = document.querySelector("#opMetabolic")
const opNutritional= document.querySelector("#opNutritional")

// Calculator
const calculator = document.querySelector("#Calculator")
const loading = document.querySelector("#LoadingCalculator")
const calculatorImc = document.querySelector("#CalculatorIMC")
const calculatorDensity = document.querySelector("#CalculatorDensity")
const calculatorEnergy = document.querySelector("#CalculatorEnergy")
const calculatorMetabolic = document.querySelector("#CalculatorMetabolic")
const calculatorNutritional = document.querySelector("#CalculatorNutritional")


// Results
const results = document.querySelector("#results")
const loadingResults = document.querySelector("#loadingResults")


const translate = {
    en: {
        typeCalculator: "Type Calculator",
        setCalculator: "Set a calculator type...",
        imc: { 
            title: "IMC",
            height: "Height (m):",
            weight: "Weight (kg):",
            invalid: "Invalid"
        },
        corporalDensity: "Corporal Density",
        dailyEnergyExpenditure: "Daily Energy Expenditure",
        basalMetabolicRate: "Basal Metabolic Rate",
        nutritionalNeeds: "Nutritional needs",
        submit: "Calculate"
    }, 
    pt_br: {
        typeCalculator: "Tipo de Calculadora",
        setCalculator: "Defina o tipo de calculadora...",
        imc: { 
            title: "IMC",
            height: "Altura (m):",
            weight: "Peso (kg):",
            invalid: "Inválido"
        },
    }
}

// lang events and functions
btLang.addEventListener("click", () => { 
    DivOptionsLang.classList.toggle("disabled")
    document.querySelector("#btLang svg").classList.toggle("rotate")
})

optionPt_Br.addEventListener("click", TranslatePt_Br)
optionEn.addEventListener("click", TranslateEn)

function TranslatePt_Br(){
    invalid = translate.pt_br.imc.invalid
}

function TranslateEn(){
}


// Type Calculator events and funcitons
btOptionsCalculator.addEventListener("click", () => { 
    optionsCalculator.classList.toggle("disabled")
    document.querySelector("#btOptionsCalculator svg").classList.toggle("rotate")
})

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

// Calculator operation
calculator.addEventListener("submit", (event) => event.preventDefault())
let invalid = translate.en.imc.invalid

function CalculateImc() {
   const height = parseFloat(document.querySelector(" #CalculatorIMC #height").value) 
   const weight = parseFloat(document.querySelector("#CalculatorIMC #weight").value)
   let result

   if(isNaN(height))
    {
        result = invalid
    }else if(isNaN(weight))
    {
        result = invalid
    }else

     {  let resultImc = parseInt(weight / (height * height)) 
        let imcGrau 

        if(resultImc < 18.5){
            imcGrau = "Magreza"
        }else if( resultImc <= 24.9) {
            imcGrau = "Normal"
        }else if(resultImc <= 29.9){
            imcGrau = "Sobrepeso"
        }else if( resultImc <= 39.9){
            imcGrau = "Obsidade"
        }else{
            imcGrau = "Obesidade grave"
        }
        
        result = `Seu IMC é ${resultImc} - ${imcGrau}`
    }
    console.log(result)
}

function CalculateDensity(){
    const age = parseInt(document.querySelector(" #age").value) 
    const weight = document.querySelector("#weight").value
    const gender = document.getElementsByName("gender")
    const bend = document.getElementsByName("bend")


 
}

function CalculateEnergy(){
    const height = parseFloat(document.querySelector(" #CalculatorEnergy #height").value) 
    const weight = parseFloat(document.querySelector(" #CalculatorEnergy #weight").value)
    const age = parseInt(document.querySelector("#CalculatorEnergy #age").value)
    const optionGender = document.getElementsByName('gender')
    const optionActivity = document.getElementsByName('activity')
    let valorGender
    let valorActvity

    for(const op of optionGender){
        if(op.checked){
            valorSexo = op.value
        }
    }

    for(const op of optionActivity){
        if(op.checked){
            valorActvity = op.value
        }
    }
    console.log(height, weight, age, valorSexo, valorActvity)
}

