
function setPageStatus(slider_id, slider_count, current_index) {
  var status_bar_name = slider_id + '_status_sticks';
  var status_bars = document.getElementById(status_bar_name);
  status_bars.innerHTML = "";
  for (let i = 0 ; i< slider_count ; i++){
    var bar = document.createElement('img');
    if( i == current_index ){
      bar.src ="./changed_works_resource/img/status_bar_active.svg";
    }else {
      bar.src ="./changed_works_resource/img/status_bar_inactive.svg";
    }

    status_bars.appendChild(bar);
  }
}

function setSubSlider(slider_id, add_index) {

  var slider = document.getElementById(slider_id);
  
  var items = slider.getElementsByClassName('slider');
  var slider_default_width = 1220;
  var all_width = items.length * slider_default_width;

  slider.style.width =  all_width+'px';
  var slider_count = items.length;
  var slider_wrapper_width = slider.clientWidth;
  var slider_width =  slider_wrapper_width / slider_count;
  current_index = -1 * parseInt(slider.style.left) / slider_width ;
  

  if (current_index == 0) {
    if(add_index < 0)
      current_index = slider_count;
  } else if (current_index == slider_count -1) {
    if(add_index > 0)
      current_index = -1;
  } else if (isNaN(current_index)) {
    current_index = 0;
  }
  
  slider.style.left = -(slider_width * ( current_index + add_index) ) + 'px';
  setPageStatus(slider_id, slider_count, current_index + add_index);
}

setSubSlider('hrc_contents_slider_wrapper', 0);
setSubSlider('hac_contents_slider_wrapper', 0);
setSubSlider('orc_contents_slider_wrapper', 0);

// next, prev
var hrc_nextBtn = document.getElementById('hrc_first_page_next_btn');
var hrc_prevBtn = document.getElementById('hrc_first_page_pre_btn');
var hac_nextBtn = document.getElementById('hac_first_page_next_btn');
var hac_prevBtn = document.getElementById('hac_first_page_pre_btn');
var orc_nextBtn = document.getElementById('orc_first_page_next_btn');
var orc_prevBtn = document.getElementById('orc_first_page_pre_btn');

hrc_nextBtn.addEventListener('click', function () {
  plusSlides('hrc_contents_slider_wrapper', 1);
});
hrc_prevBtn.addEventListener('click', function () {
  plusSlides('hrc_contents_slider_wrapper', -1);
});

hac_nextBtn.addEventListener('click', function () {
  plusSlides('hac_contents_slider_wrapper', 1);
});
hac_prevBtn.addEventListener('click', function () {
  plusSlides('hac_contents_slider_wrapper', -1);
});

orc_nextBtn.addEventListener('click', function () {
  plusSlides('orc_contents_slider_wrapper', 1);
});
orc_prevBtn.addEventListener('click', function () {
  plusSlides('orc_contents_slider_wrapper', -1);
});

function plusSlides(contents_id, n) {
  setSubSlider(contents_id, n);
}

