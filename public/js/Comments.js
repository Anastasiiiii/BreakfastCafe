document.addEventListener('DOMContentLoaded', function() {
    let comments = [];
    commentsStay();

    document.getElementById('comment-add').onclick = function(event) {
        event.preventDefault();
        let commentName = document.getElementById('comment-name');
        let feedback = document.getElementById('feedback');

        let comment = {
            name: commentName.value,
            feedback: feedback.value,
            time: Math.floor(Date.now() / 1000)
        };
        commentName.value = '';
        feedback.value = '';
        comments.push(comment);

        console.log(comment);
        saveComments();
        showComments();
    };

    function saveComments() {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function commentsStay() {
        if (localStorage.getItem('comments')) {
            comments = JSON.parse(localStorage.getItem('comments'));
        }
        showComments();
    }

    function deleteComments() {
        const deleteButtons = document.getElementsByClassName('delete-button');
        for (let i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].onclick = function() {
                comments.splice(i, 1);
                saveComments();
                showComments();
            };
        }
    }

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

    function timeConverter(UNIX_timestamp) {
        const a = new Date(UNIX_timestamp * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        const minute = a.getMinutes();
        const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + minute;
        return time;
    }

    deleteComments();
});