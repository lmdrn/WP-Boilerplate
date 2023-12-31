<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<header id="top-header">
    <nav id="navbar_top" class="navbar">
            <?php if (has_custom_logo()) :
                the_custom_logo();
            else :
                echo get_bloginfo('name');
            endif ?>

        <div class="burger-mobile">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="el__nav-bar">
            <?php
            wp_nav_menu([
                'theme_location' => 'top',
                'container' => 'div',
                'menu_id' => false,
                'depth' => 2,
                'fallback_cb' => 'bs4navwalker::fallback',
                'walker' => new bs4navwalker()
            ]);
            ?>
        </div>
    </nav>
</header>
