// popup cookie
var day3=$('#day3')
var allDay=$('#allday')
$('#close_btn').click(function(){
  if(day3.is(':checked')){
    $.cookie('day3close','true',{espires:3,path:'/'});
  }else if(allDay.is(':checked')){
    $.cookie('alldayclose','true',{espires:1000,path:'/'});
  }
  $('.pop_up').hide();
  if($.cookie('day3close')=='true' || $.cookie('alldayclose')=='true'){
    $('.pop_up').hide();
  }else{
    $('.pop_up').show();
  }
  day3.click(function(){
    if($(this).is(':checked')){
      allDay.prop('checked',false);
    }
  });
  day3.click(function(){
    if($(this).is(':checked')){
      day3.prop('checked',false);
});