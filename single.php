<?php get_header();?>

<main class="no-bad-days nbd-article">
    <?php if ( function_exists('yoast_breadcrumb') ) { yoast_breadcrumb( '<p id="breadcrumbs">','</p>' ); } ?>
    <article>
        <header>
            <h1><?php the_title();?></h1>
            <date><?php echo get_the_date();?></date>
        </header>
        <?php the_content();?>
    </article>
</main>

<?php get_footer();?>