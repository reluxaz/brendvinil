  $(".menyu").click(function() {
        $("nav ul").toggleClass("newcss1");
        });   
        $("#body ul li").click(function(){
            $(".t6").css({"animation-name":"move3","animation-duration":"0.6s"})
             $(".t6").hide();
             var b = $(this).attr("cat");
             $("."+b).show();
             $("#body ul li").css("background", "black")
            $(this).css("background", "#ff7c00")
          });
        $(".g3").click(function () {
            m = Number($(this).text());
            $(".g3").css("background", "transparent")
            $(this).css("background", "black")
        })
        $(".f5").click(function(){
            var l=$(this).attr("cat")
            didi.src=l+".png"
        })
  var s6=document.querySelector(".t3");
  window.addEventListener("scroll",function(){
    if(window.scrollY>800){
    s6.style.display="block"
    console.log('asdadsjk')
    }
    else{
      s6.style.display="none"
    }
  })