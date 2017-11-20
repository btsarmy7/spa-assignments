
let total = 0;
let multi = 1.2;
let theCounter = 0

let storedTotal = localStorage.getItem('total')
let storedCounter = localStorage.getItem('theCounter')
let storedMulti = localStorage.getItem('multi')

const errorMsg = 'IlleeEEEeeegirl'
let stopIndicator = 0;

 
$(document).ready(() => {

    $("#load_button").click(
        (event) => {
            if(storedTotal != null){
                total = storedTotal 
                theCounter = storedCounter
                multi = storedMulti
                displayTotal(total)
            }
        }
    )

    $("#add_button").click(
            (event) => {
                displayTotal(add())
             })
    
    $("#multi_button").click(
            (event) => {
                if(total < 10) {
                    alert(errorMsg)
                    } else {
                        total = total - 10;
                        multi = multi * multi
                    }

                    $('#add_button').html('+' + multi)
                    $('#multi_button').html('*' + multi)                      
                    displayTotal(total)

                    })

                      
    $("#auto_button").click(
            (event) => {
                if (total < 100){
                    alert(errorMsg)
                } else {
                    addTimer()
                    startAutoClicker()
             }
             $('#autoClickerCount').html('AutoClickerCount : '  + theCounter)
                if(total > 100){
                    total = total - 100 
                }                    
             })

    $("#save_button").click( 
            (event) => {
            localStorage.setItem('total', total)
            localStorage.setItem('theCounter', theCounter)
            //localStorage.setItem('multi', multi)        
        })



$("#reset").click(
    (event) => {
        clearTotal()
    }
)

localStorage.setItem('total', total)
localStorage.setItem('theCounter', theCounter)
localStorage.setItem('multi', multi)
displayTotal(total)

}) 


const displayTotal = (a) => {
    checkTotal()
    return $('#total').html('  ' + a)
 }
 
const add = () => {
    if(multi > 1.2){
        total = total + multi
    }
    else{
        total++
    }
    return total
 }

const addTimer = () => {
    if(stopIndicator === 0){
        displayTotal(add())
      return setTimeout(addTimer, 1000)
    }
    else{
        stopIndicator = 0;
    }
    checkTotal()
 }

const startAutoClicker = () => {  
    theCounter++  
    return theCounter
 }
 
 const clearTotal = () => {

    localStorage.removeItem('total')
    localStorage.removeItem('theCounter')
    localStorage.removeItem('multi')

    stopIndicator = 1
    total = 0
    multi = 0
    $('#add_button').html('+1')
    displayTotal(total)
 }
 
 const checkTotal = () => {
    if (total >= 100) {
        $('#auto_button').fadeIn('slow')
    } else if(total >= 10 && total < 100)  {
        $('#multi_button').fadeIn('slow')
        $('#auto_button').fadeOut('slow')
     } else {
        $('#auto_button').fadeOut('slow')
        $('#multi_button').fadeOut('slow')
     }   
 }