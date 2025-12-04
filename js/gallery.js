/**
 * Web Space Uganda - Gallery JavaScript
 * Handles gallery filtering and lightbox modal
 */

document.addEventListener('DOMContentLoaded', function() {
    initGalleryFilter();
    initLightbox();
});

// ========== Gallery Filter Functionality ==========
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0 || galleryItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========== Lightbox Modal Functionality ==========
function initLightbox() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const lightboxModal = document.getElementById('lightboxModal');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    if (!lightboxModal) return;
    
    let currentProjectIndex = 0;
    const projects = getProjectData();
    
    // Open lightbox on view button click
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project'));
            currentProjectIndex = projectId - 1;
            openLightbox(projectId);
        });
    });
    
    // Close lightbox
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
            updateLightboxContent(currentProjectIndex + 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentProjectIndex = (currentProjectIndex + 1) % projects.length;
            updateLightboxContent(currentProjectIndex + 1);
        });
    }
    
    // Close on outside click
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightboxModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
}

// ========== Open Lightbox ==========
function openLightbox(projectId) {
    const lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    updateLightboxContent(projectId);
}

// ========== Close Lightbox ==========
function closeLightbox() {
    const lightboxModal = document.getElementById('lightboxModal');
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========== Update Lightbox Content ==========
function updateLightboxContent(projectId) {
    const projects = getProjectData();
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    // Update content
    document.getElementById('lightboxImage').textContent = project.imageText;
    document.getElementById('lightboxTitle').textContent = project.title;
    document.getElementById('lightboxCategory').textContent = project.category;
    document.getElementById('lightboxDescription').textContent = project.description;
    
    // Update features
    const featuresContainer = document.getElementById('lightboxFeatures');
    featuresContainer.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresContainer.appendChild(li);
    });
    
    // Update technologies
    document.getElementById('lightboxTech').textContent = project.technologies;
}

// ========== Project Data ==========
function getProjectData() {
    return [
        {
            id: 1,
            title: 'Kampala Fashion Hub',
            category: 'E-commerce Platform',
            imageText: 'Fashion E-store',
            description: 'A comprehensive e-commerce platform for a fashion boutique featuring online shopping cart, payment gateway integration with mobile money, and inventory management system.',
            features: [
                'Product catalog with filtering and search',
                'Shopping cart and checkout process',
                'Mobile Money (MTN & Airtel) integration',
                'Admin dashboard for inventory management',
                'Customer account management',
                'Order tracking system'
            ],
            technologies: 'HTML5, CSS3, JavaScript, PHP, MySQL, Payment Gateway API'
        },
        {
            id: 2,
            title: 'Taste of Uganda',
            category: 'Restaurant Website',
            imageText: 'Restaurant Site',
            description: 'Modern restaurant website with an interactive digital menu, online reservation system, and integration with delivery services for a popular Kampala restaurant.',
            features: [
                'Digital menu with high-quality food images',
                'Online table reservation system',
                'Location map and contact information',
                'Gallery of restaurant interior and dishes',
                'Customer reviews section',
                'Mobile-responsive design'
            ],
            technologies: 'HTML5, CSS3, JavaScript, WordPress, Google Maps API'
        },
        {
            id: 3,
            title: 'Prime Properties UG',
            category: 'Real Estate Listings',
            imageText: 'Real Estate',
            description: 'Property listing platform with advanced search filters, virtual tours, and agent management system for a real estate company.',
            features: [
                'Property search with filters (price, location, type)',
                'Image galleries for each property',
                'Agent profiles and contact forms',
                'Mortgage calculator',
                'Comparison tool for properties',
                'Mobile app integration'
            ],
            technologies: 'HTML5, CSS3, JavaScript, React, Node.js, MongoDB'
        },
        {
            id: 4,
            title: 'Uganda Daily News',
            category: 'News & Blog Platform',
            imageText: 'Blog Platform',
            description: 'Dynamic news and blog platform with content management system, category organization, and social sharing features.',
            features: [
                'Article publishing system',
                'Category and tag organization',
                'Author profiles',
                'Comment system',
                'Social media sharing',
                'Newsletter integration'
            ],
            technologies: 'HTML5, CSS3, JavaScript, WordPress, Custom Theme'
        },
        {
            id: 5,
            title: 'Excel Consulting',
            category: 'Corporate Business Site',
            imageText: 'Corporate Site',
            description: 'Professional corporate website for a consulting firm featuring service portfolios, team profiles, and client testimonials.',
            features: [
                'Service portfolio pages',
                'Team member profiles',
                'Case studies and success stories',
                'Contact and inquiry forms',
                'Resource library',
                'Client testimonials'
            ],
            technologies: 'HTML5, CSS3, JavaScript, Custom CMS'
        },
        {
            id: 6,
            title: 'TechMart Uganda',
            category: 'Electronics E-commerce',
            imageText: 'Tech Store',
            description: 'E-commerce platform for electronics and gadgets featuring product comparisons, tech specs, and secure checkout.',
            features: [
                'Product comparison tool',
                'Detailed tech specifications',
                'User reviews and ratings',
                'Wishlist functionality',
                'Secure payment gateway',
                'Order tracking'
            ],
            technologies: 'HTML5, CSS3, JavaScript, React, Payment Gateway, Inventory API'
        }
    ];
}

// ========== Add Smooth Transitions to Gallery Items ==========
function addGalleryTransitions() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        item.style.transitionDelay = `${index * 0.05}s`;
    });
}

// Initialize transitions
addGalleryTransitions();

// ========== Gallery Item Counter ==========
function updateGalleryCounter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(() => {
                const visibleItems = document.querySelectorAll('.gallery-item:not([style*="display: none"])').length;
                console.log(`Showing ${visibleItems} projects`);
            }, 350);
        });
    });
}

updateGalleryCounter();

// ========== Lazy Loading for Gallery Images (Optional Enhancement) ==========
function initLazyLoading() {
    const images = document.querySelectorAll('.placeholder-gallery-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Add loading animation
                img.style.animation = 'fadeIn 0.5s ease';
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0.5; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

initLazyLoading();
