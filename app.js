class App{




    on(name,cb){
        this.waiters[name] = cb
    }


    async events(){
        let interval = null
        interval = setInterval(() => {
            if(this.waiters.ready){
                this.waiting.ready = this.waiting.ready ? this.waiting.ready : null
                if(this.detachements.ready){
                    this.waiting.ready = true
                    this.waiters.ready()
                }
                if(this.waiting.ready) {
                    this.waiting.ready = null
                    this.waiters.ready = null
                    clearInterval(interval)
                }
            }
            
        }, 1500);

    }

    constructor(){
        this.waiters = {}
        this.waiting = {}
        this.man = require('./man')
        this.detachements = new this.man.classes.detachements(this.man.data,this.man.classes)
        this.eventloops = 0
    }





}
const app = new App()
console.clear()
app.on(
    'ready',()=>{

        const one = app.detachements.firstOne()
        console.log(one.getRooms().firstOne())
        
    }
)
app.events()