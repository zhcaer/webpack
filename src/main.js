document.addEventListener("click",()=>{ //按需加载分割的1.js
    import("./pages/a.js").then(({default: func})=>{
        func()
    })
})
