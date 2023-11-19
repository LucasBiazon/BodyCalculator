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
        feminine: "Feminine",
        activity: "Physical Activity",
        sedentary: "Sedentary",
        mildly: "Mildly active",
        moderately: "Moderately active",
        very: "Very active",
        extremely: "Extremely active",
        calories: "Calories Total:",
        carbohydrates: "Carbohydrates Percentage:",
        protein:"Protein Percentage:",
        fat: "Fat percentage:"
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
        feminine: "Feminino",
        activity: "Ativida física", 
        sedentary: "Sedentário",
        mildly: "Levemente ativo",
        moderately: "Moderadamente ativo",
        very: "Muito ativo",
        extremely: "Extremamente ativo",
        calories: "Total de calorias:",
        carbohydrates: "Porcentagem de carboidrato:",
        protein:"Porcentagem de proteína: ",
        fat: "Porcentagem de gordura:"
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
const titleCalculatorImc = document.querySelector("#titleCalculatorImc")
const calculatorDensity = document.querySelector("#CalculatorDensity")
const titleCalculatorDensity = document.querySelector("#titleCalculatorDensity")
const calculatorEnergy = document.querySelector("#CalculatorEnergy")
const titleCalculatorEnergy = document.querySelector("#titleCalculatorEnergy")
const calculatorMetabolic = document.querySelector("#CalculatorMetabolic")
const titleCalculatorMetabolic = document.querySelector("#titleCalculatorMetabolic")
const calculatorNutritional = document.querySelector("#CalculatorNutritional")
const titleCalculatorNutritional = document.querySelector("#titleCalculatorNutritional")

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
const StringPhysicalActivity = document.querySelectorAll(".activity")
const StringSedentary = document.querySelectorAll(".sedentary")
const StringMildly = document.querySelectorAll(".mildly") 
const StringModerately = document.querySelectorAll(".moderately")
const StringVery = document.querySelectorAll(".very")
const StringExtremely = document.querySelectorAll(".extremely")
const StringCalories = document.querySelector(".calories")
const StringCarbohydrates = document.querySelector(".carbohydrates")
const StringProtein = document.querySelector(".protein")
const StringFat = document.querySelector(".fat")
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
    titleCalculatorImc.innerHTML = translate.pt_br.imc
    titleCalculatorDensity.innerHTML = translate.pt_br.corporalDensity
    titleCalculatorEnergy.innerHTML = translate.pt_br.dailyEnergyExpenditure
    titleCalculatorMetabolic.innerHTML = translate.pt_br.basalMetabolicRate
    titleCalculatorNutritional.innerHTML = translate.pt_br.nutritionalNeeds
    opIMC.innerHTML = translate.pt_br.imc
    opDensity.innerHTML = translate.pt_br.corporalDensity
    opEnergy.innerHTML = translate.pt_br.dailyEnergyExpenditure
    opMetabolic.innerHTML = translate.pt_br.basalMetabolicRate
    opNutritional.innerHTML = translate.pt_br.nutritionalNeeds
    StringCalories.innerHTML  = translate.pt_br.calories
    StringCarbohydrates.innerHTML = translate.pt_br.carbohydrates
    StringProtein.innerHTML  = translate.pt_br.protein
    StringFat.innerHTML  = translate.pt_br.fat

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
    for(const s of StringPhysicalActivity){
        s.innerHTML= translate.pt_br.activity
    }
    for(const s of StringSedentary){
        s.innerHTML= translate.pt_br.sedentary
    }
    for(const s of StringMildly){
        s.innerHTML= translate.pt_br.mildly
    }
    for(const s of StringVery){
        s.innerHTML= translate.pt_br.very
    }
    for(const s of StringExtremely){
        s.innerHTML= translate.pt_br.extremely
    }
    
}

function TranslateEn(){
    titleOptionsCalculator.innerHTML = translate.en.typeCalculator
    loading.innerHTML = translate.en.setCalculator
    loadingResults.innerHTML = translate.en.results
    titleCalculatorImc.innerHTML = translate.en.imc
    titleCalculatorDensity.innerHTML = translate.en.corporalDensity
    titleCalculatorEnergy.innerHTML = translate.en.dailyEnergyExpenditure
    titleCalculatorMetabolic.innerHTML = translate.en.basalMetabolicRate
    titleCalculatorNutritional.innerHTML = translate.en.nutritionalNeeds
    opIMC.innerHTML = translate.en.imc
    opDensity.innerHTML = translate.en.corporalDensity
    opEnergy.innerHTML = translate.en.dailyEnergyExpenditure
    opMetabolic.innerHTML = translate.en.basalMetabolicRate
    opNutritional.innerHTML = translate.en.nutritionalNeeds
    StringCalories.innerHTML  = translate.en.calories
    StringCarbohydrates.innerHTML = translate.en.carbohydrates
    StringProtein.innerHTML  = translate.en.protein
    StringFat.innerHTML  = translate.en.fat
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
    for(const s of StringPhysicalActivity){
        s.innerHTML= translate.en.activity
    }
    for(const s of StringSedentary){
        s.innerHTML= translate.en.sedentary
    }
    for(const s of StringMildly){
        s.innerHTML= translate.en.mildly
    }
    for(const s of StringVery){
        s.innerHTML= translate.en.very
    }
    for(const s of StringExtremely){
        s.innerHTML= translate.en.extremely
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

