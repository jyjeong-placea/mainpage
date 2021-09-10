function setMainSlider(slider_id, index) {

  var slider = document.getElementById(slider_id);
  var items = slider.getElementsByClassName('contents_wrapper');
  var slider_count = items.length;
  var slider_wrapper_width = slider.clientWidth;
  var slider_width =  slider_wrapper_width / slider_count;

  current_index = -1 * parseInt(slider.style.left) / slider_width ;
  
  slider.style.left = -(slider_width * index ) + 'px';
}

setMainSlider('contents_group', 0);


var human_recognition_btn = document.getElementById('human_recognition_btn');
var human_to_avatar_btn = document.getElementById('human_to_avatar_btn');
var object_recognition_btn = document.getElementById('object_recognition_btn');

function changeBtnState(button, active) {
  if(active){
    button.getElementsByClassName('sub_column_text_wrapper_btn')[0].style.color = "#FFFFFF";
    button.style.backgroundColor = "#333333";
    button.style.backgroundClip = "content-box";
  } else {
    button.getElementsByClassName('sub_column_text_wrapper_btn')[0].style.color = "#111111";
    button.style.backgroundColor = "#FFFFFF";
  }
}

human_recognition_btn.addEventListener('click', function () {
  changeBtnState(human_recognition_btn, true);
  changeBtnState(human_to_avatar_btn, false);
  changeBtnState(object_recognition_btn, false);
  setMainSlider('contents_group', 0);
});

human_to_avatar_btn.addEventListener('click', function () {
  changeBtnState(human_recognition_btn, false);
  changeBtnState(human_to_avatar_btn, true);
  changeBtnState(object_recognition_btn, false);
  setMainSlider('contents_group', 1);
});

object_recognition_btn.addEventListener('click', function () {
  changeBtnState(human_recognition_btn, false);
  changeBtnState(human_to_avatar_btn, false);
  changeBtnState(object_recognition_btn, true);
  setMainSlider('contents_group', 2);
});