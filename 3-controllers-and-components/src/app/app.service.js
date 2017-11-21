export class AppService {

  amount = 1
  total = 0
  multiplier = 1.2
  multiplierCost = 10
  autoclickerCost = 100
  clickerCount = 0
  clickers = []
  saved = []
  resetDisabled = true
  beenSaved = false;

  constructor ($interval, $window/*, localStorageService*/){
    'ngInject'
    this.$interval = $interval
    this.$window = $window
    //this.localStorageService = localStorageService
  }

  increment() {
    this.total = this.total + this.amount
    this.resetDisabled = false
    //this.save()
  }

  multiply(){
    this.amount = this.amount * this.multiplier
    this.multiplier = this.multiplier * this.multiplier
    this.total = this.total + this.amount
    this.total = this.total - 10
    //this.save()
}

  load() {
   /*if(this.saved === null){ // check if previous game was saved
     this.reset()
   }else{ // retrieve saved stats*/
    
    this.saved[0] = this.$window.localStorage.getItem('total')
    this.saved[1] = this.$window.localStorage.getItem('amount')
    this.saved[2] = this.$window.localStorage.getItem('multiplier')
    this.saved[3] = this.$window.localStorage.getItem('clickerCount')

    this.$window.localStorage.removeItem('total')
    this.$window.localStorage.removeItem('amount')
    this.$window.localStorage.removeItem('multiplier')
    this.$window.localStorage.removeItem('clickerCount')

    this.total = this.saved[0] * 1
    this.amount = this.saved[1] * 1
    this.multiplier = this.saved[2] * 1
    this.clickerCount = this.saved[3] * 1
     /*this.total = this.saved[0]
     this.amount = this.saved[1]
     this.multiplier = this.saved[2]
     this.multiplierCost = this.saved[3]
     this.clickerCount = 0
     this.clickers.length = 0 */
     for(let i = 0; i < this.$window.localStorage.getItem('clickerCount'); i++){
       this.addClicker
     }
  // }
  }

 save(){

  this.$window.localStorage.setItem('total', this.total)
  this.$window.localStorage.setItem('amount', this.amount)
  this.$window.localStorage.setItem('multiplier', this.multiplier)
  this.$window.localStorage.setItem('clickerCount', this.clickerCount)
  /*this.saved = []
  this.saved.push(this.total)
  this.saved.push(this.amount)
  this.saved.push(this.multiplier)
  this.saved.push(this.multiplierCost)
  this.saved.push(this.clickerCount)*/
  this.beenSaved = true
  }

addClicker(){
  if(this.total >= 100){
    this.clickers.push(this.$interval( () => {this.increment()}, 1000))
    this.clickerCount++
    this.total = this.total - 100
  }
}

reset(){
  this.amount = 1
  this.total = 0
  this.multiplier = 1.2
  this.multiplierCost = 10
  this.autoclickerCost = 100
  this.clickerCount = 0
  this.saved = []
  this.resetDisabled = true

  for(let i = 0; i < this.clickers.length; i++){
    this.$interval.cancel(this.clickers[i])
  } 
  this.clickers = []
  this.saved = []

}

}
