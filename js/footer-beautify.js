// --- 网站运行时间脚本 (完整版) ---
(function() {
    // 1. 设置你的建站时间 (格式：YYYY-MM-DDTHH:MM:SS)
    // 请修改下面引号里的时间为你的实际建站时间
    const startTime = new Date('2026-08-12T00:00:00'); 

    // 2. 寻找页脚容器
    // 这里尝试寻找常见的页脚 ID，如果找不到会自动尝试 footer 标签
    let footer = document.getElementById('footer') || 
                 document.getElementById('site-footer') || 
                 document.querySelector('footer');

    if (footer) {
        // --- 核心修复：强制清理页脚样式，消除色块交杂 ---
        footer.style.backgroundColor = 'transparent'; // 背景透明
        footer.style.border = 'none';                 // 去除边框
        footer.style.boxShadow = 'none';              // 去除阴影
        footer.style.textAlign = 'center';            // 父容器文字居中
        footer.style.padding = '10px 0';              // 调整上下间距
        
        // --- 第二步：插入运行时间 DIV ---
        const runtimeDiv = document.createElement('div');
        runtimeDiv.id = 'runtime';
        
        // 设置这个 DIV 的样式
        runtimeDiv.style.width = '100%';        // 强制占满宽度
        runtimeDiv.style.textAlign = 'center';  // 强制文字居中
        runtimeDiv.style.marginTop = '5px';     // 上方留一点空隙
        runtimeDiv.style.color = '#ffffff';     // 字体颜色（白色）
        runtimeDiv.style.fontSize = '14px';     // 字体大小
        runtimeDiv.style.fontWeight = 'bold';   // 加粗

        // 将新 DIV 放入页脚
        footer.appendChild(runtimeDiv);

        // --- 第三步：计算并更新时间 ---
        function updateRuntime() {
            const now = new Date();
            const diff = now - startTime;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                // 更新文字内容
                runtimeDiv.innerHTML = `本站已运行：${days}天 ${hours}时 ${minutes}分 ${seconds}秒`;
            }
        }

        // 立即运行一次，然后每秒更新
        updateRuntime();
        setInterval(updateRuntime, 1000);
    } else {
        console.log('未找到页脚元素，运行时间无法显示');
    }
})();