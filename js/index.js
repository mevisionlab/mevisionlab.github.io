// 初始化Swiper轮播图
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        // 基本配置
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // 导航按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // 效果
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // 响应式设计
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            }
        }
    });

    // 鼠标悬停时暂停自动播放
    const swiperContainer = document.querySelector('.swiper');
    swiperContainer.addEventListener('mouseenter', () => {
        swiper.autoplay.stop();
    });
    swiperContainer.addEventListener('mouseleave', () => {
        swiper.autoplay.start();
    });
});

// 滚动动画
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});

// 动态更新新闻日期
document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-card');
    
    newsItems.forEach(item => {
        const dateElement = item.querySelector('.news-date');
        if (dateElement) {
            const day = dateElement.querySelector('.day').textContent;
            const month = dateElement.querySelector('.month').textContent;
            
            // 根据当前语言设置月份
            if (currentLang === 'zh') {
                dateElement.querySelector('.month').textContent = getChineseMonth(month);
            }
        }
    });
});

// 获取中文月份
function getChineseMonth(month) {
    const months = {
        'Jan': '1月',
        'Feb': '2月',
        'Mar': '3月',
        'Apr': '4月',
        'May': '5月',
        'Jun': '6月',
        'Jul': '7月',
        'Aug': '8月',
        'Sep': '9月',
        'Oct': '10月',
        'Nov': '11月',
        'Dec': '12月'
    };
    return months[month] || month;
} 