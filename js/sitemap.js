$(function(){
  $('#sitemap_btn').click(function(){
    $('.sitemap').toggle();
    var imgSrc=$('#sitemap_btn');
    if(imgSrc.attr('src')=='images/ham.png'){
      imgSrc.attr('src','images/close.png');
    }else{
      imgSrc.attr('src','images/ham.png');
    }
  });
})