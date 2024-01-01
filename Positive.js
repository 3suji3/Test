let currentSlide = 0;

     // 1. 슬라이드가 바뀌는 함수
     function changeSlide(n) { //n=바뀌는 슬라이드의 숫자를 의미한다
       currentSlide += n;
       showSlide(); 
     }

     // 2. 슬라이드를 화면에 보여주는 함수
     function showSlide() {
      // 모든 슬라이드 요소를 갖고와서 slides 변수에 저장
       const slides = document.querySelectorAll('.section-main'); //querySelectorAll HTML에서 특정한 클래스를 가진 슬라이드를 찾아내어 이를 조작할 수 있게 하는 것, 반환값은 NodeList
       //전체 슬라이드 개수
       const totalSlides = slides.length;

       // 현재 슬라이드의 인덱스가 전체 슬라이드의 범위를 벗어나면 조정해주는 코드 왔다리갔다리~~
       // 현재 슬라이드 인덱스가 슬라이드 개수를 벗어나면 처음 슬라이드로 돌아감
       if (currentSlide > totalSlides - 1) {
         currentSlide = 0;
       } else if (currentSlide < 0) { 
        currentSlide = totalSlides - 1;
      }

      // 각각의 슬라이드에 대해 작업
       slides.forEach((slide, index) => { //index=슬라이드의 위치
        //forEach=배열의 각 요소에 대해 주어진 함수를 실행하는 메서드(유사 배열 객체(NodeList)에도 사용 가능 / 고로 이것은 사용 가능하다.)
        // 현재 인덱스에 해당하는 슬라이드는 화면에 보여줌
        if (index === currentSlide) {
          slide.style.display = 'flex'; // 슬라이드를 보이게 함
          slide.style.alignItems = 'center'; // 슬라이드의 align-items를 중앙으로 설정 (모든 슬라이드 요소를 갖고 와도 이것만 실행이 되지 않음.. 그래서 이 코드만 갔고왔다네...)
        } 
        // 나머지 슬라이드는 화면에서 숨김
        else {
         slide.style.display = 'none';
       }
       });
      }