<?php 

/**
 * Template Name: Page type xxx
 **/

get_header(); ?>

<?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>

 <!-- YOUR CONTENT HERE -->

<?php endwhile; endif; ?>

<?php get_footer(); ?>