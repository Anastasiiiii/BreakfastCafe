if (typeof window !== 'undefined') {
    window.onload = function() {
        var input = document.getElementById("input");
        var comments = document.getElementById("comments");
        input.oninput = function() {
            comments.innerHTML = input.value;
        };
    };
}