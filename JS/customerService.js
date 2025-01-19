const imageInput = document.getElementById('images');
const imagePreview = document.getElementById('image-preview');
const maxImages = 3;

imageInput.addEventListener('change', function (e) {
    imagePreview.innerHTML = '';
    const files = Array.from(e.target.files);

    if (files.length > maxImages) {
        alert(`Please select a maximum of ${maxImages} images.`);
        imageInput.value = '';
        return;
    }

    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const preview = document.createElement('div');
                preview.className = 'preview-item';
                preview.innerHTML = `
                            <img src="${e.target.result}" alt="Preview">
                            <button type="button" class="remove-image">×</button>
                        `;
                imagePreview.appendChild(preview);

                preview.querySelector('.remove-image').addEventListener('click', function () {
                    preview.remove();
                });
            };
            reader.readAsDataURL(file);
        }
    });
});

document.querySelector('.complaint-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your feedback. We will get back to you soon!');
    this.reset();
    imagePreview.innerHTML = '';
});