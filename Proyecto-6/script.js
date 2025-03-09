const commentForm = document.getElementById('comment-form');
const commentText = document.getElementById('comment-text');
const commentsList = document.getElementById('comments-list');

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = commentText.value.trim();
    if (comment) {
        addComment(comment);
        commentText.value = '';
    }
});

function addComment(comment) {
    const now = new Date();
    const dateTime = now.toLocaleString();
    const commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `
        <div class="comment-content">
            <p>${comment}</p>
            <p class="comment-meta">${dateTime}</p>
        </div>
        <div>
            <button class="delete-button">Eliminar</button>
        </div>
    `;
    commentsList.appendChild(commentItem);

    const deleteButton = commentItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        commentItem.remove();
    });
}