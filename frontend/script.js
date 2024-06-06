function cliqueNoBotao() {
    const imagem = document.getElementById('imagem');
    if(imagem.style.displey==='none'){
        imagem.style.display='block'; // torna imagem visivel
    }else{
        imagem.style.display="none"; // oculta a imagem se já estiver visivel
    }
}
document.getElementById('meuBotão').addEventListener('click', cliqueNoBotao);