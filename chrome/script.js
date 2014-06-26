if (window.top === window) {
    init();
}

function init() {
    $('#contentContainer').append($('<div id="MRM_right" />'));
    $('#MRM_right').append($('#header, #navContainer, #secondaryNav'));
    $('#header, #navContainer, #secondaryNav').addClass('MRMshow');
    $('#nav li:last-child').after('<li><a href="http://www.macrumors.com/archive">Archives</a></li>');
    $('#header #logo a').css({
        'background-image': 'url(' + chrome.extension.getURL('img/mrlogo.gif') + ')',
        'background-repeat': 'no-repeat'
    });
    $('.article .footer .comments a, .article.blog .footer .comments a').each(function() {
        $(this).css({
            'background-image': 'url(' + chrome.extension.getURL('img/comment.png') + ')',
            'background-repeat': 'no-repeat',
            'background-position': 'center left'
        });
    });
}