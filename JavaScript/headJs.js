window.addEventListener("DOMContentLoaded",function(){var a=document.getElementById("heab_img_min"),b=document.getElementById("heab_img");a.onmouseover=function(){var a=window.clientWidth||document.documentElement.clientWidth;b.style.left=(a-970)/2+"px",b.style.display="block"},heab_img.onmouseout=function(){b.style.display="none"};var c=document.getElementById("head_div2"),d=document.getElementById("head_div");c.onmouseenter=function(){d.style.opacity="1",d.style.height="580px"},c.onmouseleave=function(){d.style.opacity="0",d.style.height="0px"};for(var e,f=document.getElementsByClassName("head_div3"),g=0;g<f.length;g++){e=f[g].getElementsByClassName("div_p");for(var h=0;h<e.length;h++)e[h].onmouseover=function(){for(var a=this.parentNode.getElementsByClassName("div_p"),b=0;b<a.length;b++)a[b].getElementsByTagName("div")[0].style.display="none",a[b].getElementsByTagName("span")[1].style.display="block";this.getElementsByTagName("div")[0].style.display="block",this.getElementsByTagName("span")[1].style.display="none"}}});