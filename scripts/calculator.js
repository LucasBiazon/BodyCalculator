const translate = {
    en: {
        typeCalculator: "Type Calculator",
        setCalculator: "Set a calculator type...",
        results: "Results",
        invalid: "Invalid",
        imc: "IMC",

        imcThinness: "Thinness",
        imcNormal: "Normal",
        imcOverweight: "Overweight",
        imcObesity: "Obesity",
        imcObesityS:"Severe obesity",
        imcSlogan: "Your IMC are ",

        corporalDensity: "Corporal Density (3 bends)",
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
        invalid: "Inválido",

        imc: "IMC",
        imcThinness: "Magreza",
        imcNormal: "Normal",
        imcOverweight: "Sobrepeso",
        imcObesity: "Obesidade",
        imcObesityS:"Obesidade severa",
        imcSlogan: "Seu IMC é de ",

        corporalDensity: "Densidade corporal (3 dobras)",
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
let pResult = document.createElement("p")

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

//IMC 
let  StringimcSlogan = translate.en.imcSlogan
let StringimcThinness = translate.en.imcThinness
let  StringimcNormal = translate.en.imcNormal
let  StringimcOverweight = translate.en.imcOverweight
let StringimcObesity = translate.en.imcObesity
let StringimcObesityS = translate.en.imcObesityS

let  Stringinvalid = translate.en.invalid




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

    StringimcSlogan.innerHTML  = translate.pt_br.imcSlogan
    StringimcThinness.innerHTML = "vai tomar no cu"
    StringimcNormal.innerHTML  = translate.pt_br.imcNormal
    StringimcOverweight.innerHTML   = translate.pt_br.imcOverweight
    StringimcObesity.innerHTML  = translate.pt_br.imcObesity
    StringimcObesityS.innerHTML  = translate.pt_br.imcObesityS
    Stringinvalid.innerHTML = translate.pt_br.invalid
    

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

    StringimcSlogan.innerHTML  = translate.en.imcSlogan
    StringimcThinness.innerHTML = translate.en.imcThinness
    StringimcNormal.innerHTML  = translate.en.imcNormal
    StringimcOverweight.innerHTML = translate.en.imcOverweight
    StringimcObesity.innerHTML = translate.en.imcObesity
    StringimcObesityS.innerHTML = translate.en.imcObesityS
    Stringinvalid.innerHTML = translate.en.invalid

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



calculatorImc.addEventListener("submit", (event) => {
   event.preventDefault()
   const height = parseFloat(document.querySelector(" #CalculatorIMC #height").value) 
   const weight = parseFloat(document.querySelector("#CalculatorIMC #weight").value)
   let result

   if(isNaN(height))
    {
        result = Stringinvalid
    }else if(isNaN(weight))
    {
        result = Stringinvalid
    }else

     {  let resultImc = parseInt(weight / (height * height)) 
        let imcGrau 

        if(resultImc < 18.5){
            imcGrau = StringimcThinness
        }else if( resultImc <= 24.9) {
            imcGrau = StringimcNormal
        }else if(resultImc <= 29.9){
            imcGrau = StringimcOverweight
        }else if( resultImc <= 39.9){
            imcGrau = StringimcObesity
        }else{
            imcGrau = StringimcObesityS
        }
        
        result = `${StringimcSlogan} ${resultImc} - ${imcGrau}`
    }
    
    ResutsAplication(result)
})

calculatorDensity.addEventListener("submit", (event) => {
    event.preventDefault()
    const age = parseInt(document.querySelector("#CalculatorDensity #age").value) 
    const weight = parseFloat(document.querySelector("#CalculatorDensity #weight").value)
    const haunch = parseFloat(document.querySelector("#CalculatorDensity #haunch").value)
    const triceps = parseFloat(document.querySelector("#CalculatorDensity #triceps").value)
    const supraIliac= parseFloat(document.querySelector("#CalculatorDensity #supraIliac").value)
    const optionGender = document.getElementsByName('gender')
    let valorGender
    let result 
    let resultDensity, resultFat
    
    for(const op of optionGender){
        if(op.checked){
            valorGender = op.value
        }
    }

    
    if(valorGender == 'masculine'){
        resultDensity = 1.10938 - 0.0008267 * (haunch + triceps + supraIliac)+  0.0000016* ((haunch + triceps + supraIliac) * (haunch + triceps + supraIliac))  - 0.0002574*age
    }else{
        resultDensity  =  1.0994921 - 0.0009929 * (haunch + triceps + supraIliac) +  0.0000023* ((haunch + triceps + supraIliac) * (haunch + triceps + supraIliac))  - 0.0001392 * age
    }

    resultFat =  [(4,95 / resultDensity) - 4.50] 

    result = `Densidade corporal ${parseInt(resultDensity)} </br> Percentual de gordura: ${parseInt(resultFat)}`
   
    ResutsAplication(result)
    
})

calculatorEnergy.addEventListener("submit", (event) => {

    event.preventDefault()
    const height = parseFloat(document.querySelector(" #CalculatorEnergy #height").value) 
    const weight = parseFloat(document.querySelector(" #CalculatorEnergy #weight").value)
    const age = parseInt(document.querySelector("#CalculatorEnergy #age").value)
    const optionGender = document.getElementsByName('gender')
    const optionActivity = document.getElementsByName('activity')
    let valorGender
    let valorActvity
    let result = 0

    for(const op of optionGender){
        if(op.checked){
            valorGender = op.value
        }
    }

    for(const op of optionActivity){
        if(op.checked){
            valorActvity = op.value
        }
    }
    
    if( !isNaN(height) && !isNaN(weight) && !isNaN(age) && typeof(valorGender) !== 'undefined' && typeof(valorActvity) !== 'undefined') {
        

        if(valorGender == 'masculine'){
            result = 10 * weight + 6.25 * (height * 100) - 5 * age + 5
        }else{
            result = 10 * weight + 6.25 * (100 *height )- 5 * age + 161
        }
        switch(valorActvity){
            case "activityS":
                result *= 1.2
                break
            case "activityL":
                result *= 1.50
                break
            case "activityM":
                result *= 1.6
                break
            case "activityV":
                result  *= 1.8
                break
            case "activityE":
                result *= 2.2
                break
        }

        result = `Seus gasto energético diário é de ${result} kcal`

    }else{
        result = Stringinvalid
    }
    ResutsAplication(result)
    
   
})
calculatorMetabolic.addEventListener("submit", (event) => {
    event.preventDefault()

    const height = parseFloat(document.querySelector(" #CalculatorMetabolic #height").value) 
    const weight = parseFloat(document.querySelector(" #CalculatorMetabolic #weight").value)
    const age = parseInt(document.querySelector("#CalculatorMetabolic #age").value)
    const optionGender = document.getElementsByName('gender')
    let valorGender
    let result = 0
    
    for(const op of optionGender){
        if(op.checked){
            valorGender = op.value
        }
    }
    
    if( !isNaN(height) && !isNaN(weight) && !isNaN(age) && typeof(valorGender) !== 'undefined') {
        
        if(valorGender == 'masculine'){
            result = 66 + (13.7 * weight) + 5 * (height * 100) - ( age * 6.8)
        }else{
            result = 655 + (9.6 * weight) + 1.8 * (height * 100) - ( age * 4.7)
        }
        result = `Seus TBM é de ${result} kcal`

    }else{
        result = Stringinvalid
    }

    ResutsAplication(result)
})

calculatorNutritional.addEventListener("submit", (event) => {
    event.preventDefault()
    const calories = parseFloat(document.querySelector("#calories").value)
    const carbohydrates = parseFloat(document.querySelector("#carbohydrates").value)
    const protein = parseFloat(document.querySelector("#protein").value)
    const fat = parseFloat(document.querySelector("#fat").value)
    let result

    let tCarb = parseInt((calories / 4 /  (carbohydrates * 100)) * 1000)
    let tProtein = parseInt((calories / 4 / (protein * 100)) * 1000)
    let tFat = parseInt((calories / 9 / (fat * 100)) * 1000)

    result = `Carb: ${tCarb}g </br> Protein: ${tProtein}g</br> Fat: ${tFat}g`
    ResutsAplication(result)
})


function ResutsAplication(result){
    pResult.innerHTML = " " 
    loadingResults.classList.add("disabled")
    pResult. innerHTML = result
    results.appendChild(pResult)
}