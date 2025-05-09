// 论文数据
const publications = [
    {
        year: 2024,
        title: {
            zh: '基于深度学习的医学图像分析',
            en: 'Medical Image Analysis with Deep Learning'
        },
        authors: 'Guangyu Ren, Hengyan Liu, et al.',
        journal: 'IEEE Transactions on Medical Imaging',
        abstract: {
            zh: '提出了一种基于深度学习的医学图像分析新方法...',
            en: 'A novel approach to medical image analysis using deep learning techniques...'
        },
        links: {
            pdf: '#',
            code: '#',
            doi: '#'
        }
    },
    {
        year: 2023,
        title: {
            zh: '先进计算机视觉技术研究',
            en: 'Advanced Computer Vision Techniques'
        },
        authors: 'Hengyan Liu, Guangyu Ren, et al.',
        journal: 'CVPR 2023',
        abstract: {
            zh: '对先进计算机视觉技术进行了全面研究...',
            en: 'A comprehensive study on advanced computer vision techniques...'
        },
        links: {
            pdf: '#',
            code: '#',
            doi: '#'
        }
    }
];

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    loadPublications();
});

// 初始化过滤器
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // 过滤论文
            const year = button.dataset.filter;
            filterPublications(year);
        });
    });
}

// 过滤论文
function filterPublications(year) {
    const items = document.querySelectorAll('.publication-item');
    items.forEach(item => {
        if (year === 'all' || item.dataset.year === year) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// 加载论文
function loadPublications() {
    const container = document.querySelector('.publications-list');
    if (!container) return;

    // 按年份分组
    const publicationsByYear = {};
    publications.forEach(pub => {
        if (!publicationsByYear[pub.year]) {
            publicationsByYear[pub.year] = [];
        }
        publicationsByYear[pub.year].push(pub);
    });

    // 按年份降序排列
    const years = Object.keys(publicationsByYear).sort((a, b) => b - a);

    // 清空容器
    container.innerHTML = '';

    // 创建年份分组
    years.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'publication-year';
        yearSection.innerHTML = `
            <h2>${year}</h2>
            <div class="publication-items">
                ${publicationsByYear[year].map(pub => createPublicationItem(pub)).join('')}
            </div>
        `;
        container.appendChild(yearSection);
    });
}

// 创建单个论文项
function createPublicationItem(pub) {
    return `
        <div class="publication-item fade-in" data-year="${pub.year}">
            <div class="pub-content">
                <h3 data-lang-zh="${pub.title.zh}" data-lang-en="${pub.title.en}">
                    ${pub.title[currentLang]}
                </h3>
                <p class="authors">${pub.authors}</p>
                <p class="journal">${pub.journal}</p>
                <p class="abstract" data-lang-zh="${pub.abstract.zh}" data-lang-en="${pub.abstract.en}">
                    ${pub.abstract[currentLang]}
                </p>
                <div class="links">
                    ${pub.links.pdf ? `
                        <a href="${pub.links.pdf}" target="_blank" class="button">
                            <i class="fas fa-file-pdf"></i> PDF
                        </a>
                    ` : ''}
                    ${pub.links.code ? `
                        <a href="${pub.links.code}" target="_blank" class="button">
                            <i class="fab fa-github"></i> Code
                        </a>
                    ` : ''}
                    ${pub.links.doi ? `
                        <a href="${pub.links.doi}" target="_blank" class="button">
                            <i class="fas fa-link"></i> DOI
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
} 