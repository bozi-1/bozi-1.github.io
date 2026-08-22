// --- 网站运行时间脚本 (彻底修复版) ---
(function() {
    // 1. 设置你的建站时间
    const startTime = new Date('2025-01-01T00:00:00+08:00'); 

    // 2. 寻找页脚容器
    let footer = document.getElementById('footer') || 
                 document.querySelector('.footer-wrap') || 
                 document.querySelector('footer');

    if (footer) {
        // --- 核心修复：注入 CSS 强制清除伪元素和边框 ---
        // 这是解决 "黑色区域" 和 "蓝边" 的关键
        const style = document.createElement('style');
        style.innerHTML = `
            /* 强制让页脚及其伪元素完全透明 */
            #footer, footer, .footer-wrap {
                background: transparent !important;
                background-color: transparent !important;
                border: none !important;
                border-top: none !important;
                box-shadow: none !important;
                outline: none !important;
            }
            /* 关键：清除那个导致黑色区域的 ::before 伪元素 */
            #footer::before, footer::before, .footer-wrap::before {
                display: none !important;
                content: none !important;
                background: none !important;
            }
        `;
        document.head.appendChild(style);

        // --- 调整页脚布局 ---
        footer.style.position = 'relative'; // 确保定位正常
        footer.style.textAlign = 'center';
        footer.style.padding = '15px 0';
        footer.style.minHeight = 'auto';

        // --- 插入运行时间 DIV ---
        // 避免重复插入
        if (!document.getElementById('runtime')) {
            const runtimeDiv = document.createElement('div');
            runtimeDiv.id = 'runtime';
            
            // 设置文字样式
            runtimeDiv.style.color = '#fff'; // 白色文字
            runtimeDiv.style.fontSize = '14px';
            runtimeDiv.style.lineHeight = '1.6';
            runtimeDiv.style.width = '100%';
            
            footer.appendChild(runtimeDiv);

            // --- 计算逻辑 ---
            function updateRuntime() {
                const now = new Date();
                const diff = now - startTime;
                
                if (diff > 0) {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                    
                    runtimeDiv.innerText = `本站已运行：${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
                }
            }

            // 初始化并启动定时器
            updateRuntime();
            setInterval(updateRuntime, 1000);
        }
    }
})();