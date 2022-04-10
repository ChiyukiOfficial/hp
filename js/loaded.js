window.onload = () => {
    const loader = document.getElementById('loader');
    sleep(3000);
    loader.classList.add('loaded');
}

function sleep(waitMsec) {
    var startMsec = new Date();

    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
}