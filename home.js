(function(){
    let social = document.querySelectorAll('.social div')
    social.forEach(function(social, index){
        social.style.animation = `moveIn .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7+.2}s`

    })





}())