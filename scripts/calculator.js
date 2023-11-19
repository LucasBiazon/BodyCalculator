const translate = {
    en: {
        typeCalculator: "Type Calculator",
        setCalculator: "Set a calculator type...",
        results: "Results",
        imc: "IMC",
        corporalDensity: "Corporal Density",
        dailyEnergyExpenditure: "Daily Energy Expenditure",
        basalMetabolicRate: "Basal Metabolic Rate",
        nutritionalNeeds: "Nutritional needs",
        submit: "Calculate",
        height: "Height (m):",
        weight: "Weight (kg):",
        age: "Age (y):",
        gender: "Gender",
        masculine: "Masculine",
        feminine: "Feminine"
    }, 
    pt_br: {
        typeCalculator: "Tipo de Calculadora",
        setCalculator: "Defina o tipo de calculadora...",
        results: "Resultados",
        imc: "IMC",
        corporalDensity: "Densidade corporal",
        dailyEnergyExpenditure: "Gasto energético diário",
        basalMetabolicRate: "Taxa de metabolismo Basal ",
        nutritionalNeeds: "Macronutrientes",
        submit: "Calcular",
        height: "Altura (m):",
        weight: "Peso (kg):",
        age: "Idade (anos):",
        gender: "Gênero",
        masculine: "Masculino",
        feminine: "Feminino"
    }
}
// Lang
const btLang = document.querySelector("#btLang")
const DivOptionsLang = document.querySelector("#DivOptionsLang")
const optionPt_Br = document.querySelector("#optionPt_Br")
const optionEn = document.querySelector("#optionEn")

// Types Calculator
const btOptionsCalculator = document.querySelector("#btOptionsCalculator")
const titleOptionsCalculator = document.querySelector("#titleOptionsCalculator")
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

// Strings Elements
const StringBtCalculate = document.querySelectorAll(".btCalculator")
const StringHeight = document.querySelectorAll(".height")
const StringWeight = document.querySelectorAll(".weight")
const StringAge = document.querySelectorAll(".age")
const StringGender = document.querySelectorAll(".gender")
const StringMasculine = document.querySelectorAll(".masculine")
const StringFeminine = document.querySelectorAll(".feminine")



let invalid = translate.en.imc.invalid




// lang events and functions
btLang.addEventListener("click", () => { 
    DivOptionsLang.classList.toggle("disabled")
    document.querySelector("#btLang svg").classList.toggle("rotate")
})

optionPt_Br.addEventListener("click", TranslatePt_Br)
optionEn.addEventListener("click", TranslateEn)

function TranslatePt_Br(){
    titleOptionsCalculator.innerHTML = translate.pt_br.typeCalculator
    loading.innerHTML = translate.pt_br.setCalculator
    loadingResults.innerHTML = translate.pt_br.results
    opIMC.innerHTML = translate.pt_br.imc
    opDensity.innerHTML = translate.pt_br.corporalDensity
    opEnergy.innerHTML = translate.pt_br.dailyEnergyExpenditure
    opMetabolic.innerHTML = translate.pt_br.basalMetabolicRate
    opNutritional.innerHTML = translate.pt_br.nutritionalNeeds
    for(const i of StringBtCalculate){
        i.innerHTML= translate.pt_br.submit
    }
    for(const s of StringHeight){
        s.innerHTML= translate.pt_br.height
    }
    for(const s of StringWeight){
        s.innerHTML= translate.pt_br.weight
    }
    for(const s of StringAge){
        s.innerHTML= translate.pt_br.age
    }
    for(const s of StringGender){
        s.innerHTML= translate.pt_br.gender
    }
    for(const s of StringMasculine){
        s.innerHTML= translate.pt_br.masculine
    }
    for(const s of StringFeminine){
        s.innerHTML= translate.pt_br.feminine
    }
  
}

function TranslateEn(){
    titleOptionsCalculator.innerHTML = translate.en.typeCalculator
    loading.innerHTML = translate.en.setCalculator
    loadingResults.innerHTML = translate.en.results
    opIMC.innerHTML = translate.en.imc
    opDensity.innerHTML = translate.en.corporalDensity
    opEnergy.innerHTML = translate.en.dailyEnergyExpenditure
    opMetabolic.innerHTML = translate.en.basalMetabolicRate
    opNutritional.innerHTML = translate.en.nutritionalNeeds
    for(const i of StringBtCalculate){
        i.innerHTML= translate.en.submit
    }
    for(const s of StringHeight){
        s.innerHTML= translate.en.height
    }
    for(const s of StringWeight){
        s.innerHTML= translate.en.weight
    }
    for(const s of StringAge){
        s.innerHTML= translate.en.age
    }
    for(const s of StringGender){
        s.innerHTML= translate.en.gender
    }
    for(const s of StringMasculine){
        s.innerHTML= translate.en.masculine
    }
    for(const s of StringFeminine){
        s.innerHTML= translate.en.feminine
    }
  
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
    titleOptionsCalculator.innerHTML = opIMC.innerHTML
}) 

opDensity.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorDensity.classList.remove("disabled")
    calculatorAtual = calculatorDensity
    titleOptionsCalculator.innerHTML =  opDensity.innerHTML
})

opEnergy.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorEnergy.classList.remove("disabled")
    calculatorAtual = calculatorEnergy
    titleOptionsCalculator.innerHTML = opEnergy.innerHTML
})

opMetabolic.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorMetabolic.classList.remove("disabled")
    calculatorAtual = calculatorMetabolic
    titleOptionsCalculator.innerHTML = opMetabolic.innerHTML
})

opNutritional.addEventListener("click", () => {
    calculatorAtual.classList.add("disabled")
    calculatorNutritional.classList.remove("disabled")
    calculatorAtual = calculatorNutritional
    titleOptionsCalculator.innerHTML = opNutritional.innerHTML
})

// Calculator operation
calculator.addEventListener("submit", (event) => event.preventDefault())


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

