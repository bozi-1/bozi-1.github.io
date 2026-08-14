document.addEventListener('DOMContentLoaded', function () {
    // 确保 ID 和配置文件里的 div id="aplayer" 一致
    const container = document.getElementById('test-aplayer');
    
    if (container && typeof APlayer !== 'undefined') {
        const ap = new APlayer({
            container: container,
            fixed: true,      // 开启吸底模式
            mini: true,      // 默认不迷你
            autoplay: false,  // 自动播放（浏览器通常限制）
            audio: [
                {
                    name: 'クロノスタシス (时停错觉)',
                    artist: 'きのこ帝国',
                    url: 'https://music.163.com/song/media/outer/url?id=1311472074.mp3',
                    cover: 'http://p1.music.126.net/cZEntHrDRirI_wLmNDU9eQ==/109951163560126330.jpg?param=130y130'
                }
            ]
        });
    }
});
