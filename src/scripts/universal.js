$(document).ready(function(){
    $('.Botao_Tema').click(function(){
        $('.Claro').toggleClass('Escuro');
        $('.Rodape').toggleClass('Rodape_Escuro');
        $('.Cabecalho').toggleClass('Cabecalho_Escuro');
        $('.hr-claro').toggleClass('hr-escuro');
    });
})