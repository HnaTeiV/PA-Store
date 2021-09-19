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
})