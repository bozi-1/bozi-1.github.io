// --- 网站运行时间脚本 (针对 Butterfly/Hexo 主题优化版) ---
(function() {
    // 1. 设置你的建站时间 (格式：YYYY-MM-DDTHH:MM:SS)
    // 注意：截图里是 2025年，请确认是否准确，这里暂时保留你的设置
    const startTime = new Date('2025-01-01T00:00:00+08:00'); 

    // 2. 寻找页脚容器 (尝试多种可能的选择器)
    // #footer, .footer-wrap, footer 都是常见选择器
    let footer = document.getElementById('footer') || 
                 document.querySelector('.footer-wrap') || 
                 document.querySelector('footer');

    if (footer) {
        // --- 核心修复：彻底清除主题自带的“黑色区域”和“蓝边” ---
        
        // A. 强制背景透明 (解决黑色区域)
        footer.style.backgroundColor = 'transparent'; 
        
        // B. 清除所有边框和阴影 (解决蓝边)
        footer.style.border = 'none';
        footer.style.borderTop = 'none'; // 很多主题在顶部有一条线
        footer.style.boxShadow = 'none';
        footer.style.outline = 'none';
        
        // C. 调整布局，确保文字居中且垂直对齐
        footer.style.textAlign = 'center';
        footer.style.padding = '15px 0'; // 上下留点空隙，不要贴太紧
        footer.style.marginTop = '0';
        footer.style.color = '#fff';     // 强制文字白色
        footer.style.fontSize = '14px';
        footer.style.lineHeight = '1.6';
        
        // D. 【关键】尝试清除父级容器的背景 (有些主题外层还有一个 div)
        if(footer.parentElement && footer.parentElement.id !== 'web_bg') {
             // 防止误伤网页大背景，只清除紧贴的父级背景
             // footer.parentElement.style.backgroundColor = 'transparent'; 
             // 上面这行先注释掉，如果还有黑块再打开
        }

        // --- 插入运行时间 DIV ---
        const runtimeDiv = document.createElement('div');
        runtimeDiv.id = 'runtime-timer'; // 使用独特的 ID
        
        // 初始内容
        runtimeDiv.innerHTML = '本站已运行：计算中...';
        
        // 将时间插入到页脚的最前面或最后面
        // prepend 是插在最前面，appendChild 是插在最后面
        footer.prepend(runtimeDiv); 

        // --- 更新时间逻辑 ---
        function updateRuntime() {
            const now = new Date();
            const diff = now - startTime;
            
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                runtimeDiv.innerHTML = `本站已运行：${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
            } else {
                runtimeDiv.innerHTML = "时间未到";
            }
        }

        // 立即执行一次，然后每秒更新
        updateRuntime();
        setInterval(updateRuntime, 1000);
    } else {
        console.log("未找到页脚容器，无法显示运行时间");
    }
})();