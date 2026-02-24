<?php get_header(); ?>
<?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>

<!-- TON CONTENU ICI -->

<?php endwhile; endif; ?>
<?php get_footer(); ?>
