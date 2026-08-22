document.addEventListener('DOMContentLoaded', function() {
    // ================= 配置区域 =================
    const startTime = "2026-08-12"; // 【请修改】你的建站日期
    // ===========================================

    // 1. 获取页脚容器
    const footer = document.getElementById('footer');

    if (footer) {
        // --- 第一步：强力修复页脚样式 (让它变成底部的黑条) ---
        footer.style.backgroundColor = '#0000004d'; // 背景色
        footer.style.padding = '20px 0';          // 上下留白
        footer.style.width = '100%';              // 宽度占满
        footer.style.textAlign = 'center';        // 文字居中
        footer.style.color = '#fff';              // 文字颜色白色
        footer.style.fontSize = '14px';           // 字体大小

        // --- 第二步：创建显示时间的元素 (这就是报错里缺少的 runtimeDiv) ---
        // 注意：这一行必须在后面使用它之前！
        const runtimeDiv = document.createElement('div'); 
        runtimeDiv.id = 'web-runtime';
        runtimeDiv.style.marginTop = '5px';
        runtimeDiv.innerHTML = '本站已运行：<span id="runtime-span" style="font-weight:bold; color:#49b1f5;">Loading...</span>';

        // --- 第三步：把时间盒子塞进页脚 ---
        footer.appendChild(runtimeDiv);

        // --- 第四步：计算时间的逻辑 ---
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
                
                // 更新页面上的文字
                const span = document.getElementById('runtime-span');
                if (span) {
                    span.innerText = timeString;
                }
            }
        }

        // 立即运行一次，然后每秒更新
        updateRuntime();
        setInterval(updateRuntime, 1000);
    } else {
        console.warn('未找到 #footer 元素，请检查主题配置。');
    }
});