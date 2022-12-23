// opp: nesne tabanlı proglamlama ,
// object


// let soru = {
//     sorumetni : "hangisi takım değildir ? ",
//     cevapsecenkleri : {
//         a : "gs",
//         b : "fb",
//         c : "ts",
//         d : "eti"
//     },
//     dogruCevap : "d" ,
//     cevabıKontrolEt : function (cevap){
//         return cevap === this.dogruCevap

//     }
// }
// console.log(soru.cevabıKontrolEt("d"));

// sınıf => constructor => nesne * 30 
// es5 es6 es7


const quiz =  new Quiz(sorular);
const ui = new UI();


ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.soruGoster(quiz.sorugetir());
    ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
})

ui.next_btn.addEventListener("click" , function () {
    if (quiz.sorular.length != quiz.soruIndex +1 ) {
        quiz.soruIndex += 1;
        clearInterval(counter);
        startTimer(10);
        ui.soruGoster(quiz.sorugetir());
        ui.soruSayisiGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.next_btn.classList.remove("show");
    
      }else {
        clearInterval(counter);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skorgoster(quiz.sorular.length, quiz.DogruCevapSayisi);
      }
});

ui.btn_quit.addEventListener("click" , function() {
    window.location.reload();
});

ui.btn_replay.addEventListener("click" , function () {
    quiz.soruIndex = 0;
    quiz.DogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

function optionsSelected(options){
    clearInterval(counter);
    let cevap = options.querySelector("span b").textContent;
    let soru = quiz.sorugetir();

    if (soru.cevebıKontrolEt(cevap)) {
        quiz.DogruCevapSayisi += 1;
        options.classList.add("correct") ;
        options.insertAdjacentHTML("beforeend", ui.correctIcon);
    }else {

        options.classList.add("incorrect") ;
       options.insertAdjacentHTML("beforeend", ui.incorrectIcon);

    }


    
    for (let i=0;  i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
         
     }

     ui.next_btn.classList.add("show");
}

let counter ;
function startTimer(time) {
 counter = setInterval(timer ,  1000 ) ;

  function timer() {
    ui.time_second.textContent =  time ;
    time--;
    if(time < 0 ) {
        clearInterval(counter);

        ui.time_text.textContent = "süre bitti";
        
      let cevap =  quiz.sorugetir().dogruCevap;

      for (let  options of ui.option_list.children){
        if(options.querySelector("span b").textContent == cevap) {

          options.classList.add("correct");
          options.insertAdjacentHTML("beforeend", ui.incorrectIcon);
        }

        options.classList.add("disabled");
       }
       ui.next_btn.classList.add("show");
    }
  }
}


// çözülecek sorun setInternal
function startTimerLine () {
  setInterval (timer , 100);
  let line_witdh = 0;



function timer() {
  line_witdh += 5;
  ui.time_line.style.width = line_witdh + "px";
  
}

}

