// 스크롤시 한 섹션 씩 이동

if (matchMedia("screen and (min-width: 376px)").matches) {
  window.onload = function(){
    const sec = document.querySelectorAll('.section');
    const secCount = sec.length;
    sec.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let secSelector = sec[index];

        // wheel down : move to next section
        if (delta < 0){
          if (secSelector !== secCount-1){
            try{
              moveTop = window.pageYOffset + secSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        // wheel up : move to previous section
        else{
          if (secSelector !== 0){
            try{
              moveTop = window.pageYOffset + secSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }
} else {
}


  // 스크롤시 한 섹션 씩 이동

  const sector1 = document.querySelector('.sector1')
  const sector2 = document.querySelector('.sector2')
  const sector3 = document.querySelector('.sector3')
  const sector4 = document.querySelector('.sector4')
  const footer = document.querySelector('.footer')
  const header = document.querySelector('.header_wrap')
  let gnbMenu = document.querySelectorAll('.gnb>li>a')
  let svgText = document.querySelectorAll('.text')
  let earth = document.querySelector('.earth_icon')
  let lang = document.querySelector('.lang')
  let reservation_btn = document.querySelector('.reservation>a')
  let height = 400;
  let color1 = '#fff'
  let color2 = '#333'


window.addEventListener('scroll', function(){ 
    if(sector1.offsetTop + 400 <= window.scrollY){
        svgText.forEach(text => {
            text.style.fill = '#fff'
            text.style.stroke = '#fff'
        })
        gnbMenu.forEach(Menu => {
            Menu.style.color = '#fff'
        })
        earth.style.fill = '#fff'
        earth.style.stroke = '#fff'
        lang.style.color = '#fff'
        reservation_btn.style.color = '#fff'
        reservation_btn.style.border = '1px solid #fff'
        header.style.opacity = '1'
    }
    if(sector2.offsetTop - 400 <= window.scrollY || sector4.offsetTop - 400 <= window.scrollY){
        svgText.forEach(text => {
            text.style.fill = '#333'
            text.style.stroke = '#333'
        });
        gnbMenu.forEach(Menu => {
            Menu.style.color = '#333'
        })
        earth.style.fill = '#333'
        earth.style.stroke = '#333'
        lang.style.color = '#333'
        reservation_btn.style.color = '#333'
        reservation_btn.style.border = '1px solid #333'
        header.style.opacity = '1'
    }  
    if(sector3.offsetTop - 400 <= window.scrollY){
        svgText.forEach(text => {
            text.style.fill = '#fff'
            text.style.stroke = '#fff'
        });
        gnbMenu.forEach(Menu => {
            Menu.style.color = '#fff'
        })
        earth.style.fill = '#333'
        earth.style.stroke = '#333'
        lang.style.color = '#333'
        reservation_btn.style.color = '#333'
        reservation_btn.style.border = '1px solid #333'
        header.style.opacity = '1'
    }  
    if(sector4.offsetTop - 400 <= window.scrollY){
        svgText.forEach(text => {
            text.style.fill = '#333'
            text.style.stroke = '#333'
        });
        gnbMenu.forEach(Menu => {
            Menu.style.color = '#333'
        })
        earth.style.fill = '#333'
        earth.style.stroke = '#333'
        lang.style.color = '#333'
        reservation_btn.style.color = '#333'
        reservation_btn.style.border = '1px solid #333'
        header.style.opacity = '1'
    }  
    if(footer.offsetTop - 800 <= window.scrollY){
        header.style.opacity = '0'
    }  
})
var mainSlide = new Swiper('.main-slide', {
    spaceBetween: 10,	
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var subSlide = new Swiper('.sub-slide', {
    spaceBetween: 0,	//슬라이드 간격
    slidesPerView: '1',	//한번에 보여지는 슬라이드 개수
  });

  mainSlide.controller.control = subSlide;
  subSlide.controller.control = mainSlide;


new Swiper('.FacSwiper', {
  spaceBetween: 20,	
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
	pagination : { // 페이징 설정
		el : '.Facswiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션 설정
		nextEl : '.Facswiper-button-next', // 다음 버튼 클래스명
		prevEl : '.Facswiper-button-prev', // 이번 버튼 클래스명
	},
});

if (matchMedia("screen and (min-width: 376px)").matches) {
  new Swiper('.WeatherSwiper', {
    slidesPerView: '2',
    direction: "vertical",
  });
} else {
  new Swiper('.WeatherSwiper', {
    slidesPerView: '1',
    direction: "vertical",
  });
}


let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let daynum = today.getDay();  // 요일
let daykor = ['일','월','화','수','목','금','토']

let TodayDate = document.querySelector('.today-date-info')
let TmrowDate = document.querySelector('.tmrow-date-info')
let AftTmrowDate = document.querySelector('.aft-tmrow-date-info')

dayFunc(TodayDate, 0)
dayFunc(TmrowDate, 1)
dayFunc(AftTmrowDate, 2)



function dayFunc(a, b){
  let monthLastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  console.log(daykor[-2 + b])
  if(date+b > monthLastDay[month - 1]){
    if(daynum+b > 6){
      a.innerHTML = `(${year}년 ${month+1}월 ${0+b}일 ${daykor[daynum+b-7]}요일)`
    }else{
      a.innerHTML = `(${year}년 ${month+1}월 ${0+b}일 ${daykor[daynum+b]}요일)`
    }
  }else{
    if(daynum+b > 6){
      a.innerHTML = `(${year}년 ${month}월 ${date+b}일 ${daykor[daynum+b-7]}요일)`
    }else{
      a.innerHTML = `(${year}년 ${month}월 ${date+b}일 ${daykor[daynum+b]}요일)`
    }
  }
}

