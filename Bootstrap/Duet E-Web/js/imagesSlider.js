// imagesSlider.js - Simple Working Version
$(document).ready(function() {
    console.log("Initializing image slider");
    
    // Create fullscreen overlay
    var fullscreenHTML = `
        <div class="fullScreen" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 99999; justify-content: center; align-items: center;">
            <i class="fas fa-chevron-left" id="prevIcon" style="position: absolute; left: 20px; color: white; font-size: 2rem; cursor: pointer; z-index: 100000;"></i>
            <img src="" id="maximizedImg" alt="" style="max-width: 90%; max-height: 90%;">
            <i class="fas fa-chevron-right" id="nextIcon" style="position: absolute; right: 20px; color: white; font-size: 2rem; cursor: pointer; z-index: 100000;"></i>
            <i class="fas fa-times" id="cancelIcon" style="position: absolute; top: 20px; right: 20px; color: white; font-size: 2rem; cursor: pointer; z-index: 100000;"></i>
        </div>
    `;
    
    $('body').append(fullscreenHTML);
    
    // Get all gallery images
    var galleryImages = $('.useSliderPlugin img');
    
    // Click event for gallery images
    galleryImages.on('click', function() {
        var imgSrc = $(this).attr('src');
        $('#maximizedImg').attr('src', imgSrc);
        $('.fullScreen').fadeIn(300).css('display', 'flex');
    });
    
    // Next button
    $('#nextIcon').on('click', function(e) {
        e.stopPropagation();
        var currentSrc = $('#maximizedImg').attr('src');
        var currentIndex = galleryImages.index(galleryImages.filter('[src="' + currentSrc + '"]'));
        var nextIndex = (currentIndex + 1) % galleryImages.length;
        var nextSrc = galleryImages.eq(nextIndex).attr('src');
        
        $('#maximizedImg').fadeOut(200, function() {
            $(this).attr('src', nextSrc).fadeIn(200);
        });
    });
    
    // Previous button
    $('#prevIcon').on('click', function(e) {
        e.stopPropagation();
        var currentSrc = $('#maximizedImg').attr('src');
        var currentIndex = galleryImages.index(galleryImages.filter('[src="' + currentSrc + '"]'));
        var prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        var prevSrc = galleryImages.eq(prevIndex).attr('src');
        
        $('#maximizedImg').fadeOut(200, function() {
            $(this).attr('src', prevSrc).fadeIn(200);
        });
    });
    
    // Close buttons
    $('#cancelIcon').on('click', function() {
        $('.fullScreen').fadeOut(300);
    });
    
    $('.fullScreen').on('click', function(e) {
        if (e.target === this) {
            $('.fullScreen').fadeOut(300);
        }
    });
    
    // ESC key to close
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $('.fullScreen').fadeOut(300);
        }
    });
});