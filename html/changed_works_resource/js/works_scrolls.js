var init_first_move = false;
var init_second_move = false;
var init_third_move = false;

var sub_header = document.getElementById('sub_header');
var sub_header_height = sub_header.clientHeight;
var header_contents = document.getElementById('header_contents');
var last_scroll_location = 0;
var intro_video_contents_arrow = document.getElementById('intro_video_contents_arrow');
var sub_column = document.getElementById('sub_column');
var fixed_button = document.getElementById('fixed_button');


var works_main_contents_offset = $("#works_main_contents").offset();
var contents_group_wrapper_offset = $("#contents_group_wrapper").offset();
var contents_bottom_offset = $("#contents_bottom").offset();

document.addEventListener('scroll', function() {

  let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치


  if(scrollLocation == 0){
    init_first_move = false;
    init_second_move = false;
    init_third_move = false;
  }

  if(!init_first_move && scrollLocation > works_main_contents_offset.top) {
    init_first_move = true;
  } 
  
  if(scrollLocation > 100 && scrollLocation < sub_header_height && !init_first_move){
    $('html, body').animate({scrollTop : works_main_contents_offset.top}, 1200);
    console.log('go to main contents');
    init_first_move = true;
  }

  if(!init_second_move && scrollLocation > contents_group_wrapper_offset.top) {
    init_second_move = true;
  } 

  if(scrollLocation > works_main_contents_offset.top && !init_second_move){
    $('html, body').animate({scrollTop : contents_group_wrapper_offset.top}, 1200);
    console.log('go to main contents');
    init_second_move = true;
  }

  console.log('coontents bottom offset ' + contents_bottom_offset);
  if(!init_third_move && scrollLocation > contents_bottom_offset.top) {
    init_third_move = true;
  } 

  if(scrollLocation > contents_group_wrapper_offset.top && !init_third_move){
    $('html, body').animate({scrollTop : contents_bottom_offset.top}, 1200);
    console.log('go to main contents');
    init_third_move = true;
  }

  if(scrollLocation < last_scroll_location){
    header_contents.style.display = "block";
    sub_column.style.top = "95px"; //include header padding
  } else { 
    header_contents.style.display = "none";
    sub_column.style.top = 0;
  }

  if(scrollLocation + 95 > sub_header_height){ /*include header padding*/
    sub_column.style.position = "fixed";
  } else {
    sub_column.style.position = "static";
  }

  last_scroll_location = scrollLocation;
});

intro_video_contents_arrow.addEventListener('click', function () {
  var offset = $("#intro_text_contents_hrc").offset();
  $('html, body').animate({scrollTop : offset.top}, 1200);
  console.log('go to intro_text_contents_hrc');
});

fixed_button.addEventListener('click', function(){
  var offset = $("#works-content").offset();
  $('html, body').animate({scrollTop : offset.top}, 1200);
  console.log('go to works-content');
}) 
