// Graphics viewer with modal and navigation
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('graphicModal');
  const modalImage = document.getElementById('graphicModalImage');
  const modalPDF = document.getElementById('graphicModalPDF');
  const modalTitle = document.getElementById('graphicModalTitle');
  const modalDesc = document.getElementById('graphicModalDesc');
  const modalDownload = document.getElementById('graphicModalDownload');
  const closeBtn = document.querySelector('.graphic-modal-close');
  const prevBtn = document.getElementById('prevGraphic');
  const nextBtn = document.getElementById('nextGraphic');
  
  let currentIndex = 0;
  let graphics = [];
  
  // Collect all graphics
  const graphicItems = document.querySelectorAll('.graphic-item');
  graphicItems.forEach((item, index) => {
    graphics.push({
      type: item.dataset.type,
      src: item.dataset.src,
      title: item.querySelector('h3')?.textContent || '',
      desc: item.querySelector('.graphic-info p')?.textContent || '',
      pages: item.dataset.pages || '1'
    });
  });
  
  // Open modal
  function openModal(index) {
    if (index < 0 || index >= graphics.length) return;
    
    currentIndex = index;
    const graphic = graphics[index];
    
    modalTitle.textContent = graphic.title;
    modalDesc.textContent = graphic.desc;
    modalDownload.href = graphic.src;
    
    if (graphic.type === 'pdf') {
      modalImage.style.display = 'none';
      modalPDF.style.display = 'block';
      modalPDF.src = graphic.src + '#view=FitH';
    } else {
      modalPDF.style.display = 'none';
      modalImage.style.display = 'block';
      modalImage.src = graphic.src;
      modalImage.alt = graphic.title;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Update navigation buttons
    prevBtn.style.display = graphics.length > 1 ? 'block' : 'none';
    nextBtn.style.display = graphics.length > 1 ? 'block' : 'none';
  }
  
  // Close modal
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalPDF.src = ''; // Clear PDF to stop loading
  }
  
  // Navigation
  function showPrev() {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : graphics.length - 1;
    openModal(newIndex);
  }
  
  function showNext() {
    const newIndex = currentIndex < graphics.length - 1 ? currentIndex + 1 : 0;
    openModal(newIndex);
  }
  
  // Event listeners
  graphicItems.forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
  });
  
  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);
  
  // Close on outside click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'flex') {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    }
  });
});
