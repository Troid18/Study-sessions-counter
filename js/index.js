let count = 0
let countEl = document.getElementById("count-session")
let session = document.getElementById("answer")

function increment(){

    count += 1
    countEl.textContent = count
}

function decrement(){

    count -= 1
    countEl.textContent = count
}

function save(){

    let results = count + ' - '
    session.textContent += results
    count = 0
    countEl.textContent = count
}

function reset(){

    count = 0
    countEl.textContent = count
     

    
}