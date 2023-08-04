<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div style="height:100vh;background:#0445D1;">
        <div style="padding: 25%;" class="di__container-big">
            <h3 style="font-family: 'euclid_flex', Verdana, Arial, Helvetica, 'Helvetica Neue', Gotham, sans-serif;color: white; margin: 0 auto;text-align: center;">Bienvenue sur le thème UPTOYOU</h3>
        </div>
    </div>

<?php endwhile; endif; ?>

<?php get_footer(); ?>
