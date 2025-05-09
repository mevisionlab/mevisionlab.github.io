// 研究生数据
const graduateStudents = [
    {
        name: {
            zh: '张三',
            en: 'Zhang San'
        },
        photo: 'images/student1.jpg',
        title: {
            zh: '博士研究生',
            en: 'Ph.D. Student'
        },
        research: {
            zh: '研究方向：医学图像分割、深度学习',
            en: 'Research: Medical Image Segmentation, Deep Learning'
        },
        email: 'student1@xjtlu.edu.cn',
        links: {
            github: 'https://github.com/',
            scholar: 'https://scholar.google.com/'
        }
    },
    {
        name: {
            zh: '李四',
            en: 'Li Si'
        },
        photo: 'images/student2.jpg',
        title: {
            zh: '硕士研究生',
            en: 'Master Student'
        },
        research: {
            zh: '研究方向：计算机视觉、目标检测',
            en: 'Research: Computer Vision, Object Detection'
        },
        email: 'student2@xjtlu.edu.cn',
        links: {
            github: 'https://github.com/',
            scholar: 'https://scholar.google.com/'
        }
    }
];

// 校友数据
const alumni = [
    {
        name: {
            zh: '王五',
            en: 'Wang Wu'
        },
        photo: 'images/alumni1.jpg',
        title: {
            zh: '博士 (2023)',
            en: 'Ph.D. (2023)'
        },
        current: {
            zh: '现就职于：腾讯AI实验室',
            en: 'Current: Tencent AI Lab'
        },
        email: 'alumni1@company.com',
        links: {
            linkedin: 'https://linkedin.com/',
            scholar: 'https://scholar.google.com/'
        }
    }
];

// 加载研究生信息
function loadGraduateStudents() {
    const container = document.querySelector('.students .member-grid');
    if (!container) return;

    graduateStudents.forEach(student => {
        const card = createMemberCard(student);
        container.appendChild(card);
    });
}

// 加载校友信息
function loadAlumni() {
    const container = document.querySelector('.alumni .member-grid');
    if (!container) return;

    alumni.forEach(alumnus => {
        const card = createMemberCard(alumnus);
        container.appendChild(card);
    });
}

// 创建成员卡片
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card fade-in';
    
    const content = `
        <img src="${member.photo}" alt="${member.name[currentLang]}">
        <h3 data-lang-zh="${member.name.zh}" data-lang-en="${member.name.en}">
            ${member.name[currentLang]}
        </h3>
        <p class="title" data-lang-zh="${member.title.zh}" data-lang-en="${member.title.en}">
            ${member.title[currentLang]}
        </p>
        ${member.current ? `
            <p class="affiliation" data-lang-zh="${member.current.zh}" data-lang-en="${member.current.en}">
                ${member.current[currentLang]}
            </p>
        ` : ''}
        <p class="research-interests" data-lang-zh="${member.research?.zh || ''}" data-lang-en="${member.research?.en || ''}">
            ${member.research ? member.research[currentLang] : ''}
        </p>
        <div class="member-links">
            ${member.links.scholar ? `<a href="${member.links.scholar}" target="_blank"><i class="fas fa-graduation-cap"></i></a>` : ''}
            ${member.links.github ? `<a href="${member.links.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
            ${member.links.linkedin ? `<a href="${member.links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
            <a href="mailto:${member.email}"><i class="fas fa-envelope"></i></a>
        </div>
    `;
    
    card.innerHTML = content;
    return card;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    loadGraduateStudents();
    loadAlumni();
}); 