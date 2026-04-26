$(document).ready(function(){
    // Load preferences on page load
    loadPreferences();
    
    // Handle like/dislike button clicks
    $('.like-btn').click(function(e){
        e.preventDefault();
        
        const foodId = $(this).attr('data-food-id');
        
        if($(this).hasClass('like'))
        {
            $(this).removeClass('like');
            $(this).addClass('dislike');
            $(this).html('<i class="fa fa-thumbs-down"></i> Dislike');
            savePreference(foodId, 'dislike');
        }
        else
        {
            $(this).removeClass('dislike');
            $(this).addClass('like');
            $(this).html('<i class="fa fa-thumbs-up"></i> Like');
            savePreference(foodId, 'like');
        }
    });
});

// Save preference to localStorage
function savePreference(foodId, preference) {
    const preferences = JSON.parse(localStorage.getItem('foodPreferences')) || {};
    preferences[foodId] = preference;
    localStorage.setItem('foodPreferences', JSON.stringify(preferences));
}

// Load preferences from localStorage and apply them
function loadPreferences() {
    const preferences = JSON.parse(localStorage.getItem('foodPreferences')) || {};
    
    $.each(preferences, function(foodId, preference) {
        const $button = $('.like-btn[data-food-id="' + foodId + '"]');
        
        if(preference === 'dislike') {
            $button.removeClass('like');
            $button.addClass('dislike');
            $button.html('<i class="fa fa-thumbs-down"></i> Dislike');
        } else if(preference === 'like') {
            $button.removeClass('dislike');
            $button.addClass('like');
            $button.html('<i class="fa fa-thumbs-up"></i> Like');
        }
    });
}
