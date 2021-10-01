var scroll_stage = 0;
var up_scroll_counter = 0;
var down_scroll_counter = 0;
var auto_scroll_active = false;

var header = document.getElementById('header_contents');
var header_height = header.clientHeight;

var sub_header = document.getElementById('sub_header');
var sub_header_height = sub_header.clientHeight;

var header_contents = document.getElementById('header_contents');

var last_scroll_location = 0;
var intro_video_contents_arrow = document.getElementById('intro_video_contents_arrow');

var sub_column = document.getElementById('sub_column');
var sub_column_height = sub_column.clientHeight;


var fixed_button = document.getElementById('fixed_button');


var works_main_contents_offset = $("#works_main_contents").offset();
//임시 수정 사항
var contents_group_wrapper_offset = $("#contents_group_wrapper").offset(); 
var contents_bottom_offset = $("#contents_bottom").offset();
var hrc_contents_slider_wrapper = $("#hrc_contents_slider_wrapper").offset();

function scroll_more_860(){
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

  if (!scroll_valid){
    header_contents.style.display = "none";
    sub_column.style.top = 0;
  } else if(scrollLocation < last_scroll_location){
    up_scroll_counter++;
    if(up_scroll_counter > 40){
        up_scroll_counter = 0;
        down_scroll_counter =0;

      header_contents.style.display = "block";
      sub_column.style.top = "94px"; //include header padding
      
      if(!auto_scroll_active){

        if (scroll_stage == 1 ) {
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : 0}, 800, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 2){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : works_main_contents_offset.top}, 800, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 3){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_group_wrapper_offset.top}, 800, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 4){
        } else if (scroll_stage == 0){
        }
      }
    }
  } else if (scrollLocation > last_scroll_location) { 

    down_scroll_counter++;
    if(down_scroll_counter > 40){
      up_scroll_counter = 0;
      down_scroll_counter =0;

      header_contents.style.display = "none";
      sub_column.style.top = 0;

      if(!auto_scroll_active){      
        
        if (scroll_stage == 0 ) {
        } else if (scroll_stage == 1){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : works_main_contents_offset.top}, 800, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 2){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_group_wrapper_offset.top}, 800, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 3){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_bottom_offset.top}, 800, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 4){
        }
      }
    }
  } else { 

  }

  if(scrollLocation + 94 > sub_header_height){ /*include header padding*/
    sub_column.style.position = "fixed";
  } else {
    sub_column.style.position = "static";
  }

  last_scroll_location = scrollLocation;
}

function scroll_less_860(){
  let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

  if(scrollLocation == 0){
    scroll_stage = 0;
  } else if( scrollLocation > 0 && scrollLocation < sub_header_height) {
    scroll_stage = 1;
  } else if ( scrollLocation > sub_header_height && scrollLocation < contents_group_wrapper_offset.top) {
    scroll_stage = 2;
  } else if ( scrollLocation > contents_group_wrapper_offset.top && scrollLocation < hrc_contents_slider_wrapper.top){
    scroll_stage = 3;
  } else if ( scrollLocation > hrc_contents_slider_wrapper.top && scrollLocation < contents_bottom_offset.top){
    scroll_stage = 4;
  } else {
    scroll_stage = 5;
  }

  if (!scroll_valid){
    header_contents.style.display = "none";
    sub_column.style.top = 0;
  } else if(scrollLocation < last_scroll_location){
    up_scroll_counter++;
    if(up_scroll_counter > 50){
        up_scroll_counter = 0;
        down_scroll_counter =0;

      header_contents.style.display = "block";
      sub_column.style.top = window.innerWidth / 10 - 2 + 'px'; //include header padding, -2 is optical set
      /*
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
          $('html, body').animate({scrollTop : contents_group_wrapper_offset.top - (sub_column_height + header_height * 2)}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 4){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : hrc_contents_slider_wrapper.top - (sub_column_height + header_height * 2)}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 5){
        }
      }
      */
    }
  } else if (scrollLocation > last_scroll_location) { 

    down_scroll_counter++;
    if(down_scroll_counter > 50){
      up_scroll_counter = 0;
      down_scroll_counter = 0;

      header_contents.style.display = "none";
      sub_column.style.top = 0;
      /*
      if(!auto_scroll_active){      
        
        if (scroll_stage == 0 ) {
        } else if (scroll_stage == 1){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : works_main_contents_offset.top}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 2){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_group_wrapper_offset.top - sub_column_height}, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 3){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : hrc_contents_slider_wrapper.top - (sub_column_height + header_height) }, 1200, 'swing', function(){
            auto_scroll_active = false;
          });
        } else if (scroll_stage == 4){
          auto_scroll_active = true;
          $('html, body').animate({scrollTop : contents_bottom_offset.top - (sub_column_height + header_height) }, 1200, 'swing', function(){
            auto_scroll_active = false;
          });  
        }
      }
      */
    }
  } else { 

  }

  if(scrollLocation + 94 > sub_header_height){ /*include header padding*/
    sub_column.style.position = "fixed";
  } else {
    sub_column.style.position = "static";
  }

  last_scroll_location = scrollLocation;
}

document.addEventListener('scroll', function() {

  if (matchMedia("screen and (max-width: 860px)").matches) { 
    scroll_less_860(); // width 860 이하 일경우 scroll 이벤트
  }else {
    scroll_more_860(); // width 860 이상 일경우 scroll 이벤트
  }
});

intro_video_contents_arrow.addEventListener('click', function () {
  var offset = $("#intro_text_contents_hrc").offset();
  $('html, body').animate({scrollTop : offset.top}, 800);
});

fixed_button.addEventListener('click', function(){
  scroll_valid = false;
  var offset = $("#works-content").offset();
  $('html, body').animate({scrollTop : offset.top}, 800, 'swing', function(){
    scroll_valid = true;
    if (matchMedia("screen and (max-width: 860px)").matches) { 
      header_contents.style.display = "block";
      sub_column.style.top = window.innerWidth / 10 + 'px'; //include header padding
    } else {
      header_contents.style.display = "block";
      sub_column.style.top = "94px"; //include header padding
    }
  });
}) 

