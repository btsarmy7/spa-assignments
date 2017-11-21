import 'app/body.styles'
import templateUrl from 'app/body.template'

const controller =
  class FtBodyController {
    constructor ($log, appService) {
      'ngInject'
      this.service = appService
      $log.log('ft-body is a go')
    }

    get amount () {
      return this.service.amount
    }

    get multiplier(){
      return this.service.multiplier
    }

   /* get multiplierCost(){
      return this.service.multiplierCost
    }

    get autoclickerCost(){
      return this.service.autoclickerCost
    }*/

    get clickers(){
      return this.service.clickerCount
    }

   /* get resetDisabled(){
      this.service.resetDisabled
    }*/

    click () {
      this.service.increment()
    }
  

    clickMult () {
      if(this.service.total < 10){
        alert('total needs to be greater than 10')
      } else {
        this.service.multiply()
      }
  }


    autoClick () {
      if(this.service.total < 100){
        alert('total needs to be greater than 100')
      } else {
        this.service.addClicker()
      }
  }

    resetGame () {
      this.service.reset()
    }

    saveGame (){
      this.service.save()
    }


    loadGame (){
      if(this.service.beenSaved === false){
        alert('no game saved')
      } else {
      this.service.load()  
      }  
    }
}

export const ftBody = {
  controller,
  templateUrl,
  controllerAs: 'body'
}
