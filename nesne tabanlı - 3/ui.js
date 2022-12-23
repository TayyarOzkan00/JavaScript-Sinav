function UI () {
    this.btn_start = document.querySelector(".btn-start"),
    this.next_btn = document.querySelector(".next-btn"),
    this.btn_replay = document.querySelector(".btn-replay"),
    this.btn_quit = document.querySelector(".btn-quit"),
    this.time_line = document.querySelector("time_line"),
    this.quiz_box = document.querySelector(".quiz-box"),
    this.time_second = document.querySelector(".time_second"),
    this.time_text = document.querySelector(".time_text"),
    this.score_box = document.querySelector(".score-box"),
    this.option_list =document.querySelector(".options-list"),
    this.correctIcon = ` <div class="icon"><i class="fas fa-check"></i></div>`,
    this.incorrectIcon = ` <div class="icon"><i class="fas fa-times"></i></div>`
}


UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.sorumetni}</span>`;
    let option = '';

    for(let cevap in soru.cevapsecenkleri) {
        option += 
            `
                <div class="option"> 
                    <span><b>${cevap}</b>: ${soru.cevapsecenkleri[cevap]}</span>
                </div>
            `;
    }
    //const option_list =document.querySelector(".options-list");

    document.querySelector(".question-text").innerHTML = question;
    this.option_list.innerHTML = option;

    const options = this.option_list.querySelectorAll(".option"); 

    for(let opt of options ){
        opt.setAttribute("onclick" , "optionsSelected(this)");
    }

}


UI.prototype.soruSayisiGoster = function(soruSirasi , toplamSoru) {
    let tag = `<span class="badge bg-warnig">${soruSirasi} / ${toplamSoru} </span>`;
document.querySelector(".quiz-box .question_index").innerHTML = tag;
    
}

UI.prototype.skorgoster = function (toplamSoru , dogruCevap) {
     let tag = `toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap`;
     document.querySelector(".score-box .score_text").innerHTML = tag;
}