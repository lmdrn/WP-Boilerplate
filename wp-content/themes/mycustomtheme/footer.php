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
    <div class="mycustomtheme">
        Fait avec le &#x1f499 par <a href="https://up-to-you.ch">Up to you</a>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
