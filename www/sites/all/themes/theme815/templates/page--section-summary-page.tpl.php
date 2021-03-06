<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/garland.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content_top']: Items for the header region.
 * - $page['content']: The main content of the current page.
 * - $page['content_bottom']: Items for the header region.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>

<div id="page-wrapper">

    <div id="page">

        <div class="main-bg">
            <header id="header" role="banner" class="clearfix">
              <div id="header-top">
                  <div id="header-lists-container">
                        <div id="header-lists">
                            
                            <ul id="global-list">
                                <li class="menu-dash"></li>
                                <!--<li id="language" class="more-action">
                                    <a href="#">FRANÇAIS</a>
                                    <div class="small sub-menu">
                                        <section>
                                            <ul>
                                                <li><a href="http://www.mandarinoriental.com/paris/">ENGLISH</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </li>-->
                                <li class="book-stay didot-reg"><a onclick="#" id="BookMyStay" class="loader-button" href="#">Book</a></li>

                            </ul>
                        </div> <!-- end of #header-lists -->
                    </div> 
                </div>
                <div class="container-12">
                         
                    <div class="grid-12">
                        <div class="section-1 clearfix">
                            <div class="col1">
                                <?php if ($logo): ?>
                                    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
                                        <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                                    </a>
                                <?php endif; ?>
                            
                                <?php if ($site_name || $site_slogan): ?>
                                    <div id="name-and-slogan">
                                      <?php if ($site_name): ?>
                                        <?php if ($title): ?>
                                          <div id="site-name">
                                            <strong><a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a></strong>
                                          </div><!-- /#site-name -->
                                        <?php else: /* Use h1 when the content title is empty */ ?>
                                          <h1 id="site-name">
                                            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><span><?php print $site_name; ?></span></a>
                                          </h1>
                                        <?php endif; ?>
                                      <?php endif; ?>
                                    
                                      <?php if ($site_slogan): ?>
                                        <div id="site-slogan"><?php print $site_slogan; ?></div>
                                      <?php endif; ?>
                                    </div><!-- /#name-and-slogan -->
                                <?php endif; ?>
                            </div>
                            
                            <div class="col2">
                                <?php if ($page['menu']): ?>
                                    <div class="section-3 clearfix">
                                        <?php print render($page['menu']); ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <?php if ($page['header']): ?>
                    <div class="section-2 clearfix">
                        <?php print render($page['header']); ?>
                    </div>
                <?php endif; ?>
                
                    
            </header><!-- /#header -->
            
            <?php if (!$is_front): ?>

                <div id="main-wrapper">
                    <div id="level2-banner" class="block">
                                <div class="flexslider">
                                      <ul>
                                            <li class="" style="width: 100%; float: left; margin-right: -100%; position: relative;">  
                                              <div>        
                                                    <div>
                                                        <?php 
                                                $images = field_get_items('node',$node, 'field_image');
                                                 if(!empty($images)) {
                                                   
                                                   $image = field_view_value('node', $node, 'field_image', $images[0], array( 'type' => 'image' )); 
                                                 }

                                            ?>

                                                        <?php print render($image); ?>

                                                        <div id="promo-wrap">
                                                <div class="promo">
                                                    <section>
                                                        <?php if ($title): ?>
                                                        <h1 class="type"><?php print $title; ?></h1>
                                                        <?php endif; ?>
                                                        <h2>
                                                        <?php 
                                                            $subtitle = field_get_items('node',$node, 'field_subtitle');
                                                            print $subtitle[0]['value']; 
                                                        ?>
                                                        </h2>
                                                        <div class="rtf">
                                                            <?php 
                                                            $body = field_get_items('node',$node, 'body');
                                                            print $body[0]['value']; 
                                                            ?>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>

                                                    </div>  
                                                </div>
                                            </li>
                                            
                       
                                        </ul>
                                </div>
                        
                         
                      

                    </div>
                    
                    <div class="container-12">
                    <div class="grid-12">
 
                                
                        <div id="main" class="clearfix">
                            
                            <?php if ($page['sidebar_first_wide']): ?>
                                <aside id="sidebar-first-wide" class="column column_left grid-4 alpha" role="complementary">
                                    <div class="section">
                                        <?php print render($page['sidebar_first_wide']); ?>
                                    </div>
                                </aside>
                            <?php endif; ?>
            
                            <?php if ($page['sidebar_first_narrow']): ?>
                                <aside id="sidebar-first-narrow" class="column column_left grid-3 alpha" role="complementary">
                                    <div class="section">
                                        <?php print render($page['sidebar_first_narrow']); ?>
                                    </div>
                                </aside>
                            <?php endif; ?>
            
            
            
                                
                            <?php if ($page['sidebar_second_wide']): ?>
                                <aside id="sidebar-second-wide" class="column column_right grid-4 omega" role="complementary">
                                    <div class="section">
                                        <?php print render($page['sidebar_second_wide']); ?>
                                    </div>
                                </aside>
                            <?php endif; ?>
            
                            <?php if ($page['sidebar_second_narrow']): ?>
                                <aside id="sidebar-second-narrow" class="column column_right grid-3 omega" role="complementary">
                                    <div class="section">
                                        <?php print render($page['sidebar_second_narrow']); ?>
                                    </div>
                                </aside>
                            <?php endif; ?>
            
            
            
                          
                            <div id="content" class="column" role="main">
                                <div class="section">
                                
                                    <?php if ($breadcrumb): ?>
                                        <div id="breadcrumb" class="clearfix"><?php print $breadcrumb; ?></div>
                                    <?php endif; ?>
                                    
                                    <?php if ($messages): ?>
                                        <div id="messages"><div class="section clearfix">
                                          <?php print $messages; ?>
                                        </div></div> <!-- /.section, /#messages -->
                                      <?php endif; ?>
                                    
                                    <?php print render($title_prefix); ?>
                                    
                                    
                                    
                                    
                                    
                                    <?php print render($title_suffix); ?>
                                    
                                    <?php if ($tabs): ?>
                                      <div class="tabs"><?php print render($tabs); ?></div>
                                    <?php endif; ?>
                                    
                                    <?php print render($page['help']); ?>
                                    
                                    <?php if ($action_links): ?>
                                      <ul class="action-links"><?php print render($action_links); ?></ul>
                                    <?php endif; ?>
                                    <?php print render($page['content']); ?>
                                    
                                
                                </div>
                            </div>
                        </div><!-- /#main -->
                                
                        <?php if ($page['content_bottom']): ?>
                            <?php print render($page['content_bottom']); ?>
                        <?php endif; ?>
                    </div>
                </div>
            
            </div>
            <?php endif; ?>
        </div>
        
        <footer id="footer" role="contentinfo">

            <div class="footer-top-2-wrapper clearfix">
                <div class="container-12">
                    <div class="grid-12">
                        <?php if ($page['footer_top_2']): ?>
                            <?php print render($page['footer_top_2']); ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <div class="footer-wrapper clearfix">
                <div class="container-12">
                    <div class="grid-12">
                        <?php print render($page['footer']); ?>
                    </div>
                </div>
            </div>
        </footer>

    </div><!-- /#page -->
</div><!-- /#page-wrapper -->