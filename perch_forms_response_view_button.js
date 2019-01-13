var pageUrl = window.location.href;

if(pageUrl.includes('addons/apps/perch_forms/responses')) {
    var deleteBtns = document.querySelectorAll('.main-panel table .button.button-small.action-alert');
    
    var perchPath = '/perch';
    var detailURL = perchPath + '/addons/apps/perch_forms/responses/detail/';
    
    if(deleteBtns.length > 0) {
        deleteBtns.forEach(element => {
            // get ID from delete button
            var responseID = element.dataset.id;
        
            var parent = element.closest('td');
            parent.insertAdjacentHTML('beforebegin', '<td><a class="button button-small action-info" href="' + detailURL + '?id='+ responseID +'">View Response</a></td>');
        });
    } else {
        // if delete btn doesn't exist (e.g. user has no permission to delete)
        var responses = document.querySelectorAll('.main-panel table td[data-label="Response"]');
        responses.forEach(element => {
            // get ID from link
            var responseIdHTML = element.querySelector('a').innerHTML;
            var responseID = responseIdHTML.replace('# ','');

            var parent = element.closest('tr');
            parent.insertAdjacentHTML('beforeend', '<td><a class="button button-small action-info" href="' + detailURL + '?id='+ responseID +'">View Response</a></td>');
        });
    }
    
    
    var thead = document.querySelector('.main-panel table thead tr');
    thead.insertAdjacentHTML('beforeend', '<th class="action"></th>');
}