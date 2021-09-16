// ids //
var sub_header_id = 'sub_header';
var intro_video_contents_text_id = 'intro_video_contents_text';
var intro_text_contents_hrc_id = 'intro_text_contents_hrc';
var intro_text_contents_hac_id = 'intro_text_contents_hac';
var intro_text_contents_orc_id = 'intro_text_contents_orc';

var hrc_slider_detail_1_id = 'hrc_slider_detail_1'
var hrc_slider_detail_2_id = 'hrc_slider_detail_2'
var hrc_slider_detail_3_id = 'hrc_slider_detail_3' 
var hac_slider_detail_1_id = 'hac_slider_detail_1'
var hac_slider_detail_2_id = 'hac_slider_detail_2'
var orc_slider_detail_1_id = 'orc_slider_detail_1' 
var orc_slider_detail_2_id = 'orc_slider_detail_2' 

var hrc_bottom_title_1_id = 'hrc_bottom_title_1'
var hrc_bottom_title_2_id = 'hrc_bottom_title_2'
var hrc_bottom_title_3_id = 'hrc_bottom_title_3'
var hac_bottom_title_4_id = 'hac_bottom_title_4'
var hac_bottom_title_5_id = 'hac_bottom_title_5'
var orc_bottom_title_6_id = 'orc_bottom_title_6'
var orc_bottom_title_7_id = 'orc_bottom_title_7'

var hrc_bottom_sub_1_id = 'hrc_bottom_sub_1'
var hrc_bottom_sub_2_id = 'hrc_bottom_sub_2'
var hrc_bottom_sub_3_id = 'hrc_bottom_sub_3'
var hac_bottom_sub_4_id = 'hac_bottom_sub_4'
var hac_bottom_sub_5_id = 'hac_bottom_sub_5'
var orc_bottom_sub_6_id = 'orc_bottom_sub_6'
var orc_bottom_sub_7_id = 'orc_bottom_sub_7'


var sub_header_mobile_value;
var intro_video_contents_text_mobile_value;
var intro_text_contents_hac_mobile_value;
var intro_text_contents_hrc_mobile_value;
var intro_text_contents_orc_mobile_value;
var hrc_slider_detail_1_value;
var hrc_slider_detail_2_value;
var hrc_slider_detail_3_value;
var hac_slider_detail_1_value;
var hac_slider_detail_2_value;
var orc_slider_detail_1_value;
var orc_slider_detail_2_value;

var hrc_bottom_title_1_value;
var hrc_bottom_title_2_value;
var hrc_bottom_title_3_value;
var hac_bottom_title_4_value;
var hac_bottom_title_5_value;
var orc_bottom_title_6_value;
var orc_bottom_title_7_value;

var hrc_bottom_sub_1_value;
var hrc_bottom_sub_2_value;
var hrc_bottom_sub_3_value;
var hac_bottom_sub_4_value;
var hac_bottom_sub_5_value;
var orc_bottom_sub_6_value;
var orc_bottom_sub_7_value;

if (matchMedia("screen and (max-width: 860px)").matches) {
  // 860px 이하에서 사용할 JavaScript
  // values //
sub_header_mobile_value = 
  '<p class="placea_intro_text">플레이스에이는</p>' +
  '<p>세상에 존재하는 </p>' +
  '<p>많은 것들을 컴퓨터가 </p>' + 
  '<p>이해하고 처리할 수 있도록 </p>' +
  '<p>데이터로 가공해 냅니다.</p>'; 
intro_video_contents_text_mobile_value = 
  '현실을 이루고 살아가는 사람들과 <br>' + 
  '다양한 환경을 가상 공간에 <br>' +
  '투영하여 꿈꿔왔던 다양한 시도를 <br>' +
  '가능하게 합니다. <br>' +
  '<br>' +
  '플레이스에이의 인공지능 기술은 <br>' +
  '어디에서나, 정확하고, 빠르게<br>' +
  '그 과정을 실행할 수 있도록 돕습니다. <br>';
intro_text_contents_hac_mobile_value = 
  '나의 표정과 몸짓 그대로<br>' + 
  '실감나게 표현합니다.'
intro_text_contents_hrc_mobile_value  = 
  '어디서나 <br>' +
  '스마트폰 한대만 있으면<br> ' +
  '나의 움직임을 가상 공간에<br> ' +
  '옮길 수 있습니다<br>';
intro_text_contents_orc_mobile_value =
  '더욱 실감나고 역동적인 <br>' + 
  '가상 환경을 구축해 나갑니다.';
hrc_slider_detail_1_value = 
  '일반적인 환경에서 촬영된 신체 동작을 2D와 3D로 정확하고 <br>' +
  '빠르게 추출합니다. 이를 통해 머리부터 발끝까지 다양한 키포인트의 <br>' +
  '위치와 자세 정보를 얻을 수 있습니다. 원하는 데이터 포맷에 따라 <br>' +
  '카메라 좌표계 또는 그라운드 기준 좌표계 데이터로 제공됩니다.';
hrc_slider_detail_2_value = 
  '영상 속 인물이 흐리거나 사물에 가려져도 괜찮습니다. <br>' + 
  '필요한 이미지를 추정하여 생성하는 기술로 한정적인 상황에서도 <br> ' +
  '가장 자연스러운 신체의 움직임을 만들어냅니다.'
hrc_slider_detail_3_value = 
  '플레이스에이의 HRS(Human Recognition Soultion) AI engine은 <br>' + 
  ' 3천만장 이상의 데이터로 학습되어 별도의 부착물이나 <br>' +
  '특수한 환경 구축없이 고품질 모션 데이터를 얻을 수 있습니다. <br> ' + 
  '4-8대의 일반적인 RGB 카메라만으로 기존 스튜디오 촬영에 버금가는 <br> ' +
  '정밀한 3D 모션캡처 서비스를 제공합니다. ';
hac_slider_detail_1_value = 
  '신체 모션 데이터를 다양한 3D 캐릭터의 움직임으로 쉽게 변환할 수 있습니다. <br>' +
  '(+How to 조금더)플레이스에이가 제공하는 솔루션으로 캐릭터의 체형에 <br>' +
  '상관없이 자연스럽고 매끄럽게 매핑이 이루어집니다.'
hac_slider_detail_2_value = 
  '영상속 사람의 미세한 표정 변화를 인식하여 3D 캐릭터의 표정으로 <br>' +
  '전환합니다. (+기술 설명 조금더)이는 캐릭터의 움직임과 결합하여 보다 <br>' +
  '자연스럽고 실감나는 표현을 가능하게 해줍니다.';
orc_slider_detail_1_value = 
  '영상 속 다양한 물체들의 움직임을 실시간으로 분석합니다. <br>' +
  '프레임 단위로 동시에 물체들을 추적하여 각각 어느 방향으로  <br>' +
  '이동하고 있는지 확인할 수 있습니다.' ;
orc_slider_detail_2_value = 
  '다양한 의상 및 패션 아이템 이미지에 특화된 검색 기술로, <br> ' +
  '유사한 이미지 또는 아이템을 탐색합니다. 특징이 되는 물체의 속성을 <br> ' +
  '추출하고 데이터베이스에서 최적의 아이템을 추천하는 알고리즘이 <br> ' + 
  '적용되어 나와 닮은 캐릭터를 손쉽게 만들 수 있도록 도와줍니다.';

hrc_bottom_title_1_value = '한 대의 카메라(로)도 충분합니다'
hrc_bottom_title_2_value = '실시간으로 영상을 처리합니다'
hrc_bottom_title_3_value = '편리하게 서비스에 적용할 수 있습니다'
hac_bottom_title_4_value = '플러그인을 통해 바로 적용해보세요'
hac_bottom_title_5_value = '나를 실감나게 따라하는 또다른 나'
orc_bottom_title_6_value = '역동적인 가상 환경을 구축합니다'
orc_bottom_title_7_value = '보이는 모습 그대로 옮겨줍니다'

hrc_bottom_sub_1_value =
  '스마트폰 카메라 한 대로 촬영된 영상이면  누구나 손쉽게 3D 모션데이터를<br> ' +
  '얻을 수 있습니다.  고비용의 장치를 필요로 하지 않기 때문에 모션 인식 <br> ' +
  '기술을 활용한 다양한 서비스로 응용할 수 있습니다.'

hrc_bottom_sub_2_value = 
  'HRS는 70fps의 빠른 속도로 3D 위치 및 자세를 인식하여 실시간 서비스를 <br>' +
  '가능하게 합니다. 배경과 지면을 함께 인식하고 환경을 함께 분석하는 <br>' +
  '플레이스에이의 독보적인 기술력으로 별도의 후처리없이 실시간으로 정확하고 <br>' +
  '자연스럽게 움직임이 표현됩니다.'

hrc_bottom_sub_3_value = 
  '영상만 있다면 모션캡쳐를 위해 스튜디오를 대여하지 않아도, <br>' +
  '배우를 섭외할 필요가 없습니다. 현실에선 재현 불가능한 애니메이션 속 <br> '+
  '캐릭터의 움직임 역시 얻을 수 있습니다. '

hac_bottom_sub_4_value = 
  '다양한 프로그램에서 사용가능한 fbx 출력파일을 제공 합니다. Unity, Unreal 등과 <br>' + 
  '같은 게임엔진은 물론 Maya, Max와 같은 렌더링 엔진에서 사용가능합니다. <br>' +
  '사용하고 계신 프로그램에 지금 바로 적용해보세요.  <br> '+
  '(캐릭터를 불러오고 등등 플러그인을 사용하는 프로세스와 편익 중심으로 워딩 추가)'

hac_bottom_sub_5_value = 
  '얼굴 표정의 변화와 신체의 움직임이 설정한 3D 캐릭터에 실시간으로 반영되어 <br>' +
  '내가 원하는 모습 그대로 실감나게 표현됩니다. 변환되는 캐릭터의 체형에 따라 <br>' +
  '움직임뿐만 아니라 걸음걸이, 속도까지 자동으로 보정하여 후보정 없이도 <br>' +
  '즉각적인 인터랙션이 가능합니다. '

orc_bottom_sub_6_value = 
  '신체의 움직임 이외에도 주변 사물과 환경을 이루는 다양한 물체의 움직임을 추적할 수 <br>'+
  '있습니다. 보다 넓은 시야에서 다양한 움직임이 이루어지는 공간에 대한 정보를 <br>'+
  '처리함으로써 더욱 역동적인 가상 환경을 구축할 수 있습니다.'

orc_bottom_sub_7_value = 
  '플레이스에이의 다양한 실시간 인식 기술은 이미지 속 아이템의 형태, 색상, 패턴, <br>' +
  '질감 등을 종합적으로 분석하여 디지털 아이템으로 복제하는 기술과 결합하여 <br>' +
  '궁극적인 가상 세계를 완성합니다. 한번의 촬영으로 현실에 존재하는 수많은 것들을 <br>' +
  '디지털 공간으로 옮길 수 있습니다.'

} else if (matchMedia("screen and (max-width: 650px)").matches){
  // values //
  // values //
  sub_header_mobile_value = 
  '<p class="placea_intro_text">플레이스에이는</p>' +
  '<p>세상에 존재하는 </p>' +
  '<p>많은 것들을 컴퓨터가 </p>' + 
  '<p>이해하고 처리할 수 있도록 </p>' +
  '<p>데이터로 가공해 냅니다.</p>'; 
intro_video_contents_text_mobile_value = 
  '현실을 이루고 살아가는 사람들과 <br>' + 
  '다양한 환경을 가상 공간에 <br>' +
  '투영하여 꿈꿔왔던 다양한 시도를 <br>' +
  '가능하게 합니다. <br>' +
  '<br>' +
  '플레이스에이의 인공지능 기술은 <br>' +
  '어디에서나, 정확하고, 빠르게<br>' +
  '그 과정을 실행할 수 있도록 돕습니다. <br>';
intro_text_contents_hac_mobile_value = 
  '나의 표정과 몸짓 그대로<br>' + 
  '실감나게 표현합니다.'
intro_text_contents_hrc_mobile_value  = 
  '어디서나 <br>' +
  '스마트폰 한대만 있으면<br> ' +
  '나의 움직임을 가상 공간에<br> ' +
  '옮길 수 있습니다<br>';
intro_text_contents_orc_mobile_value =
  '더욱 실감나고 역동적인 <br>' + 
  '가상 환경을 구축해 나갑니다.';
hrc_slider_detail_1_value = 
  '일반적인 환경에서 촬영된 신체 동작을 2D와 3D로 정확하고 <br>' +
  '빠르게 추출합니다. 이를 통해 머리부터 발끝까지 다양한 키포인트의 <br>' +
  '위치와 자세 정보를 얻을 수 있습니다. 원하는 데이터 포맷에 따라 <br>' +
  '카메라 좌표계 또는 그라운드 기준 좌표계 데이터로 제공됩니다.';
hrc_slider_detail_2_value = 
  '영상 속 인물이 흐리거나 사물에 가려져도 괜찮습니다. <br>' + 
  '필요한 이미지를 추정하여 생성하는 기술로 한정적인 상황에서도 <br> ' +
  '가장 자연스러운 신체의 움직임을 만들어냅니다.'
hrc_slider_detail_3_value = 
  '플레이스에이의 HRS(Human Recognition Soultion) AI engine은 <br>' + 
  ' 3천만장 이상의 데이터로 학습되어 별도의 부착물이나 <br>' +
  '특수한 환경 구축없이 고품질 모션 데이터를 얻을 수 있습니다. <br> ' + 
  '4-8대의 일반적인 RGB 카메라만으로 기존 스튜디오 촬영에 버금가는 <br> ' +
  '정밀한 3D 모션캡처 서비스를 제공합니다. ';
hac_slider_detail_1_value = 
  '신체 모션 데이터를 다양한 3D 캐릭터의 움직임으로 쉽게 변환할 수 있습니다. <br>' +
  '(+How to 조금더)플레이스에이가 제공하는 솔루션으로 캐릭터의 체형에 <br>' +
  '상관없이 자연스럽고 매끄럽게 매핑이 이루어집니다.'
hac_slider_detail_2_value = 
  '영상속 사람의 미세한 표정 변화를 인식하여 3D 캐릭터의 표정으로 <br>' +
  '전환합니다. (+기술 설명 조금더)이는 캐릭터의 움직임과 결합하여 보다 <br>' +
  '자연스럽고 실감나는 표현을 가능하게 해줍니다.';
orc_slider_detail_1_value = 
  '영상 속 다양한 물체들의 움직임을 실시간으로 분석합니다. <br>' +
  '프레임 단위로 동시에 물체들을 추적하여 각각 어느 방향으로  <br>' +
  '이동하고 있는지 확인할 수 있습니다.' ;
orc_slider_detail_2_value = 
  '다양한 의상 및 패션 아이템 이미지에 특화된 검색 기술로, <br> ' +
  '유사한 이미지 또는 아이템을 탐색합니다. 특징이 되는 물체의 속성을 <br> ' +
  '추출하고 데이터베이스에서 최적의 아이템을 추천하는 알고리즘이 <br> ' + 
  '적용되어 나와 닮은 캐릭터를 손쉽게 만들 수 있도록 도와줍니다.';

hrc_bottom_title_1_value = '한 대의 카메라(로)도 충분합니다'
hrc_bottom_title_2_value = '실시간으로 영상을 처리합니다'
hrc_bottom_title_3_value = '편리하게 서비스에 적용할 수 있습니다'
hac_bottom_title_4_value = '플러그인을 통해 바로 적용해보세요'
hac_bottom_title_5_value = '나를 실감나게 따라하는 또다른 나'
orc_bottom_title_6_value = '역동적인 가상 환경을 구축합니다'
orc_bottom_title_7_value = '보이는 모습 그대로 옮겨줍니다'

hrc_bottom_sub_1_value =
  '스마트폰 카메라 한 대로 촬영된 영상이면  누구나 손쉽게 3D 모션데이터를<br> ' +
  '얻을 수 있습니다.  고비용의 장치를 필요로 하지 않기 때문에 모션 인식 <br> ' +
  '기술을 활용한 다양한 서비스로 응용할 수 있습니다.'

hrc_bottom_sub_2_value = 
  'HRS는 70fps의 빠른 속도로 3D 위치 및 자세를 인식하여 실시간 서비스를 <br>' +
  '가능하게 합니다. 배경과 지면을 함께 인식하고 환경을 함께 분석하는 <br>' +
  '플레이스에이의 독보적인 기술력으로 별도의 후처리없이 실시간으로 정확하고 <br>' +
  '자연스럽게 움직임이 표현됩니다.'

hrc_bottom_sub_3_value = 
  '영상만 있다면 모션캡쳐를 위해 스튜디오를 대여하지 않아도, <br>' +
  '배우를 섭외할 필요가 없습니다. 현실에선 재현 불가능한 애니메이션 속 <br> '+
  '캐릭터의 움직임 역시 얻을 수 있습니다. '

hac_bottom_sub_4_value = 
  '다양한 프로그램에서 사용가능한 fbx 출력파일을 제공 합니다. Unity, Unreal 등과 <br>' + 
  '같은 게임엔진은 물론 Maya, Max와 같은 렌더링 엔진에서 사용가능합니다. <br>' +
  '사용하고 계신 프로그램에 지금 바로 적용해보세요.  <br> '+
  '(캐릭터를 불러오고 등등 플러그인을 사용하는 프로세스와 편익 중심으로 워딩 추가)'

hac_bottom_sub_5_value = 
  '얼굴 표정의 변화와 신체의 움직임이 설정한 3D 캐릭터에 실시간으로 반영되어 <br>' +
  '내가 원하는 모습 그대로 실감나게 표현됩니다. 변환되는 캐릭터의 체형에 따라 <br>' +
  '움직임뿐만 아니라 걸음걸이, 속도까지 자동으로 보정하여 후보정 없이도 <br>' +
  '즉각적인 인터랙션이 가능합니다. '

orc_bottom_sub_6_value = 
  '신체의 움직임 이외에도 주변 사물과 환경을 이루는 다양한 물체의 움직임을 추적할 수 <br>'+
  '있습니다. 보다 넓은 시야에서 다양한 움직임이 이루어지는 공간에 대한 정보를 <br>'+
  '처리함으로써 더욱 역동적인 가상 환경을 구축할 수 있습니다.'

orc_bottom_sub_7_value = 
  '플레이스에이의 다양한 실시간 인식 기술은 이미지 속 아이템의 형태, 색상, 패턴, <br>' +
  '질감 등을 종합적으로 분석하여 디지털 아이템으로 복제하는 기술과 결합하여 <br>' +
  '궁극적인 가상 세계를 완성합니다. 한번의 촬영으로 현실에 존재하는 수많은 것들을 <br>' +
  '디지털 공간으로 옮길 수 있습니다.'
  // 650에서 사용할 JavaScript
} else {
  

}

document.getElementById(sub_header_id).innerHTML = sub_header_mobile_value;
document.getElementById(intro_video_contents_text_id).innerHTML = intro_video_contents_text_mobile_value;
document.getElementById(intro_text_contents_hrc_id).innerHTML = intro_text_contents_hrc_mobile_value;
document.getElementById(intro_text_contents_hac_id).innerHTML = intro_text_contents_hac_mobile_value;
document.getElementById(intro_text_contents_orc_id).innerHTML = intro_text_contents_orc_mobile_value;

document.getElementById(hrc_slider_detail_1_id).innerHTML = hrc_slider_detail_1_value;
document.getElementById(hrc_slider_detail_2_id).innerHTML = hrc_slider_detail_2_value;
document.getElementById(hrc_slider_detail_3_id).innerHTML = hrc_slider_detail_3_value;
document.getElementById(hac_slider_detail_1_id).innerHTML = hac_slider_detail_1_value;
document.getElementById(hac_slider_detail_2_id).innerHTML = hac_slider_detail_2_value;
document.getElementById(orc_slider_detail_1_id).innerHTML = orc_slider_detail_1_value;
document.getElementById(orc_slider_detail_2_id).innerHTML = orc_slider_detail_2_value;

document.getElementById(hrc_bottom_title_1_id).innerHTML = hrc_bottom_title_1_value;
document.getElementById(hrc_bottom_title_2_id).innerHTML = hrc_bottom_title_2_value;
document.getElementById(hrc_bottom_title_3_id).innerHTML = hrc_bottom_title_3_value;
document.getElementById(hac_bottom_title_4_id).innerHTML = hac_bottom_title_4_value;
document.getElementById(hac_bottom_title_5_id).innerHTML = hac_bottom_title_5_value;
document.getElementById(orc_bottom_title_6_id).innerHTML = orc_bottom_title_6_value;
document.getElementById(orc_bottom_title_7_id).innerHTML = orc_bottom_title_7_value;

document.getElementById(hrc_bottom_sub_1_id).innerHTML = hrc_bottom_sub_1_value;
document.getElementById(hrc_bottom_sub_2_id).innerHTML = hrc_bottom_sub_2_value;
document.getElementById(hrc_bottom_sub_3_id).innerHTML = hrc_bottom_sub_3_value;
document.getElementById(hac_bottom_sub_4_id).innerHTML = hac_bottom_sub_4_value;
document.getElementById(hac_bottom_sub_5_id).innerHTML = hac_bottom_sub_5_value;
document.getElementById(orc_bottom_sub_6_id).innerHTML = orc_bottom_sub_6_value;
document.getElementById(orc_bottom_sub_7_id).innerHTML = orc_bottom_sub_7_value;