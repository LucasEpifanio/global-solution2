document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('newcomment__form');
  const commentContainer = document.getElementById('comment-container');
  const resetButton = document.getElementById('reset-button');
  const avatarInput = document.getElementById('avatar-input');
  const avatarPreview = document.getElementById('avatar-preview');

  avatarInput.addEventListener('change', function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        avatarPreview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const avatar = avatarPreview.src;
    const comment = document.getElementById('comment-input').value;

    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `
      <img class="avatar" src="${avatar}" alt="Avatar">
      <p><strong>${name}</strong> (${email})</p>
      <p>${comment}</p>
    `;

    commentContainer.appendChild(newComment);

    form.reset();
    avatarPreview.src = "./assets/file-import.svg";
    // Clear the file input value
    avatarInput.value = "";
  });

  resetButton.addEventListener('click', function () {
    form.reset();
    avatarPreview.src = "./assets/file-import.svg";
    // Clear the file input value
    avatarInput.value = "";
    
    // Manually trigger the change event for the file input
    const event = new Event('change');
    avatarInput.dispatchEvent(event);
  });
});






  