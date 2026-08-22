(function() {
    // 1. 设置开始时间
    const startTime = new Date('2026-08-12T00:00:00+08:00'); 
    let footer = document.getElementById('footer');

    if (footer) {
        // 创建容器
        const runtimeDiv = document.createElement('div');
        runtimeDiv.id = 'runtime';
        
        // 【关键修改】在这里直接写好样式，而不是只写颜色
        // 使用 Object.assign 批量写入样式，确保生效
        Object.assign(runtimeDiv.style, {
            'text-align': 'center',
            'color': '#ffffff',           // 白色文字
            'background': 'rgba(0, 0, 0, 0.6)', // 半透明黑底
            'padding': '10px 20px',        // 上下6px，左右20px
            'border-radius': '20px',      // 圆角胶囊形状
            'display': 'inline-block',    // 让背景只包裹文字，不占满整行
            'margin-bottom': '10px',      // 和下面内容拉开点距离
            'font-size': '14px',
            'font-weight': 'bold',
            'box-shadow': '0 4px 6px rgba(0,0,0,0.1)' // 加点阴影更有质感
        });

        // 插入到页脚最前面
        footer.insertBefore(runtimeDiv, footer.firstChild);

        function update() {
            const now = new Date();
            const diff = now - startTime;

            if (diff > 0) {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const m = Math.floor((diff / (1000 * 60)) % 60);
                const s = Math.floor((diff / 1000) % 60);
                
                // 更新文字
                runtimeDiv.innerText = `本站已运行: ${d}天 ${h}时 ${m}分 ${s}秒`;
            }
        }

        setInterval(update, 1000);
        update(); // 立即执行一次，避免页面刚加载时闪烁空白
    }
})();