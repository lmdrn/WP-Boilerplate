<div>
    <?php
        wp_nav_menu([
            'theme_location' => 'footer',
            'container' => 'div',
            'menu_id' => false,
            'menu_class' => 'el__menu-footer',
            'depth' => 2,
            'fallback_cb' => 'bs4navwalker::fallback',
            'walker' => new bs4navwalker()
        ]);
    ?>
    <div class="digital_lab_theme">
		Fait avec amour par Lea.
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
