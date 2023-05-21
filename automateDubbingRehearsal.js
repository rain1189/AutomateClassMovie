function automateDubbingRehearsal() {
    const target = document.querySelector('.cnt-body');
    let i = 0;

    const observer = new MutationObserver(() => {
        if (i === 0) {
            setTimeout(() => {
                document.querySelector('body > div.fill-parent > div > div > div > div.col-12 > div > div.step.speak > div > div:nth-child(3) > a.btn-next-subtitle.btn.btn-outline-default.bottom.circle.mr-l-15').click();
                i = 1;
            }, 100)
        } else {
            i = 0;
        }
    })
    
    observer.observe(target, { childList: true });
}