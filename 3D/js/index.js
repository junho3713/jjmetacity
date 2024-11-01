//파일이 로드 될때 실행을 한다.
$(function () {

setTimeout(function(){
  $('video').css('display','none');
}, 5000);
 // 1. 파노라마 객체생성
const panorama = new PANOLENS.ImagePanorama('./img/db.jpg');
  
  
 // 2. 뷰어 객체생성
const viewer = new PANOLENS.Viewer({
  output: 'console'});// 위치를 알기 위해 뷰어를 콘솔로 아웃풋


 // 3. 파노라마를 뷰어에 추가
viewer.add(panorama);    



});

$(function () {
  // 메뉴_공통단
  let menu = `
        <div class="top-header">
      <div class="header-icon">
        <div><a href="./lobby.html"><img src="./img/icon/home_icon.png" alt="Home"></a>
          <p>로비이동</p>
        </div>
        <div class="map_icon"><a><img src="./img/icon/map_icon.png" alt="map"></a>
          <p>지도보기</p>
          <div class="header-list-map">
            <div class="map_list">
              <a href="./hanbok_start.html" class="map_item"><img src="./img/map_off(1).png" alt="야외대강당"></a>
              <a href="./office_start.html" class="map_item"><img src="./img/map_off(2).png" alt="도서관"></a>
            </div>
            <div class="map_list">
              <div class="map_item map_item2"><img src="./img/map_off(4).png" alt="로비이동"></div>
            </div>
            <div class="map_list">
              <a href="./park_start.html" class="map_item"><img src="./img/map_off(3).png" alt=" 한복체험"></a>
              <a href="./library_sub3.html" class="map_item"><img src="./img/map_off(5).png" alt="민원실"></a>
            </div>
          </div>
        </div>
        <div><a href="#"><img src="./img/icon/hamburger_icon.png" alt="more"></a>
          <p>더보기</p>
          <ul class="header-list">
            <li>리플렛보기</li>
          </ul>
        </div>
      </div>
    </div>
    `

$('.common').append(menu)






//팝업 닫기
$('.enter-btn').click(function () {
  location.replace('./lobby.html');
});
$('.enter-btn').click(function () {
  location.replace('./lobby.html');
});





//////////////////////////////////////////
});