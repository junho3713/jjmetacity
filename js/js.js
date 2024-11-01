document.addEventListener('DOMContentLoaded', function() {
    // 모든 버튼 요소를 가져옵니다.
    $('.tap_con').hide();
    $('.tap_con').first().show();

    $('.tap_con2').hide();
    $('.tap_con2').first().show();

    // 메인페이지
    // 섹션2
    // 섹션2 시설소개 버튼 온오프 이벤트
    $('.btn').click(function(e){
        e.preventDefault();

        $('.btn').removeClass('on');
        $(this).addClass('on');
        
        var activeTab = $(this).find('a').attr('href');
        $('.tap_con, .tap_con2').hide();
        $(activeTab).show();
    });

    // 서브페이지
    // 섹션1  
    $('.box1').click(function(e){
        e.preventDefault();

        $('.box1').removeClass('on'); 
        $(this).addClass('on');

        var activeTab = $(this).find('a').attr('href');
        $('.box1_con').hide();
        $(activeTab).show();
    });
    
    // 미디어쿼리 화살표 js // 수정필
    $('mobile_btn1.arrow_left').click(function(e){
        // inner라는 아이디를 가진 element를 inner 변수에 담는다
        const inner = document.getElementById('inner')
        
        // inner 변수에 담겨있는 텍스트 내용 변경
        inner.innerText = '(n-1) / 4' /* 함수? 'n - 1' / 설정 필요함 */ 
    });
    $('mobile_btn1.arrow_right').click(function(e){
        // inner라는 아이디를 가진 element를 inner 변수에 담는다
        const inner = document.getElementById('inner')
        
        // inner 변수에 담겨있는 텍스트 내용 변경
        inner.innerText = '(n+1) / 4' /* 함수? 'n + 1' / 설정 필요함 */ 
    });

    // 섹션2   
    $('.box2').click(function(e){
        e.preventDefault();

        $('.box2').removeClass('on'); 
        $(this).addClass('on');

        var activeTab = $(this).find('a').attr('href');
        $('.box2_con').hide();
        $(activeTab).show();
    });    
    
    // 섹션3  
    $('.box3').click(function(e){
        e.preventDefault();

        $('.box3').removeClass('on'); 
        $(this).addClass('on');

        var activeTab = $(this).find('a').attr('href');
        $('.box3_con').hide();
        $(activeTab).show();
    });    
    
    // 섹션4  
    $('.box4').click(function(e){
        e.preventDefault();

        $('.box4').removeClass('on'); 
        $(this).addClass('on');

        var activeTab = $(this).find('a').attr('href');
        $('.box4_con').hide();
        $(activeTab).show();
    });

    // 서브페이지 공통
    $('.box1:nth-child(1), .box2:nth-child(1), .box3:nth-child(1), .box4:nth-child(1)').trigger('click')

    // floating_btn js
    document.addEventListener('mousemove', (e) => {
        let mouseX = e.pageX - 60; // document의 x좌표값
        let mouseY = e.pageY - 70; // document의 y좌표값
    
        let cursor = document.querySelector('.floating_btn');
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    })
    
});
