var scroll_stage = 0;
var up_scroll_counter = 0;
var down_scroll_counter = 0;
var auto_scroll_active = false;

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
    scroll_stage = 0;
  } else if( scrollLocation > 100 && scrollLocation < sub_header_height) {
    scroll_stage = 1;
  } else if ( scrollLocation > sub_header_height && scrollLocation < contents_group_wrapper_offset.top) {
    scroll_stage = 2;
  } else if ( scrollLocation > contents_group_wrapper_offset.top){
    scroll_stage = 3;
  }

  if(scrollLocation < last_scroll_location){
    up_scroll_counter++;
    if(up_scroll_counter > 20){
        up_scroll_counter = 0;
        down_scroll_counter =0;

      header_contents.style.display = "block";
      sub_column.style.top = "95px"; //include header padding
      
      console.log('up scroll event');
      if(!auto_scroll_active){

        if (scroll_stage == 1 ) {
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : 0}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 2){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : works_main_contents_offset.top}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 3){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_group_wrapper_offset.top}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 4){
        } else if (scroll_stage == 0){
        }
      }
    }
  } else if (scrollLocation > last_scroll_location) { 

    down_scroll_counter++;
    if(down_scroll_counter > 20){
      up_scroll_counter = 0;
      down_scroll_counter =0;

      header_contents.style.display = "none";
      sub_column.style.top = 0;
      console.log('down scroll event');

      if(!auto_scroll_active){      
        
        if (scroll_stage == 0 ) {
        } else if (scroll_stage == 1){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : works_main_contents_offset.top}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 2){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_group_wrapper_offset.top}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 3){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_bottom_offset.top}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 4){
        }
      }
    }
  } else { 

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

