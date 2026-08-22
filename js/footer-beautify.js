(function() {
    // 设置开始时间
    const startTime = new Date('2026-08-12T00:00:00+08:00'); 
    let footer = document.getElementById('footer');

    if (footer) {
        // 创建容器
        const runtimeDiv = document.createElement('div');
        runtimeDiv.id = 'runtime';
        
        // 【核心修改区域】
        // 这里直接控制样式，不用去 CSS 文件里找了
        Object.assign(runtimeDiv.style, {
            'text-align': 'center',
            'color': '#ffffff',       // 文字纯白
            'font-size': '14px',      // 字体大小
            'padding': '25px 0',      // 【加大】上下留白 25px，让条子变高
            'width': '100%',          // 【全都要】强制占满宽度
            'background': 'rgba(0, 0, 0, 0.85)', // 【加深】黑色背景，85% 不透明度，几乎不透
            'position': 'relative',   // 确保层级
            'z-index': '999',         // 确保浮在插画上面
            'box-shadow': '0 -2px 10px rgba(0,0,0,0.3)', // 顶部加一点阴影，更有层次感
            'backdrop-filter': 'blur(5px)' // (可选) 如果浏览器支持，背景会有磨砂玻璃效果
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
                
                // 格式化文字
                runtimeDiv.innerText = `本站已运行：${d}天 ${h}时 ${m}分 ${s}秒`;
            }
        }

        // 立即运行一次并启动定时器
        update();
        setInterval(update, 1000);
    }
})();