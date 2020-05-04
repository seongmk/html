function subPosition(){
  var movie=$('a[title="영화"]').offset().left;
  var tiket=$('a[title="예매"]').offset().left;
  var cinema=$('a[title="극장"]').offset().left;
  var event=$('a[title="이벤트"]').offset().left;
  var bonus=$('a[title="혜택"]').offset().left;
  $('#movie_sub').css('padding-left',movie-90);
  $('#tiket_sub').css('padding-left',movie+0);
  $('#cinema_sub').css('padding-left',movie+150);
  $('#event_sub').css('padding-left',movie+450);
  $('#bonus_sub').css('padding-left',movie+710);
}