/**
 * Web Space Uganda - Services Page JavaScript
 * Handles expand/collapse functionality for service details
 */

document.addEventListener('DOMContentLoaded', function() {
    initExpandButtons();
});

// ========== Expand/Collapse Service Details ==========
function initExpandButtons() {
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                const isActive = targetContent.classList.contains('active');
                
                if (isActive) {
                    targetContent.classList.remove('active');
                    this.textContent = 'Learn More';
                } else {
                    targetContent.classList.add('active');
                    this.textContent = 'Show Less';
                }
            }
        });
    });
}
