
let countryFormat = ['name','capital','languages','population','flag']
orgCountries // the list of organized countries in the format above
let org = 1 //organized by 1-name, 2-capital , 3-languages
let cName = document.querySelector('#name')
let capital = document.querySelector('#capital')
let lang = document.querySelector('#lang')
let filter = document.querySelector('input')
let disp = document.querySelector('#display')
let type = "name"
let asc = true
let counter = 0;
let criteria = document.querySelector('#criteria')
let graphButton = document.querySelector('#graphButton')
let graph = document.querySelector('#graph')
let pop = document.querySelector('#pop')
let lGraph = document.querySelector('#lGraph')
let gSub = document.querySelector('#gSub')
let countryList = new Array();
let shownGraph = "pop"
let graphBG = document.querySelector('#gBack')
let notice = document.createElement('p')
notice.classList.add('warning')
notice.textContent = "No Countries Data"
notice.style.height = '100%';


for(country of orgCountries){
    countryList.push(country)
}

graphButton.addEventListener('click',()=>{
    graph.scrollIntoView();
})

function buttonStuff(element){
    element.addEventListener('click',()=>{
        element.style.backgroundColor = 'rgb(180, 121, 10)'
        setTimeout(()=>{
            element.style.backgroundColor = 'orange'
        },100)
    })
}
buttonStuff(cName)
buttonStuff(capital)
buttonStuff(lang)
buttonStuff(pop)
buttonStuff(lGraph)

pop.addEventListener('click',()=>{
    gSub.textContent = "World Populations"
    shownGraph = "pop"
    organize(type,asc)
})

lGraph.addEventListener('click',()=>{
    gSub.textContent = "World Languages"
    shownGraph = "lang"
    organize(type,asc)
})




filter.addEventListener('input',()=>{
    console.log('potato')
    organize(type,asc)
})

cName.addEventListener('click',()=>{
    capital.textContent = "Capital"
    lang.textContent = "Language"
    if(cName.textContent == "Name ↓"){
        cName.textContent = "Name ↑"
        asc = false;
        type = "name"
        organize(type,asc)
    }else{
        cName.textContent = "Name ↓"
        asc = true;
        type = "name"
        organize(type,asc)
    }
    
})

capital.addEventListener('click',()=>{
    cName.textContent = "Name"
    lang.textContent = "Language"
    if(capital.textContent == "Capital ↓"){
        capital.textContent = "Capital ↑"
        asc = false;
        type = "capital"
        organize(type,asc)
    }else{
        capital.textContent = "Capital ↓"
        asc = true;
        type = "capital"
        organize(type,asc)
    }


})

lang.addEventListener('click',()=>{
    cName.textContent = "Name"
    capital.textContent = "Capital"
    if(lang.textContent == "Language ↓"){
        lang.textContent = "Language ↑"
        asc = false;
        type = "lang"
        organize(type,asc)
    }else{
        lang.textContent = "Language ↓"
        asc = true;
        type = "lang"
        organize(type,asc)
    }

})

function organize(type, asc){
    countryList = new Array()
    disp.innerHTML = ''
        if(type == "name" && asc){
            for(let country of orgCountries){
                if(country[0].toUpperCase().indexOf(filter.value.toUpperCase()) == 0){
                    console.log('did a thing')
                    countryAdd(country)
                    countryList.push(country)
                    counter++
                }
            }
        }else if(type =="name" && !asc){
            for(let i = orgCountries.length-1; i >= 0; i--){
                if(orgCountries[i][0].toUpperCase().indexOf(filter.value.toUpperCase()) == 0){
                    countryAdd(orgCountries[i])
                    countryList.push(country)
                    counter++
                }
            }
        }else if(type =="capital" && asc){
            for(let country of capOrg){
                for(let i = 0; i < country[1].length;i++){
                    if(country[1][i].toUpperCase().indexOf(filter.value.toUpperCase()) == 0){
                        countryAdd(country)
                        countryList.push(country)
                        counter++
                        break;
                    }
                }
            }
        }else if(type =="capital" && !asc){
            for(let i = capOrg.length-1; i >= 0; i--){
                for(let j = 0; j < capOrg[i][1].length;j++){
                    if(capOrg[i][1][j].toUpperCase().indexOf(filter.value.toUpperCase()) == 0){
                        countryAdd(capOrg[i])
                        countryList.push(country)
                        counter++
                        break;
                    }
                }
            }
        }else if(type =="lang" && asc){
            for(let country of langOrg){
                for(let i = 0; i < country[2].length;i++){
                    if(country[2][i].toUpperCase().indexOf(filter.value.toUpperCase()) == 0){
                        countryAdd(country)
                        countryList.push(country)
                        counter++
                        break;
                    }
                }
            }
        }else if(type =="lang" && !asc){
            for(let i = langOrg.length-1; i >= 0; i--){
                console.log(langOrg[i])
                for(let j = 0; j < orgCountries[i][2].length;j++){
                    if(langOrg[i][2][j].toUpperCase().indexOf(filter.value.toUpperCase()) == 0){
                        countryAdd(langOrg[i])
                        countryList.push(country)
                        counter++
                        break;
                    }
                }
            }
        }
        if(filter.value == ''){
            criteria.textContent = ''
                countryList = orgCountries
        }else{
            criteria.textContent = counter + " countries satisfied the search criteria"
        }
        counter = 0;
        if(disp.innerHTML == ''){
            let empty = document.createElement('h1')
            empty.textContent = "No Results Found"
            disp.appendChild(empty)
        }
        createGraph()
}

let countryAdd = (country)=>{

    let box = document.createElement('div')
    let img = document.createElement('div')
    let flag = document.createElement('img')
    let name = document.createElement('p')
    let lang = document.createElement('p');lang.classList.add('sub');
    let capital = document.createElement('p');capital.classList.add('sub');
    let pop = document.createElement('p');pop.classList.add('sub');

    let cName = country[0]; name.textContent = cName;
    let cCap = country[1]; capital.textContent = "Capital: " + cCap.join(', ');
    let cLangs = country[2];lang.textContent = "Languages: " + cLangs.join(', ');
    let cPop = country[3]; pop.textContent = "Population: " + addCommas(cPop);

    img.classList.add('flagBox')
    flag.classList.add('flag') 
    flag.src = country[4]
    flag.alt = country[0] + " flag"

    img.appendChild(flag)
    box.classList.add('country')

    box.appendChild(img)
    box.appendChild(name)
    box.appendChild(capital)
    box.appendChild(lang)
    box.appendChild(pop)

    disp.appendChild(box)
}

function addCommas(num) {
    let strNum = num.toString(); // convert number to string
    let result = ''; // initialize result string
    
    for (let i = strNum.length - 1; i >= 0; i--) {
      if ((strNum.length - i - 1) % 3 === 0 && i !== strNum.length - 1) {
        result = ',' + result; 
      }
      result = strNum[i] + result; 
    }
    
    return result;
  }



const binarySearch = (arr,val)=>{
    let min = 0
    let max = arr.length-1
    let guess

    while(max >= min){
        guess = Math.floor((max+min)/2)
        if(arr[guess][0] == val){
            return guess
        }else if(arr[guess][0] > val){
            max = guess - 1
        }else{
            min = guess + 1
        }
    }
    return -1
}

function createGraph(){
    if(countryList.length == 0){
        graphBG.innerHTML = ''
        graphBG.appendChild(notice)
        return
    }
    if(shownGraph == "pop"){
        graphBG.innerHTML = ''
        countryList = mergeSort(countryList,3)
        let max = countryList[countryList.length-1][3]
        let info = document.createElement('div')
        info.classList.add('data')
        let nam1 = document.createElement('p'); nam1.textContent = "Country";nam1.style.color = "black"; nam1.style.width = '15%';
        let bBar1 = document.createElement('div');bBar1.style.width = '70%'
        let aPop1 = document.createElement('p'); aPop1.textContent = "Population";aPop1.style.color = "black";aPop1.style.width = '15%';
        info.appendChild(nam1)
        info.appendChild(bBar1)
        info.appendChild(aPop1)
        graphBG.appendChild(info)

        for(let i = countryList.length-1;i >= countryList.length-1-10;i--){
            try{
                countryList[i]
            }catch(err){
                break;
            }
            let datum = document.createElement('div')
            let nam = document.createElement('p'); nam.textContent = countryList[i][0];nam.style.color = "black";
            let cBar = document.createElement('div');cBar.style.backgroundColor= "orange";
            let bBar = document.createElement('div');
            let aPop = document.createElement('p'); aPop.textContent = addCommas(countryList[i][3]);aPop.style.color = "black";

            nam.style.width = '15%'
            let cWidth = 70*(countryList[i][3]/max)
            console.log(cWidth)
            cBar.style.width = cWidth + "%"
            cBar.style.height = '100%'
            bBar.style.width = (70-cWidth) + "%"
            bBar.style.height='100%'
            aPop.style.width = '15%'

            datum.classList.add('data')
            datum.appendChild(nam)
            datum.appendChild(cBar)
            datum.appendChild(bBar)
            datum.appendChild(aPop)
            graphBG.appendChild(datum)  
        }
    }else{
        graphBG.innerHTML = ''
        let langList = new Array();
        let langNums = new Array();
        for(let country of countryList){
            for(let i = 0; i < country[2].length;i++){
                if(langList.indexOf(country[2][i]) != -1){
                    langNums[langList.indexOf(country[2][i])] += 1;
                }else{
                    langList.push(country[2][i])
                    langNums.push(1);
                }
            }
        }
        const length = langNums.length;
  
        for (let i = 0; i < length; i++) {
          for (let j = 0; j < length - 1 - i; j++) {
            if (langNums[j] > langNums[j + 1]) {
              // Swap the elements using destructuring assignment
              [langNums[j], langNums[j + 1]] = [langNums[j + 1], langNums[j]];
              [langList[j],langList[j + 1]] = [langList[j+1], langList[j]]
            }
          }
        }

        let info = document.createElement('div')
        info.classList.add('data')
        let nam1 = document.createElement('p'); nam1.textContent = "Language";nam1.style.color = "black"; nam1.style.width = '15%';
        let bBar1 = document.createElement('div');bBar1.style.width = '70%'
        let aLang1 = document.createElement('p'); aLang1.textContent = "Countries that Speak";aLang1.style.color = "black";aLang1.style.width = '15%';
        info.appendChild(nam1)
        info.appendChild(bBar1)
        info.appendChild(aLang1)
        graphBG.appendChild(info)

        for(let i = langNums.length-1; i >  langNums.length-1-10; i--){
            try{
                langNums[i]
            }catch(err){
                console.log(err)
                break;
            }

            let datum = document.createElement('div');datum.classList.add('data');
            let language = document.createElement('p'); language.textContent = langList[i];language.style.color = "black"; language.style.width = '15%';
            let cBar = document.createElement('div');cBar.style.backgroundColor = "orange";cBar.style.height = '100%';
            let bBar = document.createElement('div');bBar.style.height = '100%';
            let aLang1 = document.createElement('p'); aLang1.textContent = addCommas(langNums[i]);aLang1.style.color = "black";aLang1.style.width = '15%';
            
            let cWidth = 70 * (langNums[i]/100) 
            cBar.style.width = cWidth + '%'
            bBar.style.width = (70-cWidth) + '%'

            datum.appendChild(language)
            datum.appendChild(cBar)
            datum.appendChild(bBar)
            datum.appendChild(aLang1)
            graphBG.appendChild(datum)
        }
    }
}




for(let country of orgCountries){
    countryAdd(country)
}
createGraph()



console.log("main loaded")
