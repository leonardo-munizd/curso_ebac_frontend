document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtém os valores dos campos
  const campoA = parseFloat(document.getElementById('campoA').value);
  const campoB = parseFloat(document.getElementById('campoB').value);

  // Obtém a div da mensagem
  const messageDiv = document.getElementById('message');

  // Valida o formulário
  if (campoB > campoA) {
      messageDiv.textContent = 'O formulário é válido! Campo B é maior que Campo A.';
      messageDiv.className = 'message success';
  } else {
      messageDiv.textContent = 'O formulário é inválido! Campo B deve ser maior que Campo A.';
      messageDiv.className = 'message error';
  }
});