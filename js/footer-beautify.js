// === 网站运行时间脚本 (独立版) ===
document.addEventListener('DOMContentLoaded', function() {
    // 1. 配置你的建站时间 (格式: YYYY-MM-DD)
    const startTime = "2026-08-12"; 
    
    // 2. 创建显示时间的 HTML 结构
    const timeDiv = document.createElement('div');
    timeDiv.id = 'web-runtime';
    timeDiv.style.textAlign = 'center';
    timeDiv.style.marginTop = '10px';
    timeDiv.style.fontSize = '14px';
    timeDiv.style.color = '#666'; // 你可以根据背景调整颜色
    timeDiv.innerHTML = '本站已运行：<span id="runtime-span">Loading...</span>';

    // 3. 寻找页脚容器并插入
    // Butterfly 主题通常使用 .footer-wrap 或 #footer
    const footerContainer = document.querySelector('.footer-wrap') || document.getElementById('footer');
    
    if (footerContainer) {
        // 将时间 div 添加到页脚容器的最前面或最后面
        // appendChild 是加在最后，insertBefore 是加在最前
        footerContainer.appendChild(timeDiv); 
    }

    // 4. 计算时间的函数
    function updateRuntime() {
        const now = new Date();
        const start = new Date(startTime);
        const diff = now - start;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const timeString = `${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
            document.getElementById('runtime-span').innerText = timeString;
        }
    }

    // 5. 启动定时器
    setInterval(updateRuntime, 1000);
    updateRuntime(); // 初始化执行一次，避免延迟
});