function automateWord() {
    const studyCards = document.querySelectorAll('.study-card');
    studyCards[0].click();
    let i = 1;
    recursiveClick();
    
    function recursiveClick() {
        const intervalID = setInterval(() => {
            if (studyCards[i-1].classList.contains('end')) {
                if (i < studyCards.length) {
                    clearInterval(intervalID);
                    studyCards[i].className = 'study-card';
                    studyCards[i].click();
                    i++;
                    recursiveClick();                    
                } else {
                    document.querySelector('.next-cell > div').click();
                }
            }
        }, 100);
    }
}