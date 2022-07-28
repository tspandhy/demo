export const throttle = (fn,gapTime=1500)=>{
   let lastTime = null
   return function (){
    let newTime = +new Date()
    if(newTime-lastTime>gapTime){
        fn.apply(this,arguments) 
        lastTime = newTime
    }
   }
}
