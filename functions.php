<?php
function my_theme_scripts_function() {
    wp_enqueue_script('pagina_inicial', get_template_directory_uri().'/js/pagina_inicial.js');
}
add_action('wp_enqueue_scripts', 'my_theme_scripts_function');

?>

