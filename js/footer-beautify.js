// 在你的 JS 文件末尾，添加以下代码
document.addEventListener('DOMContentLoaded', function() {
    if (typeof footerConfig === 'undefined') return;
    
    // 创建显示容器
    let timerDiv = document.createElement('div');
    timerDiv.id = 'web-time-run';
    timerDiv.style.textAlign = 'center';
    timerDiv.style.marginTop = '10px';
    timerDiv.innerHTML = footerConfig.prefix + '<span id="runtime"></span>';
    
    // 精准插入到页脚容器内（Butterfly主题的页脚ID通常是 #footer-wrap）
    const footerWrap = document.getElementById('footer-wrap');
    if (footerWrap) {
        // 插入到页脚容器的最前面，这样就会在版权信息上方
        footerWrap.insertBefore(timerDiv, footerWrap.firstChild);
    } else {
        // 如果找不到 #footer-wrap，就退而求其次，插入到 body 最后
        document.body.appendChild(timerDiv);
    }
    
    // 启动计时器
    function updateTime() {
        let start = new Date(footerConfig.startTime).getTime();
        let now = new Date().getTime();
        let diff = now - start;
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('runtime').innerHTML = days + " 天 " + hours + " 时 " + minutes + " 分 " + seconds + " 秒";
    }
    
    updateTime();
    setInterval(updateTime, 1000);
});