// 等待 DOM 加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 显示当前配置的 URL
    if (typeof TARGET_URL !== 'undefined') {
        const configDisplay = document.getElementById('config-url-display');
        if (configDisplay) {
            configDisplay.textContent = TARGET_URL;
        }
    } else {
        console.error('TARGET_URL 未定义，请检查 config.js 文件');
    }

    // 统一处理所有链接和按钮的跳转
    function handleLinkClick(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (typeof TARGET_URL !== 'undefined') {
            window.location.href = TARGET_URL;
        } else {
            console.error('TARGET_URL 未定义，请检查 config.js 文件');
            alert('跳转链接未配置，请检查 js/config.js 文件');
        }
    }

    // 为所有带有 data-link 属性的元素绑定点击事件
    const linkElements = document.querySelectorAll('[data-link]');
    linkElements.forEach(function(element) {
        element.addEventListener('click', handleLinkClick);
    });

    // 为所有按钮绑定点击事件（防止遗漏）
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        if (!button.hasAttribute('data-link')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                handleLinkClick(e);
            });
        }
    });

    // 搜索框处理
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleLinkClick(e);
            }
        });
    }
});

