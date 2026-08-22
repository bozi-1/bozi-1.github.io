// footer-beautify.js - 修复版
document.addEventListener('DOMContentLoaded', function() {
    // 1. 检查配置是否存在，防止报错
    if (typeof footerConfig === 'undefined') {
        console.warn('页脚美化：未找到 footerConfig 配置');
        return;
    }

    // 2. 查找或创建显示时间的容器
    let timerDiv = document.getElementById('web-time-run');
    
    // 如果页脚里还没有这个标签，我们就动态创建一个插进去
    if (!timerDiv) {
        timerDiv = document.createElement('div');
        timerDiv.id = 'web-time-run';
        timerDiv.style.textAlign = 'center'; // 居中显示
        timerDiv.style.marginTop = '10px';
        
        // 尝试插入到页脚区域 (Butterfly主题通常是 #footer-wrap)
        const footer = document.getElementById('footer-wrap');
        if (footer) {
            footer.appendChild(timerDiv);
        } else {
            // 如果找不到标准页脚，就插到 body 最后
            document.body.appendChild(timerDiv);
        }
    }

    // 3. 计算时间的函数
    function updateTimer() {
        const startTime = new Date(footerConfig.startTime).getTime();
        const now = new Date().getTime();
        const distance = now - startTime;

        if (distance < 0) {
            timerDiv.innerText = "时间未到";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 4. 更新文字
        timerDiv.innerText = footerConfig.prefix + days + " 天 " + hours + " 时 " + minutes + " 分 " + seconds + " 秒";
    }

    // 立即运行一次，然后每秒更新
    updateTimer();
    setInterval(updateTimer, 1000);
});