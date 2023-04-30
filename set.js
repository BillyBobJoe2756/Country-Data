let countries = "placeholder"
let orgCountries = new Array()
let capOrg = new Array()
let langOrg = new Array()

fetch("https://restcountries.com/v3.1/all")
.then(api => api.json())
.then(data =>{countries = data })
.catch(error=>console.error(err))

//console.log(countries) //fetch is asynchronus, so it wont block this code if it is still fetching
//so this will most likely log placeholder rather than anything else.

orgCountris = 

setTimeout(()=>{setCountries()},100)
const setCountries = ()=>{
    let counter = 0
    for(country of countries){
        let dataSet = new Array()
        if('name' in country && country.name.common != 'Åland Islands'){
            dataSet.push(country.name.common)
        }else if(country.name.common == 'Åland Islands'){
            dataSet.push('Aland Islands')
        }else{
            dataSet.push('No Name')
        }
        if('capital' in country){
            dataSet.push(country.capital)
        }else{
            dataSet.push(["None"])
        }
        if('languages' in country){
            dataSet.push(Object.values(country.languages))
        }else{
            dataSet.push(["None"])
        }
        if('population' in country)
            dataSet.push(country.population)
        if('flags' in country)
            dataSet.push(country.flags.png)
        orgCountries.push(dataSet)
        counter++
    }
    console.log(counter + " countries loaded")
    orgCountries = mergeSort(orgCountries,0)
    capOrg = mergeSort(orgCountries,1)
    langOrg = mergeSort(orgCountries,2)

}

const mergeSort = (arr, val) => {
    if(arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    return merge(mergeSort(left, val), mergeSort(right, val),val)
}

const merge = (arr1, arr2,val) =>{
    const result = new Array()
    if(val == 0 || val ==3){
        while(arr1.length && arr2.length){
            if(arr1[0][val] < arr2[0][val]){
                result.push(arr1.shift())
            }else{
                result.push(arr2.shift())
            }
        }

        while(arr1.length){
            result.push(arr1.shift())
        }

        while(arr2.length){
            result.push(arr2.shift())
        }
        return result
    }else{
        while(arr1.length && arr2.length){
            if(arr1[0][val][0] < arr2[0][val][0]){
                result.push(arr1.shift())
            }else{
                result.push(arr2.shift())
            }
        }

        while(arr1.length){
            result.push(arr1.shift())
        }

        while(arr2.length){
            result.push(arr2.shift())
        }
        return result
    }
}

let nextCountries = document.createElement('script')
nextCountries.src = "./scripts/main.js"
let body = document.querySelector('body')

let title = document.querySelector('h1')
let text = title.textContent
title.innerHTML = ''

for(let i = 0; i < text.length; i++){
    let span = document.createElement('span')
    span.textContent = text.charAt(i)
    title.appendChild(span)
}
setTimeout(()=>{body.appendChild(nextCountries)},500)

function addQuote(arr){
    let newArr = new Array(arr.length)
    for(let i = 0; i < arr.length;i++){
        newArr[i] = "\'" + arr[i] + "\'"
    }
    return newArr
}