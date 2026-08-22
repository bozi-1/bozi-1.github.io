document.addEventListener('DOMContentLoaded', function() {
    // 1. 配置你的建站时间
    const startTime = "2023-01-01"; // 请修改为你的实际建站日期

    // 2. 寻找页脚的主容器 (Butterfly 主题通常是 #footer)
    const footer = document.getElementById('footer');

    if (footer) {
        // --- 【关键步骤】强制修复方框样式 ---
        // 因为你删掉了版权信息，方框可能塌了。这里强制给它加上背景和内边距。
        // 注意：这里的 '#363636' 是深灰色背景，如果你的主题是浅色，请改成 'white' 或 '#fff'
        footer.style.backgroundColor = '#363636'; 
        footer.style.padding = '20px 0'; 
        footer.style.textAlign = 'center';
        footer.style.color = '#ccc'; // 字体颜色
        
        // 确保它是最底层的块级元素
        footer.style.display = 'block'; 
        footer.style.width = '100%';
        // ----------------------------------

        // 3. 创建运行时间的 HTML
        const runtimeDiv = document.createElement('div');
        runtimeDiv.id = 'web-runtime';
        runtimeDiv.style.marginTop = '5px';
        runtimeDiv.style.fontSize = '14px';
        runtimeDiv.innerHTML = '本站已运行：<span id="runtime-span">Loading...</span>';

        // 4. 将时间插入到页脚容器的最前面
        // 如果页脚里还有其他东西（比如社交图标），这会把它顶上去
        if (footer.firstChild) {
            footer.insertBefore(runtimeDiv, footer.firstChild);
        } else {
            footer.appendChild(runtimeDiv);
        }

        // 5. 计算时间的逻辑
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

        setInterval(updateRuntime, 1000);
        updateRuntime(); // 立即执行一次，避免等待1秒
    }
});