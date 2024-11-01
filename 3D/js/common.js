$(function(){
      //지도 팝업 열기*************
      $('.map_icon').click(function () {
        $(this).toggleClass('on')
        if ( $(this).hasClass('on') ) {
          $('.header-list-map').show();
        } else{
          $('.header-list-map').hide();
        }
      });

      
});


