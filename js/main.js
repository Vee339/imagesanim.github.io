const prev = document.querySelector('.previous')
const next = document.querySelector('.next')
var container = document.getElementsByClassName('container')
var firstimg = container[a]
//console.log(container)
next.addEventListener("click",function(){
	for(a = 0; a < container.length; a++){
		var style = getComputedStyle(container[a])
		var zIndexx
	    if(style.zIndex == 5){
			container[a].style.zIndex = 1
	    }else{
		    zIndexx = Number(style.zIndex)
		    container[a].style.zIndex = zIndexx + 1
	    }
		
    }
})

prev.addEventListener("click",function(){
	for(b = 0; b < container.length; b++){
		var style = getComputedStyle(container[b])
		var zIndexx
	    if(style.zIndex == 1){
			container[b].style.zIndex = 5
	    }else{
		    zIndexx = Number(style.zIndex)
		    container[b].style.zIndex = zIndexx - 1
	    }
    }
})