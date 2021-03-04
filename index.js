let lis=document.querySelectorAll('.seckill-nav li');
let uls=document.querySelectorAll('.seckill-goods ul');


for(let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
           lis.forEach(li=>li.classList.remove('active'));
           uls.forEach(li=>li.classList.remove('active'));
           lis[i].classList.add('active');
           uls[i].classList.add('active');
       
    }
    
}

var seckillNav = document.getElementById("seckillNav");
console.log(seckillNav);
window.onscroll = function(){ 
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
    
    if( scrollTop >= 260){
        seckillNav.className = "seckill-nav navfix"
    }else {
        seckillNav.className = "seckill-nav";
    }
    console.log(scrollTop);
}



