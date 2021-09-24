function init(){
    var images=document.querySelectorAll("div.color img")
    for(var i=0;i<images.length;i++)
    images[i].onclick=function(){
        var path= this.src
        var img=document.getElementById("mainImage")
        img.src=path
    }

    var selectsize=document.querySelectorAll("ul.selectSize li")
    for(var i=0;i<selectsize.length;i++)
    selectsize[i].onclick=function() {
    this.setAttribute("style","background-color: lightgray")
    }
}
function search(){
var k=document.getElementById("kw")
if(k!=null){
    k=k.value
    var product=document.querySelectorAll(".productTitle")
    for(var i=0;i<product.length;i++){
    var h3=product[i].getElementsByTagName("h3")[0].innerText
        if(h3.indexOf(k)>=0)
            product[i].style.color="red"
    }
    setTimeout(function() {
        var product = document.querySelectorAll(".productTitle")
            for (var i = 0; i < product.length; i++)
                product[i].style.color="none"
        }, 2000)
    }  
}            
$(document).ready(function(){
    $("#goToTop").hide()
    $(window).scroll(function(){
       if($(this).scrollTop()>=100)
        $("#goToTop").show("Slow")
       else
        $("#goToTop").hide("Slow")
       })
       $("#goToTop").click(function(){
        $("html,body").animate({scrollTop:0},1000)
    })
    
    $("#goToFooter").click(function(){
        $("html,body").animate({scrollTop:2000},1000)
    })
    $("#btnButton").click(function(){
        $("html,body").animate({scrollTop:960},1000)
    })
}
)


function buy(){
    const modal  = document.querySelector('.modal')
    const closeModal = document.querySelector('.modal-close')
    const modalContainer = document.querySelector('.js-modal-container')
    
    modal.classList.add('open')
    function closeBuyTickets(){
        modal.classList.remove('open')
    }
    closeModal.addEventListener('click',closeBuyTickets)
    modal.addEventListener('click',closeBuyTickets)
    modalContainer.addEventListener('click',function(event){
        event.stopPropagation()
    })
}
$("nav ul.types li a").click(function(){
    var link=$(this).attr("href")
    $("html, body").animate({
        scrollTop: $(link).prop("offsetTop")+"px"
    },1000)
})



