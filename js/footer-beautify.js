document.addEventListener('DOMContentLoaded', function() {
    // 1. 配置你的建站时间
    const startTime = "2026-08-12"; // 请修改为你的实际建站日期

    // 2. 寻找页脚的主容器 (Butterfly 主题通常是 #footer)
    const footer = document.getElementById('footer');

    // ...前面的代码不变...

if (footer) {
    // === 核心样式修复 ===
    footer.style.backgroundColor = 'transparent'; // 1. 设为透明，让它融入背景图（如果你想要黑色条，就改成 '#333'）
    footer.style.padding = '20px 0';              // 2. 上下留点空隙，别太挤
    footer.style.textAlign = 'center';            // 3. 文字居中
    footer.style.lineHeight = '1.5';              // 4. 行高舒适一点
    
    // 5. 【关键】强制把页脚推到底部 (Flex布局)
    // 如果你的主题支持，这行代码能让页脚永远吸附在视口最下方
    // footer.style.position = 'relative'; 
    // footer.style.bottom = '0';
    // footer.style.width = '100%';

    // --- 插入运行时间 HTML ---
    const timeDiv = document.createElement('div');
    timeDiv.id = 'web-runtime';
    timeDiv.style.color = '#fff'; // 字体颜色：白色（如果是浅色背景请改成 #333）
    timeDiv.style.fontSize = '14px';
    timeDiv.style.fontWeight = 'bold';
    timeDiv.innerHTML = '本站已运行：<span id="runtime-span">Loading...</span>';
    
    // 清空页脚原有内容（防止有残留的空标签），然后插入时间
    footer.innerHTML = ''; 
    footer.appendChild(timeDiv);
}
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
);