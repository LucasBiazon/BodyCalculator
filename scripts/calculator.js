const translate = {
    en: {
        typeCalculator: "Type Calculator",
        setCalculator: "Set a calculator type...",
        submit: "Calculate",
        results: "Results",
        invalid: "Invalid",

        imc: {
            title: "IMC",
            thinness: "Thinness",
            normal: "Normal",
            overweight: "Overweight",
            obesity: "Obesity",
            obesityS:"Severe obesity",
            slogan: "Your IMC are:",
        },
       
        corporalDensity: {
           title: "Corporal Density (3 bends)",
           sloganD: "Your corporal density are:",
           sloganF: "Fat percentage:"
        }, 

        dailyEnergyExpenditure:{ 
            title:"Daily Energy Expenditure",
            slogan: "Your daily energy expenditure are:"
        },

        basalMetabolicRate: {
            title: "Basal Metabolic Rate",
            slogan: "Your basal metabolic rate are:"
        },

        nutritionalNeeds: {
             title: "Nutritional needs",
             calories: "Calories Total:",
             carbohydrates: "Carbohydrates Percentage:",
             protein:"Protein Percentage:",
             fat: "Fat percentage:",
             sloganCarb: "Carbohydrates:",
             sloganProtein: "Proteins:",
             sloganFat: "Fat:"
        },
        
        inputs: {
            height: "Height (m):",
            weight: "Weight (kg):",
            age: "Age (y):",
        },
        
        gender: {
            title: "Gender:",
            masculine: "Masculine",
            feminine: "Feminine"
        },

        activity: {
            title: "Physical Activity:",
            sedentary: "Sedentary",
            mildly: "Mildly active",
            moderately: "Moderately active",
            very: "Very active",
            extremely: "Extremely active",
        }
        
    }, 
    pt_br: {
        typeCalculator: "Tipo de Calculadora",
        setCalculator: "Defina o tipo da calculadora...",
        submit: "Calcular",
        results: "Resultados",
        invalid: "Inválido",

        imc: {
            title: "IMC",
            thinness: "Magreza",
            normal: "Normal",
            overweight: "Sobrepeso",
            obesity: "Obesidade",
            obesityS:"Obesidade severa",
            slogan: "Seu IMC é de:",
        },
       
        corporalDensity: {
           title: "Densidade Corporal (3 dobras)",
           sloganD: "Sua densidade corporal é de:",
           sloganF: "Percentual de gordura:"
        }, 

        dailyEnergyExpenditure:{ 
            title:"Gasto energético diário",
            slogan: "Seu gasto energético diário é:"
        },

        basalMetabolicRate: {
            title: "Taxa metabólica basal",
            slogan: "Sua taxa metabólica basal é de:"
        },

        nutritionalNeeds: {
             title: "Macronutrientes",
             calories: "Total de calorias:",
             carbohydrates: "Percentual de carboidratos:",
             protein:"Percentual de proteínas:",
             fat: "Percentual de gordura:",
             sloganCarb: "Carboidratros:",
             sloganProtein: "Proteinas:",
             sloganFat: "Gorduras:"
        },
        
        inputs: {
            height: "Altura (m):",
            weight: "Peso (kg):",
            age: "Idade (y):",
        },
        
        gender: {
            title: "Gênero:",
            masculine: "Masculino",
            feminine: "Feminino"
        },

        activity: {
            title: "Atividade física:",
            sedentary: "Sedentário",
            mildly: "Levemente ativo",
            moderately: "Moderadamente ativo",
            very: "Muito",
            extremely: "Extremamente ativo",
        }
    }
}

// Lang
const btLang = document.querySelector("#btLang")
const DivOptionsLang = document.querySelector("#DivOptionsLang")
const optionPt_Br = document.querySelector("#optionPt_Br")
const optionEn = document.querySelector("#optionEn")

// theme
const btTheme = document.querySelector("#theme")
const themeMoon = document.querySelector("#ThemeMoon")
const themeSun = document.querySelector("#ThemeSun")

// modal

const modal = document.querySelector("#alert")
const btModal = document.querySelector("#btAlert")
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


// lang events and functions
btLang.addEventListener("click", () => { 
    DivOptionsLang.classList.toggle("disabled")
    document.querySelector("#btLang svg").classList.toggle("rotate")
})

optionPt_Br.addEventListener("click", TranslatePt_Br)
optionEn.addEventListener("click", TranslateEn)

let lang = 2
let pt_br = translate.pt_br
function TranslatePt_Br(){
    lang = 1
    titleOptionsCalculator.innerHTML = pt_br.typeCalculator
    loading.innerHTML = pt_br.setCalculator
    loadingResults.innerHTML =pt_br.results

    titleCalculatorImc.innerHTML = pt_br.imc.title
    titleCalculatorDensity.innerHTML = pt_br.corporalDensity.title
    titleCalculatorEnergy.innerHTML = pt_br.dailyEnergyExpenditure.title
    titleCalculatorMetabolic.innerHTML = pt_br.basalMetabolicRate.title
    titleCalculatorNutritional.innerHTML = pt_br.nutritionalNeeds.title

    opIMC.innerHTML = pt_br.imc.title
    opDensity.innerHTML = pt_br.corporalDensity.title
    opEnergy.innerHTML = pt_br.dailyEnergyExpenditure.title
    opMetabolic.innerHTML = pt_br.basalMetabolicRate.title
    opNutritional.innerHTML = pt_br.nutritionalNeeds.title

    StringCalories.innerHTML  = pt_br.nutritionalNeeds.calories
    StringCarbohydrates.innerHTML = pt_br.nutritionalNeeds.carbohydrates
    StringProtein.innerHTML  = pt_br.nutritionalNeeds.protein
    StringFat.innerHTML  = pt_br.nutritionalNeeds.fat

 
    

    for(const i of StringBtCalculate){
        i.innerHTML= pt_br.submit
    }
    for(const s of StringHeight){
        s.innerHTML= pt_br.inputs.height
    }
    for(const s of StringWeight){
        s.innerHTML= pt_br.inputs.weight
    }
    for(const s of StringAge){
        s.innerHTML= pt_br.inputs.age
    }
    for(const s of StringGender){
        s.innerHTML = pt_br.gender.title
    }
    for(const s of StringMasculine){
        s.innerHTML= pt_br.gender.masculine
    }
    for(const s of StringFeminine){
        s.innerHTML= pt_br.gender.feminine
    }
    for(const s of StringPhysicalActivity){
        s.innerHTML= pt_br.activity.title
    }
    for(const s of StringSedentary){
        s.innerHTML= pt_br.activity.sedentary
    }
    for(const s of StringMildly){
        s.innerHTML= pt_br.activity.mildly
    }
    for(const s of StringVery){
        s.innerHTML= pt_br.activity.very
    }
    for(const s of StringExtremely){
        s.innerHTML= pt_br.activity.extremely
    }
    
}

let en = translate.en
function TranslateEn(){
    lang = 2
    
    titleOptionsCalculator.innerHTML = en.typeCalculator
    loading.innerHTML = en.setCalculator
    loadingResults.innerHTML =en.results

    titleCalculatorImc.innerHTML = en.imc.title
    titleCalculatorDensity.innerHTML = en.corporalDensity.title
    titleCalculatorEnergy.innerHTML = en.dailyEnergyExpenditure.title
    titleCalculatorMetabolic.innerHTML = en.basalMetabolicRate.title
    titleCalculatorNutritional.innerHTML = en.nutritionalNeeds.title

    opIMC.innerHTML = en.imc.title
    opDensity.innerHTML = en.corporalDensity.title
    opEnergy.innerHTML = en.dailyEnergyExpenditure.title
    opMetabolic.innerHTML = en.basalMetabolicRate.title
    opNutritional.innerHTML = en.nutritionalNeeds.title

    StringCalories.innerHTML  = en.nutritionalNeeds.calories
    StringCarbohydrates.innerHTML = en.nutritionalNeeds.carbohydrates
    StringProtein.innerHTML  = en.nutritionalNeeds.protein
    StringFat.innerHTML  = en.nutritionalNeeds.fat

 
    

    for(const i of StringBtCalculate){
        i.innerHTML= en.submit
    }
    for(const s of StringHeight){
        s.innerHTML= en.inputs.height
    }
    for(const s of StringWeight){
        s.innerHTML= en.inputs.weight
    }
    for(const s of StringAge){
        s.innerHTML= en.inputs.age
    }
    for(const s of StringGender){
        s.innerHTML = en.gender.title
    }
    for(const s of StringMasculine){
        s.innerHTML= en.gender.masculine
    }
    for(const s of StringFeminine){
        s.innerHTML= en.gender.feminine
    }
    for(const s of StringPhysicalActivity){
        s.innerHTML= en.activity.title
    }
    for(const s of StringSedentary){
        s.innerHTML= en.activity.sedentary
    }
    for(const s of StringMildly){
        s.innerHTML= en.activity.mildly
    }
    for(const s of StringVery){
        s.innerHTML= en.activity.very
    }
    for(const s of StringExtremely){
        s.innerHTML= en.activity.extremely
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
let stringInvalid



calculatorImc.addEventListener("submit", (event) => {
   event.preventDefault()
   const height = parseFloat(document.querySelector(" #CalculatorIMC #height").value) 
   const weight = parseFloat(document.querySelector("#CalculatorIMC #weight").value)
   let result
   let valid
   let stringimcThinness, stringimcNormal,  stringimcOverweight,  stringimcObesityS,  stringimcObesity, stringimcSlogan
    if(lang == 1){
        stringInvalid = pt_br.invalid
        stringimcThinness = pt_br.imc.thinness
        stringimcNormal = pt_br.imc.normal
        stringimcOverweight = pt_br.imc.overweight
        stringimcObesity = pt_br.imc.obesity
        stringimcObesityS = pt_br.imc.obesityS
        stringimcSlogan = pt_br.imc.slogan
    }else if( lang == 2){
        stringInvalid = en.invalid
        stringimcThinness = en.imc.thinness
        stringimcNormal = en.imc.normal
        stringimcOverweight = en.imc.overweight
        stringimcObesity = en.imc.obesity
        stringimcObesityS = en.imc.obesityS
        stringimcSlogan = en.imc.slogan
    }
   if(isNaN(height))
    {
        result = stringInvalid
        valid = false
    }else if(isNaN(weight))
    {
        result = stringInvalid
        valid = false
    }else

     {  let resultImc = parseInt(weight / (height * height)) 
        let imcGrau 
        valid = true
        if(resultImc < 18.5){
            imcGrau = stringimcThinness
        }else if( resultImc <= 24.9) {
            imcGrau = stringimcNormal
        }else if(resultImc <= 29.9){
            imcGrau = stringimcOverweight
        }else if( resultImc <= 39.9){
            imcGrau = stringimcObesity
        }else{
            imcGrau = stringimcObesityS
        }
        
        result = `${stringimcSlogan} ${resultImc} - ${imcGrau}`
    }
    
    ResutsAplication(result, valid)
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
    let result, resultDensity, resultFat
    let stringSloganD, stringSloganF
    let valid
    
    for(const op of optionGender){
        if(op.checked){
            valorGender = op.value
        }
    }
    
    if(lang == 1){
        stringInvalid  = pt_br.invalid
        stringSloganD = pt_br.corporalDensity.sloganD
        stringSloganF = pt_br.corporalDensity.sloganF
    }else{
        stringInvalid  = en.invalid
        stringSloganD = en.corporalDensity.sloganD
        stringSloganF = en.corporalDensity.sloganF
    }

    if( !isNaN(weight) && !isNaN(age) && !isNaN(haunch) && !isNaN(triceps) & !isNaN(supraIliac) && typeof(valorGender) !== 'undefined') {
        valid = true
        if(valorGender == 'masculine'){
            resultDensity = 1.10938 - 0.0008267 * (haunch + triceps + supraIliac) +  0.0000016* ((haunch + triceps + supraIliac) * (haunch + triceps + supraIliac))  - 0.0002574 * age
        }else{
            resultDensity  =  1.0994921 - 0.0009929 * (haunch + triceps + supraIliac) +  0.0000023 * ((haunch + triceps + supraIliac) * (haunch + triceps + supraIliac))  - 0.0001392 * age
        }

        resultFat =  [(4.95 / resultDensity) - 4.50] * 100

        result = `${stringSloganD} ${parseFloat(resultDensity)} </br> ${stringSloganF} ${parseInt(resultFat) + '%'}`
    }else{
        valid = false
        result = stringInvalid
    }

    ResutsAplication(result, valid)
    
})

calculatorEnergy.addEventListener("submit", (event) => {

    event.preventDefault()
    const height = parseFloat(document.querySelector(" #CalculatorEnergy #height").value) 
    const weight = parseFloat(document.querySelector(" #CalculatorEnergy #weight").value)
    const age = parseInt(document.querySelector("#CalculatorEnergy #age").value)
    const optionGender = document.getElementsByName('gender')
    const optionActivity = document.getElementsByName('activity')
    let valorGender, valorActvity
    let stringSlogan
    let result = 0
    let valid

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

    if(lang == 1){
        stringInvalid  = pt_br.invalid
        stringSlogan = pt_br.dailyEnergyExpenditure.slogan
    }else{
        stringInvalid  = en.invalid
        stringSlogan = en.dailyEnergyExpenditure.slogan
    }

    if( !isNaN(height) && !isNaN(weight) && !isNaN(age) && typeof(valorGender) !== 'undefined' && typeof(valorActvity) !== 'undefined') {
        
        valid  = true
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

        result = `${stringSlogan} ${result} kcal`

    }else{
        valid = false
        result = stringInvalid
    }
    ResutsAplication(result, valid)
    
   
})
calculatorMetabolic.addEventListener("submit", (event) => {
    event.preventDefault()

    const height = parseFloat(document.querySelector(" #CalculatorMetabolic #height").value) 
    const weight = parseFloat(document.querySelector(" #CalculatorMetabolic #weight").value)
    const age = parseInt(document.querySelector("#CalculatorMetabolic #age").value)
    const optionGender = document.getElementsByName('gender')
    let valorGender
    let result = 0
    let stringSlogan
    let valid
    for(const op of optionGender){
        if(op.checked){
            valorGender = op.value
        }
    }

    if(lang == 1){
        stringInvalid  = pt_br.invalid
        stringSlogan = pt_br.basalMetabolicRate.slogan
    }else{
        stringInvalid  = en.invalid
        stringSlogan = en.basalMetabolicRate.slogan
    }
    
    if( !isNaN(height) && !isNaN(weight) && !isNaN(age) && typeof(valorGender) !== 'undefined') {
        valid = true
        if(valorGender == 'masculine'){
            result = 66 + (13.7 * weight) + 5 * (height * 100) - ( age * 6.8)
        }else{
            result = 655 + (9.6 * weight) + 1.8 * (height * 100) - ( age * 4.7)
        }
        result = `${stringSlogan} ${result} kcal`

    }else{
        valid = false
        result = stringInvalid
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
    let stringCarb, stringProtein, stringFat
    let valid 
    if(lang == 1){
        stringInvalid = pt_br.invalid
        stringCarb = pt_br.nutritionalNeeds.sloganCarb
        stringProtein = pt_br.nutritionalNeeds.sloganProtein
        stringFat = pt_br.nutritionalNeeds.sloganFat
    }else{
        stringInvalid = en.invalid
        stringCarb = en.nutritionalNeeds.sloganCarb
        stringProtein = en.nutritionalNeeds.sloganProtein
        stringFat = en.nutritionalNeeds.sloganFat
    }

    if(!isNaN(calories) && !isNaN(carbohydrates) && !isNaN(protein) && !isNaN(fat)){
        valid = true
        let tCarb = parseInt((calories  /  (carbohydrates * 100)) / 4 * 1000)
        let tProtein = parseInt((calories  / (protein * 100)) / 4 * 1000)
        let tFat = parseInt((calories / (fat * 100)) / 9  * 1000)

        result = `${stringCarb} ${tCarb}g </br> ${stringProtein} ${tProtein}g </br> ${stringFat} ${tFat}g`
    }else{
        valid = false
        result = stringInvalid
    }
    ResutsAplication(result, valid)
})


function ResutsAplication(result, valid){
    let text = ""
    pResult.innerHTML = " " 
    loadingResults.classList.add("disabled") 
    pResult.innerHTML = result
    console.log(result)
   
    results.appendChild(pResult)
}


btTheme.addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    themeMoon.classList.toggle('disabled')
    themeSun.classList.toggle("disabled")
})

document.addEventListener("DOMContentLoaded", () => {
    setTimeout( () => modal.classList.remove("disabled"), 1000)
    const savedMode = localStorage.getItem('dark');
    if (savedMode) {
        document.body.classList.add('dark-mode');
    }
})

btModal.addEventListener("click", () =>  modal.classList.add('disabled'))