class CalcController{
    
    constructor(){
        
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayTime();

        setInterval(()=>{
            this.setDisplayTime();
        }, 1020)
    }


    //-------------------------Métodos-----------------------
    
    initButtonsEvents(){

        let buttons =  document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index) => {
            
            this.addEventListenerAll(btn,"click drag", e => {
                
                console.log(btn.className.baseVal.replace("btn-", ""));

            });
            
        });

        this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

            btn.style.cursor = "pointer";

        })
    }
        
    setDisplayTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

// ---------------------DisplayTime-------------------------
    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }
// ---------------------DisplayDate-------------------------
    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }
// ---------------------DisplayCalc-------------------------

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

//------------------------CurrentDate----------------------

// O current Date retorna a instância de um novo date, 
// para ficar mais fácil.

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}