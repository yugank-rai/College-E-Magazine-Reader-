const articleData = {
    student1: {
        title: 'kaustubh: Coding Enthusiast',
        content: 'kaustubh leads the campus coding club and develops innovative applications. He inspires peers through workshops and mentorship programs.'
    },
    student2: {
        title: 'Yugank: Developer',
        content: 'Yugank is passionate about building scalable solutions and contributing to open-source projects. His work is making a significant impact on the campus tech scene.'
    },
    student3: {
        title: 'Ayush: Sports Leader and DSA Enthusiast',
        content: 'Ayush balances varsity athletics with academic excellence, motivating students through leadership and teamwork. His energy elevates both the court and the classroom.'
    },
    article1: {
        title: 'Campus Tech Evolution',
        content: 'The campus is embracing smart systems, connected learning spaces, and new tools that make studying more immersive. This article highlights the technology shaping student life.'
    },
    article2: {
        title: 'Mental Health Matters',
        content: 'Wellness services, support networks, and mindful habits are helping our campus stay strong. This story covers the resources available to every student.'
    },
    article3: {
        title: 'New Student Center',
        content: 'A modern student center now offers collaborative spaces, lounges, and creative hubs designed to bring the community together.'
    }
};

const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');
const magazine = document.getElementById('magazine');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        scrollToPage(index);
    });
});

magazine.addEventListener('scroll', () => {
    const scrollPos = magazine.scrollTop;
    const pageHeight = window.innerHeight;
    const activeIndex = Math.round(scrollPos / pageHeight);

    navItems.forEach((item, idx) => {
        item.classList.toggle('active', idx === activeIndex);
    });
});

function scrollToPage(index) {
    const target = pages[index];
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

const modal = document.getElementById('articleModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

function openArticle(key) {
    const article = articleData[key];
    if (!article) return;

    modalBody.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeArticle() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeArticle);
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeArticle();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeArticle();
    }
});

document.querySelectorAll('.spotlight-card, .article-card').forEach(card => {
    card.addEventListener('click', () => {
        const articleKey = card.getAttribute('data-article');
        openArticle(articleKey);
    });
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentSlide = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function showPreviousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

setInterval(showNextSlide, 5000);
