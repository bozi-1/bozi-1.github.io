// 在你的 JS 文件末尾，添加以下代码
document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取运行时间的容器（假设你的 JS 里已经创建了 id="runtime" 的元素）
    const runtimeElement = document.getElementById('runtime');
    
    // 2. 如果没找到，说明前面的代码没跑起来，直接返回
    if (!runtimeElement) return;

    // 3. 找到页脚里的版权信息容器（Butterfly 主题通常是 .copyright 或 .footer_custom_text）
    const footerCopyright = document.querySelector('.copyright') || document.querySelector('.footer_custom_text');

    // 4. 如果找到了版权信息，就把运行时间插到它前面
    if (footerCopyright) {
        // 创建一个包裹 div，方便加样式
        const wrapper = document.createElement('div');
        wrapper.style.textAlign = 'center';
        wrapper.style.margin = '10px 0';
        wrapper.appendChild(runtimeElement); // 把运行时间放进去
        
        // 插入到版权信息的前面
        footerCopyright.parentNode.insertBefore(wrapper, footerCopyright);
    } else {
        // 如果没找到版权信息，就保持原样，追加到页面底部
        document.body.appendChild(runtimeElement);
    }
});