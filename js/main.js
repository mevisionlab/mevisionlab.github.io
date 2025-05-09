// 语言配置
const translations = {
    zh: {
        home: '首页',
        research: '研究方向',
        team: '团队成员',
        publications: '学术成果',
        news: '新闻动态',
        contact: '联系我们',
        // 其他翻译内容
    },
    en: {
        home: 'Home',
        research: 'Research',
        team: 'Team',
        publications: 'Publications',
        news: 'News',
        contact: 'Contact',
        // 其他翻译内容
    }
};

// 当前语言
let currentLang = 'zh';

// 语言切换函数
function switchLanguage(lang) {
    currentLang = lang;
    
    // 更新按钮状态
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(lang)) {
            btn.classList.add('active');
        }
    });

    // 更新所有带有data-lang属性的元素
    document.querySelectorAll('[data-lang-' + lang + ']').forEach(element => {
        element.textContent = element.getAttribute('data-lang-' + lang);
    });

    // 存储语言偏好
    localStorage.setItem('preferred-lang', lang);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 检查存储的语言偏好
    const preferredLang = localStorage.getItem('preferred-lang') || 'zh';
    switchLanguage(preferredLang);

    // 初始化滚动动画
    initScrollAnimations();

    // 加载动态内容
    loadResearchHighlights();
    loadLatestNews();

    // 初始化滚动进度条
    initScrollProgress();
});

// 滚动动画初始化
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// 滚动进度条
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 研究亮点数据
const researchHighlights = [
    {
        title: {
            zh: '医学影像分析',
            en: 'Medical Image Analysis'
        },
        description: {
            zh: '运用深度学习技术进行医学影像的智能分析与诊断',
            en: 'Intelligent analysis and diagnosis of medical images using deep learning'
        },
        image: 'images/research1.jpg'
    },
    // 添加更多研究亮点
];

// 加载研究亮点
function loadResearchHighlights() {
    const container = document.querySelector('.highlights-grid');
    if (!container) return;

    researchHighlights.forEach(highlight => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.innerHTML = `
            <img src="${highlight.image}" alt="${highlight.title[currentLang]}" class="image-loader">
            <h3 data-lang-zh="${highlight.title.zh}" data-lang-en="${highlight.title.en}">
                ${highlight.title[currentLang]}
            </h3>
            <p data-lang-zh="${highlight.description.zh}" data-lang-en="${highlight.description.en}">
                ${highlight.description[currentLang]}
            </p>
        `;
        container.appendChild(card);
    });
}

// 新闻数据
const latestNews = [
    {
        title: {
            zh: '实验室成功发表重要研究成果',
            en: 'Lab Successfully Published Important Research Results'
        },
        date: '2024-01-15',
        image: 'images/news1.jpg'
    },
    // 添加更多新闻
];

// 加载最新新闻
function loadLatestNews() {
    const container = document.querySelector('.news-grid');
    if (!container) return;

    latestNews.forEach(news => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.innerHTML = `
            <img src="${news.image}" alt="${news.title[currentLang]}" class="image-loader">
            <div class="news-content">
                <h3 data-lang-zh="${news.title.zh}" data-lang-en="${news.title.en}">
                    ${news.title[currentLang]}
                </h3>
                <p class="date">${news.date}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// 图片加载处理
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-loader');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
}); 