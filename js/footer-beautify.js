document.addEventListener('DOMContentLoaded', function() {
    // ================= 配置区域 =================
    const startTime = "2026-08-12"; // 【请修改】你的建站日期，格式：YYYY-MM-DD
    // ===========================================

    // 1. 获取页脚容器 (Butterfly 主题通常是 id="footer")
    const footer = document.getElementById('footer');

    if (footer) {
        // --- 关键：不修改页脚样式！只插入内容 ---
        // 找到页脚里原本放版权信息的 div (通常是 class="copyright" 或 "footer-content")
        // 如果找不到，就直接在 footer 内部创建一个新 div
        let contentDiv = footer.querySelector('.copyright') || footer.querySelector('.footer-content');
        
        if (!contentDiv) {
            // 如果主题没有标准结构，就自己创建一个
            contentDiv = document.createElement('div');
            contentDiv.className = 'runtime-container';
            footer.appendChild(contentDiv);
        }

        // 2. 创建运行时间的 span 元素
        const runtimeSpan = document.createElement('span');
        runtimeSpan.id = 'runtime';
        runtimeSpan.style.marginTop = '10px'; // 可选：和上方内容留点空隙
        runtimeSpan.style.display = 'block';  // 确保独占一行
        contentDiv.appendChild(runtimeSpan);

        // 3. 计算并更新运行时间
        function updateRuntime() {
            const now = new Date();
            const start = new Date(startTime);
            const diff = now - start;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            runtimeSpan.textContent = `本站已运行：${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
        }

        // 立即执行一次，然后每秒更新
        updateRuntime();
        setInterval(updateRuntime, 1000);
    }
});