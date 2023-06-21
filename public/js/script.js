document.addEventListener('DOMContentLoaded', function() {
    showComments();
    function showComments() {
        let commentField = document.getElementById('comment-field');
        let out = '';
        comments.forEach(function(item, index) {
            out += `<div class="alert alert-primary alert-dismissible fade show" role="alert">
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0"><b>${item.name}</b></p>
                            <p class="mb-0 text-right small"><em>${timeConverter(item.time)}</em></p>
                        </div>
                        <button type="button" class="close delete-button" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <p>${item.feedback}</p>
                    </div>`;
        });
        commentField.innerHTML = out;
        deleteComments();
    }
});



if (typeof window !== 'undefined') {
    window.onload = function() {
        var input = document.getElementById("input");
        var comments = document.getElementById("comments");
        input.oninput = function() {
            comments.innerHTML = input.value;
        };
    };
}