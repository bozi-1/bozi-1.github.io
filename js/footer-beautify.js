document.addEventListener('DOMContentLoaded', function() {
    // ================= 配置区域 =================
    const startTime = "2026-08-12"; // 【请修改】你的建站日期
    // ===========================================

    const footer = document.getElementById('footer');

    if (footer) {
        // --- 第一步：彻底重置页脚样式，清除所有冲突 ---
        footer.style.cssText = `
            background-color: #0000004D !important; /* 强制背景色 */
            padding: 20px 0 !important;           /* 上下留白 */
            width: 100% !important;               /* 宽度占满 */
            text-align: center !important;        /* 文字居中 */
            color: #fff !important;               /* 文字白色 */
            font-size: 14px !important;           /* 字体大小 */
            line-height: 1.5 !important;          /* 行高舒适 */
            border: none !important;              /* 清除所有边框 */
            box-shadow: none !important;          /* 清除阴影 */
            outline: none !important;             /* 清除轮廓线（解决蓝边） */
            margin: 0 !important;                 /* 清除外边距 */
            position: relative !important;        /* 确保定位正常 */
            bottom: 0 !important;                 /* 吸附底部 */
        `;

        // --- 第二步：插入运行时间 ---
        const runtimeDiv = document.createElement('div');
        runtimeDiv.id = 'runtime';
        runtimeDiv.style.marginTop = '10px';
        footer.appendChild(runtimeDiv);

        // --- 第三步：计算并更新时间 ---
        function updateRuntime() {
            const now = new Date();
            const start = new Date(startTime);
            const diff = now - start;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            runtimeDiv.textContent = `本站已运行：${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;
        }

        updateRuntime();
        setInterval(updateRuntime, 1000);
    }
});