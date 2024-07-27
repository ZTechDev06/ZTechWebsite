function fetchReadme() {
    var user = 'ZTechDev06';
    var repo = 'ZTechDev06';
    var readmeURL = 'https://api.github.com/repos/' + user + '/' + repo + '/readme';
    
    // Display loading message
    $(".info-wrapper").html('<p>In Making...</p>');
    
    $.get(readmeURL, function(data) {
        var readmeContent = atob(data.content);
        var readmeHTML = marked.parse(readmeContent);
        $(".info-wrapper").html('<div class="repo-readme-wrapper"><h2><p align="center">' + repo + '</h2>' + readmeHTML + '</div>');
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Error fetching README.md:", textStatus, errorThrown); // Log the error
        $(".info-wrapper").html('<p>Failed to fetch README.md for ' + repo + '.</p>');
    });
}

$(document).ready(function() {
    fetchReadme();
});
