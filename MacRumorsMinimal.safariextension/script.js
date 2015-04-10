if (window.top === window) {
    init();
}

function init() {
    $('#contentContainer').append($('<div id="MRM_right" />'));
    $('#MRM_right').append($('#header, #navContainer, #secondaryNav'));
    $('#header, #navContainer, #secondaryNav').addClass('MRMshow');
    $('#nav li:last-child').after('<li><a href="http://www.macrumors.com/archive">Archives</a></li>');
}