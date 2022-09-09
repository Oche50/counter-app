let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
const incrementEl = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')

incrementEl.addEventListener('click', function(){
    count+=1
    countEl.textContent=count
})


saveBtn.addEventListener('click', function(){
    let countStr=count + ' - '
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
})
