document.addEventListener('DOMContentLoaded', function() {
    let comments = [];
    commentsStay()
  
    document.getElementById('comment-add').onclick = function() {
      event.preventDefault();
      let commentName = document.getElementById('comment-name');
      let feedback = document.getElementById('feedback');
  
      let comment = {
        name: commentName.value,
        feedback: feedback.value,
        time: Math.floor(Date.now() / 1000)
      }
      

      commentName.value = '';
      feedback.value = '';
      comments.push(comment);

      console.log(comment);
      saveComments();
      showComments();
    }

    function saveComments() {
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function commentsStay() {
        if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
        showComments();
    }

    function showComments() {
        let commentField = document.getElementById('comment-field');
        let out = '';
        comments.forEach(function(item){
            out += `<p class = "text-right small"><em>${timeConverter(item.time)}</em></p>`;
            out += `<p class = "alert alert-primary"><b>${item.name}</b><br>${item.feedback}</p>`;
        }) 
        commentField.innerHTML = out;
    }
    function timeConverter(UNIX_timestamp){
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
  });