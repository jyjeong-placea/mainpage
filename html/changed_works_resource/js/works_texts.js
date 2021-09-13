/*
var intro_text_contents_hrc_inner_html = document.getElementById('intro_text_contents_hrc').innerHTML;
console.log(intro_text_contents_hrc_inner_html)
*/

// ids //
var sub_header_id = 'sub_header';
var intro_video_contents_text_id = 'intro_video_contents_text';
var intro_text_contents_hrc_id = 'intro_text_contents_hrc';
var intro_text_contents_hac_id = 'intro_text_contents_hac';
var slider_text_details_pose_estimation_id = 'slider_text_details_pose_estimation';
var intro_text_contents_orc_id = 'intro_text_contents_orc';

// values //
var sub_header_mobile_value = 
  '<p class="placea_intro_text">플레이스에이는</p>' +
  '<p>세상에 존재하는 </p>' +
  '<p>많은 것들을 컴퓨터가 </p>' + 
  '<p>이해하고 처리할 수 있도록 </p>' +
  '<p>데이터로 가공해 냅니다.</p>'; 
var intro_video_contents_text_mobile_value = 
  '현실을 이루고 살아가는 사람들과 <br>' + 
  '다양한 환경을 가상 공간에 <br>' +
  '투영하여 꿈꿔왔던 다양한 시도를 <br>' +
  '가능하게 합니다. <br>' +
  '<br>' +
  '플레이스에이의 인공지능 기술은 <br>' +
  '어디에서나, 정확하고, 빠르게<br>' +
  '그 과정을 실행할 수 있도록 돕습니다. <br>';

var intro_text_contents_hac_mobile_value = 
  '나의 표정과 몸짓 그대로<br>' + 
  '실감나게 표현합니다.'

var intro_text_contents_hrc_mobile_value  = 
  '어디서나 <br>' +
  '스마트폰 한대만 있으면<br> ' +
  '나의 움직임을 가상 공간에<br> ' +
  '옮길 수 있습니다<br>';
var intro_text_contents_orc_mobile_value =
  '더욱 실감나고 역동적인 <br>' + 
  '가상 환경을 구축해 나갑니다.';

/*
var slider_text_details_pose_estimation_mobile_value = 
  '일반적인 환경에서 촬영된 신체 동작을 2D와 3D로 정확하고 <br> ' +
  '빠르게 추출합니다. 이를 통해 머리부터 발끝까지 다양한 키포인트의 <br>' +
  '위치와 자세 정보를 얻을 수 있습니다. 원하는 데이터 포맷에 따라 <br>' +
  '카메라 좌표계 또는 그라운드 기준 좌표계 데이터로 제공됩니다.'
*/

if (matchMedia("screen and (max-width: 860px)").matches) {
  // 860px 이하에서 사용할 JavaScript
  document.getElementById(sub_header_id).innerHTML = sub_header_mobile_value;
  document.getElementById(intro_video_contents_text_id).innerHTML = intro_video_contents_text_mobile_value;
  document.getElementById(intro_text_contents_hrc_id).innerHTML = intro_text_contents_hrc_mobile_value;
  document.getElementById(intro_text_contents_hac_id).innerHTML = intro_text_contents_hac_mobile_value;
  document.getElementById(intro_text_contents_orc_id).innerHTML = intro_text_contents_orc_mobile_value;
  //document.getElementById(slider_text_details_pose_estimation_id).innerHTML = slider_text_details_pose_estimation_mobile_value;

} else {
  // 860px 이상에서 사용할 JavaScript
}