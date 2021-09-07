
function setPageStatus(slider_id, slider_count, current_index) {
  var status_bar_name = slider_id + '_status_sticks';
  console.log(status_bar_name);
  console.log('current_index : ' + current_index);
  var status_bars = document.getElementById(status_bar_name);
  status_bars.innerHTML = "";
  for (let i = 0 ; i< slider_count ; i++){
    var bar = document.createElement('img');
    if( i == current_index ){
      bar.src ="./img/status_bar_active.svg";
    }else {
      bar.src ="./img/status_bar_inactive.svg";
    }

    status_bars.appendChild(bar);
  }
}

function setSlider(slider_id, add_index) {

  var slider = document.getElementById(slider_id);
  var items = document.querySelectorAll('#'+slider_id+' div');
  var slider_count = items.length;
  var slider_wrapper_width = slider.clientWidth;
  var slider_width =  slider_wrapper_width / slider_count;
  console.log(items);
  console.log(slider_count);
  console.log(slider_wrapper_width);
  console.log(slider_width);
  console.log(add_index);


  console.log('style left :' + slider.style.left);
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

  console.log(current_index);
  
  slider.style.left = -(slider_width * ( current_index + add_index) ) + 'px';
  setPageStatus(slider_id, slider_count, current_index + add_index);
}

setSlider('contents_slider_wrapper', 0);

// next, prev
var nextBtn = document.getElementById('first_page_next_btn');
var prevBtn = document.getElementById('first_page_pre_btn');

nextBtn.addEventListener('click', function () {
  plusSlides(1);
});
prevBtn.addEventListener('click', function () {
  plusSlides(-1);
});

function plusSlides(n) {
  setSlider('contents_slider_wrapper', n);
}

