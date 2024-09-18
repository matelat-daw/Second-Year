<?php
/* Child theme generated with WPS Child Theme Generator */

if (!function_exists('centralnews_theme_enqueue_styles')) {
    add_action('wp_enqueue_scripts', 'centralnews_theme_enqueue_styles');

    function centralnews_theme_enqueue_styles()
    {
        $min = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '.min';
        $parent_style = 'morenews-style';        
        wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/bootstrap/css/bootstrap' . $min . '.css');
        wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
        wp_enqueue_style(
            'centralnews',
            get_stylesheet_directory_uri() . '/style.css',
            array('bootstrap', $parent_style),
            wp_get_theme()->get('Version')
        );
    }
}

// Set up the WordPress core custom background feature.
add_theme_support('custom-background', apply_filters('morenews_custom_background_args', array(
    'default-color' => 'f5f5f5',
    'default-image' => '',
)));



function centralnews_override_morenews_header_section()
{
    remove_action('morenews_action_header_section', 'morenews_header_section', 40);
}

add_action('wp_loaded', 'centralnews_override_morenews_header_section');

function centralnews_header_section()
{

    $morenews_header_layout = morenews_get_option('header_layout');


?>

    <header id="masthead" class="<?php echo esc_attr($morenews_header_layout); ?> morenews-header">
        <?php morenews_get_block('layout-centered', 'header');  ?>
    </header>

    <!-- end slider-section -->
<?php
}

add_action('morenews_action_header_section', 'centralnews_header_section', 40);

function centralnews_filter_default_theme_options($defaults)
{
    $defaults['site_title_font_size'] = 72;
    $defaults['site_title_uppercase']  = 0;
    $defaults['header_layout'] = 'header-layout-centered';
    $defaults['aft_custom_title']           = __('Video', 'centralnews');       
    $defaults['secondary_color'] = '#BF0A30';
    $defaults['global_show_min_read'] = 'no';
    return $defaults;
}
add_filter('morenews_filter_default_theme_options', 'centralnews_filter_default_theme_options', 1);

