function main(){
  skip();
      banner();
      login();
      popup();
      sitemap();
      subPosition();
      
      // swiper
      var swiper = new Swiper('.swiper-container',{
        slidesPerView: 3.5,
        spaceBetween: 40,
        loop:true,
        autoplay:{
          delay:3000,
        },
        speed:300,
        // pagination: {
        // el: '.swiper-pagination',
        // clickable: true,
        // },
      });

      $('.git_hub').click(function(){
        location.href='https://github.com/pam7462/megabox';
      });

    
      $(window).resize(function(){
        subPosition();
      });

      var cnt=0;
      $('#prev').click(function(){
        if(cnt>0){
          cnt--;
        }else{
          cnt=3;
        }       
        userSlide(cnt);
      })
      $('#next').click(function(){
        if(cnt<3){
          cnt++;
        }else{
          cnt=0;
        }
        userSlide(cnt);
      })

}