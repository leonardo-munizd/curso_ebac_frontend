$(document).ready(function () {

    // Adicionar tarefa
    $('#botão-add').on('click',function(){
        var inputList = $('#input-tarefa').val();
        if (inputList.trim() !== '') {
            addTask(inputList);
            $('#input-tarefa').val('');
        }
    });
    // Função para adicionar tarefa
    function addTask(text){
        // Cria o item de lista com a tarefa
        var novoItem = $('<li><span class="remove-tarefa">&times;</span>' + text + '</li>');
        
        // Adiciona o item à lista e aplica o efeito de fade-in
        $('#nova-tarefa').append(novoItem.hide().fadeIn(800));
    }
    // Marcar/desmarcar tarefa como concluída
    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
     // Remover tarefa
    $(document).on('click', 'span', function (e) {
        e.stopPropagation(); // Evitar a propagação do evento para o elemento pai (li)
        $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    });
});