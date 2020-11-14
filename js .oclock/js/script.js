const hour = document.querySelector('.h'),
min = document.querySelector('.m'),
sec = document.querySelector('.s'),
hoursNummer = document.querySelector('.hours'),
minutesNumber = document.querySelector('.minutes');

function clock() {
    let time = new Date()
    let second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;




    sec.style = `transform: rotate(${second}deg); transition 1s linear`;
    min.style = `transform: rotate(${minutes}deg); transition 1s linear`;
    hours.style = `transform: rotate(${hours}deg); transition 1s linear`;




   hoursNummer.innerHTML = time.getHours() < 10 ? '0'+ time.getHours(): time.getHours();
minutesNumber.innerHTML = time.getMinutes() < 10 ? '0'+ time.getMinutes(): time.getMinutes();






setTimeout(()=> clock(),1000);

}


clock();

const links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem');
      


      for (let  i = 0; i < links.length; i++) {
        links[i].addEventListener('click',function(e){
        e.preventDefault();

            for (let ix = 0; ix < tabs.length; ix++) {
                links[ix].classList.remove('active');
                tabs[ix].classList.remove('active'); 
                
            }
            tab(this,tabs[i]);
        })
          
      }
      function tab(el,arr) {
          el.classList.add('active');
          arr.classList.add('active');
      }

      const watchBtn = document.querySelector('.stopwatch__btn'),
            secondWatch = document.querySelector('.stopwatch__seconds'),
            minutWatch = document.querySelector('.stopwatch__minutes'),
            hoursdWatch = document.querySelector('.stopwatch__hours'),
            secondInfo = document.querySelector('.tabsLink__span');

      watchBtn.addEventListener('click', function () {
          if (this.innerHTML == 'start') {
                

            this.innerHTML ='stop';
            secondInfo.classList.add('active');

            let i = 0;
            setTimeout(()=> stopWatch(this,i),1000)

          }else if (this.innerHTML == 'stop' ){
              secondInfo.classList.remove('active');

              secondInfo.classList.add('active_clear');

              this.innerHTML = 'clear';
              

          }else{
            secondInfo.classList.remove('active_clear');
              secondWatch.innerHTML = 0;
            minutWatch.innerHTML = 0;
            hoursdWatch.innerHTML = 0;
            
            this.innerHTML = 'start';
          }
      })
      function stopWatch(el, i){
          if(el.innerHTML == 'stop') {
              if(i == 59){
                  i = 0;
                  secondWatch.innerHTML = i;
                  if (minutWatch.innerHTML == 59){
                    minutWatch.innerHTML = 0;
                    hoursdWatch++;
                  }else{
                      minutWatch.innerHTML++
                  }
              }else{
                  i++;
                  secondWatch.innerHTML =  i
              }
              setTimeout(()=> stopWatch(el,i),1000);
          }
      }


      
//  const watchBtn = document.querySelector('.stopwatch__btn'),
//        secondWatch = document.querySelector('.stopwatch__seconds'),
//        minutesWatch = document.querySelector('.stopwatch__minutes'),
//        hoursWatch = document.querySelector('.stopwatch__hours'),
//        secondInfo = document.querySelector('.tabsLink__span');

//        watchBtn.addEventListener('click', function () {
//            if (this.innerHTML == 'start') {
               
//             this.innerHTML = 'stop';
//             secondInfo.classList.add('active');

//             let i = 0;
//             setTimeout(()=> stopWatch(this,i,),1000)
//            }else if (this.innerHTML == 'stop'){
//             secondInfo.classList.remove('active');

//             secondInfo.classList.add('active_clear');

//             this.innerHTML = 'clear';
          
//            }else{
//             secondInfo.classList.remove('active_clear');

//                  secondWatch.innerHTML = 0;
//             minutesWatch.innerHTML = 0;
//             hoursWatch.innerHTML = 0;

//             this.innerHTML = 'start';
//            }
//        })

//        function stopWatch(el, i){
//           if (el.innerHTML == 'stop') {
//               if(i == 59){
//                   i = 0;

//                   secondWatch.innerHTML = i;
//                   if (minutesWatch.innerHTML == 59) {
//                     minutesWatch.innerHTML = 0;
//                     hoursWatch++;
//                   }else{
//                     minutesWatch.innerHTML++
//                   }
                  
//                       i++;
//                   secondWatch.innerHTML = i

                  
//                   setTimeout(()=>stopWatch(el,i),1000);
//               }
//           }
//        }

   
       