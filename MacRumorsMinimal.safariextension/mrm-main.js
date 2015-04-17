if (window.top === window) {
    var mrm_body = document.getElementsByTagName('body')[0];
    var mrm_contentContainer = document.getElementById('contentContainer');
    var mrm_mainContainer = document.getElementById('mainContainer');
    var mrm_header = document.getElementById('header');
    var mrm_shownav = document.createElement('a');
    
    mrm_shownav.id = 'mrm_shownav';
    document.body.insertBefore(mrm_shownav, document.body.firstChild);
    
    var contentOnclick = function() {
        mrm_shownav.click();
    };
    
    mrm_shownav.onclick = function() {
        if (mrm_body.className.indexOf('mrm-nav-shown') > -1) {
            mrm_body.className = mrm_body.className.replace('mrm-nav-shown', '');
            mrm_mainContainer.removeEventListener('click', contentOnclick);
        } else {
            mrm_body.className = 'mrm-nav-shown ' + mrm_body.className;
            mrm_mainContainer.addEventListener('click', contentOnclick);
        }
    };
}