// --- 纯净版运行时间 (只负责计算，不碰样式) ---
(function() {
    const startTime = new Date('2026-08-12T00:00:00+08:00'); 
    let footer = document.getElementById('footer');

    if (footer) {
        // 创建时间容器
        const runtimeDiv = document.createElement('div');
        runtimeDiv.id = 'runtime';
        
        // 简单的内联样式，确保文字居中且白色
        runtimeDiv.style.textAlign = 'center';
        runtimeDiv.style.color = '#fff'; // 确保文字可见
        runtimeDiv.style.padding = '10px 0';
        runtimeDiv.style.fontSize = '14px';
        
        // 插入到页脚最前面或最后面
        footer.insertBefore(runtimeDiv, footer.firstChild);

        function update() {
            const now = new Date();
            const diff = now - startTime;
            
            if (diff > 0) {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const m = Math.floor((diff / (1000 * 60)) % 60);
                const s = Math.floor((diff / 1000) % 60);
                runtimeDiv.innerText = `本站已运行：${d}天 ${h}时 ${m}分 ${s}秒`;
            }
        }
        
        setInterval(update, 1000);
        update();
    }
})();