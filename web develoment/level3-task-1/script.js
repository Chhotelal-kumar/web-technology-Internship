function openModal(imgElement) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'flex';
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}