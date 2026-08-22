document.addEventListener('DOMContentLoaded', function() {
    // ================= 配置区域 =================
    const startTime = "2026-08-12"; // 【请修改】你的建站日期，格式：YYYY-MM-DD
    // ===========================================

    // 1. 获取页脚容器 (Butterfly 主题通常是 id="footer")
    const footer = document.getElementById('footer');

    if (footer) {
        // --- 第一步：强力修复页脚样式 ---
        // 既然删掉了版权信息，我们需要手动把页脚的“壳子”撑起来
        
        // 设置背景色：这里用了深灰色 (#2d2d2d)，如果你想透明，改成 'transparent'
        footer.style.backgroundColor = '#0000004d'; 
        
        // 设置内边距：上下各 20px，左右自动
        footer.style.padding = '20px 0'; 
        
        // 确保宽度占满全屏，防止缩成一团
        footer.style.width = '100%'; 
        
        // 文字居中
        footer.style.textAlign = 'center'; 
        
        // 字体颜色：浅灰色，配合深色背景
        footer.style.color = '#aaa'; 
        
        // 字体大小
        footer.style.fontSize = '14px'; 

        // 清除可能存在的旧边框或阴影（可选）
        footer.style.borderTop = 'none'; 
        footer.style.boxShadow = 'none';

        // --- 第二步：创建运行时间的显示区域 ---
        const timeDiv = document.createElement('div');
        timeDiv.id = 'web-runtime';
        timeDiv.style.marginTop = '5px'; // 稍微留点上边距
        
        // 初始文字
        timeDiv.innerHTML = '本站已运行：<span id="runtime-span" style="color: #fff; font-weight: bold;">Loading...</span>';

        // --- 第三步：将时间插入到页脚中 ---
        // 使用 appendChild 把它放到页脚的最后面
        footer.appendChild(timeDiv);

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
                document.getElementById('runtime-span').innerText = timeString;
            } else {
                document.getElementById('runtime-span').innerText = "时间未到";
            }
        }

        // 立即执行一次，然后每秒更新
        updateRuntime();
        setInterval(updateRuntime, 1000);
        
    } else {
        console.warn("未找到页脚容器 (#footer)，请检查主题版本或 ID 名称。");
    }
});