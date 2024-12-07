function triggerFileInput() {
  document.getElementById('fileInput').click();
}

function displayFileName() {
  const fileInput = document.getElementById('fileInput');
  const fileNameDisplay = document.getElementById('fileNameDisplay');
  const contentArea = document.getElementById('contentArea');

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    fileNameDisplay.textContent = file.name;

    const reader = new FileReader();

    // Определяем, что делать после завершения чтения файла
    reader.onload = function(event) {
      contentArea.value = event.target.result; // Записываем содержимое файла в текстовое поле
    };

    // Читаем файл как текст
    reader.readAsText(file);
  } else {
    fileNameDisplay.textContent = 'Файл не выбран';
    contentArea.value = ''; // Очищаем текстовое поле, если файл не выбран
  }
}
