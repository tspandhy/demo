 const debounce = function(fn,delay,rr){
    let timer = null
    let ag = arguments
    console.log("我才是ag",ag)
    return ()=>{
        // let content = this
        let args = arguments
        console.log(this,"我是外面的this")
        console.log(arguments,args,fn,delay,rr)
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout( function(){
            console.log(this,"我是里面的this")
            // fn.call(content,args)
            fn()
        },delay)
    }
}
    export default debounce