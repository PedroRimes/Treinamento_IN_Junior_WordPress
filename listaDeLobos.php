<?php get_header(); ?>
    <section >
        <div class="supertextbox">
            <div class="textbox">
                <a href="">
                    <div class="lupinha">
                        <img src="./img/lupinhaSemFundo.png" width=40 height=40 href="">
                    </div>
                </a>
                <input type="text" id="search">
                <div class="containerlobos">
                    <a href="cadastro.html" class="maislobo">+ Lobos</a>
                </div>
            </div>
            <div class="textbox2">
                <div class="marker"></div>
                <div class="verlobinhos">Ver lobinhos adotados</div>
            </div>
        </div>
    </section>
    <section id="entrada-dados">
        
        
    </section>
    <script src="./js/lista_lobos.js"></script>
    <?php wp_enqueue_scripts();?>
</body>
<div class="divisao-degrade"></div>
<?php get_footer(); ?>