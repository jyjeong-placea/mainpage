var init_scroll_move = false;
var sub_header = document.getElementById('sub_header');
var sub_header_height = sub_header.clientHeight;
var header_contents = document.getElementById('header_contents');
var header_height = header_contents.style.clientHeight;
var last_scroll_location = 0;
var intro_video_contents_arrow = document.getElementById('intro_video_contents_arrow');
var sub_column = document.getElementById('sub_column');

document.addEventListener('scroll', function() {
  /*
  let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
  let windowHeight = window.innerHeight; // 스크린 창
  let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

  console.log(scrollLocation);
  console.log(windowHeight);
  console.log(fullHeight);
  if(scrollLocation + windowHeight >= fullHeight){
    console.log('끝')
  }
  */
  //document.getElementById('works_main_contents').scrollIntoView({behavior: 'smooth', block: 'center' });  

  let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
  //console.log(scrollLocation);

  if(scrollLocation == 0){
    init_scroll_move = false;
  }

  if(!init_scroll_move && scrollLocation > $("#works_main_contents").offset().top) {
    init_scroll_move = true;
  }
  
  if(scrollLocation > 100 && scrollLocation < sub_header_height && !init_scroll_move){
    var offset = $("#works_main_contents").offset();
    $('html, body').animate({scrollTop : offset.top}, 1200);
    console.log('go to main contents');
    init_scroll_move = true;
  }
  /*
  if(init_scroll_move){
    if(scrollLocation < last_scroll_location){
      header_contents.style.display = "block";
      console.log('header_height ' + header_height);
      sub_column.style.top = "95px"; //include header padding
    } else { 
      header_contents.style.display = "none";
      sub_column.style.top = 0;
    }
  }
  */
  if(scrollLocation < last_scroll_location){
    header_contents.style.display = "block";
    console.log('header_height ' + header_height);
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