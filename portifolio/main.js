const acordiontriggers = document.querySelectorAll('.acordion .trigger')


acordiontriggers.forEach((triger) =>{
    triger.addEventListener('click',(e)=>{
      
        const acordion = triger.parentElement
        
        const  isOpen = acordion.classList.contains('open')

        if(isOpen){
            acordion.classList.remove('open')
            acordion.classList = Array.of(acordion.classList).filter(className => className !== 'open')
        }else{
            acordion.classList.add('open')
        } 

    })  

})