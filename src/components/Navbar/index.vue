<template>
        <header id="header-container" class="fullwidth">
      
        <!-- Header -->
        <div id="header">
          <div class="">
            
            <!-- Left Side Content -->
            <div class="left-side">
              
              <!-- Logo -->
              <div id="logo">
                <a href="Home.html">
                  <img src="img/logo.png" alt="main-img" class="hide-on-mobile">
                  <img src="img/logo-mobile.png" alt="mobile-img" class="hide-on-desktop">
                </a>
              </div>

              <div class="drawer drawer--left">
                <header role="banner">
                <button type="button" class="drawer-toggle drawer-hamburger">
                  <span class="sr-only">toggle navigation</span>
                  <span class="drawer-hamburger-icon"></span>
                </button>
                <nav class="drawer-nav" role="navigation">
                  <ul class="drawer-menu">
                    <li class="menu-item ">
                      <a class="menu-item-link " href="publish.html" data-title="Newsfeed">
                      <i class="fa fa-bullhorn"></i>
                      Publish    
                    </a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="Home.html" data-title="Members">
                      <i class="fa fa-home"></i>
                      Home</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="profile.html" data-title="Groups">
                      <i class="fa fa-user-o"></i>
                        Profile</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="messages.html" data-title="Badges">
                      <i class="fa fa-comment-o"></i>
                      Message</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="notification.html" data-title="Quests">
                      <i class="fa fa-bell-o"></i>
                      Notification</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="bookmarks.html" data-title="Ranks">
                      <i class="fa fa-bookmark-o"></i>
                      Bookmarks</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="counselme.html" data-title="Credits">
                      <i class="fa fa-envelope-o"></i>
                      Counsel Me</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="settings.html" data-title="Blog">
                      <i class="fa fa-cog"></i>
                      Settings</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="help.html" data-title="Blog">
                      <i class="fa fa-question"></i>
                      Help</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link " href="#" data-title="Blog">
                      <i class="fa fa-commenting-o"></i>
                      Feedback</a>
                    </li>
                    <li class="menu-item ">
                      <a class="menu-item-link" data-title="Blog">
                      <i class="fa fa-sign-out"></i>
                      Logout</a>
                    </li>
                  </ul>
                </nav>
              </header>
            </div> 

            <div class="clearfix"></div>
          </div>
            <!-- Left Side Content / End -->
      

          <div class="center-side">
            <div id="search-form">
              <div class="search-form-wrap" style="position: relative;">
                <div class="interactive-input dark">
                  <form class="form" method="get" action="#">
                    <input type="text" name="s" placeholder="Search" value="">
                    <button style="display: none;"></button>
                  </form>
                  <div class="interactive-input-icon-wrap">
                    <i class="fa fa-search"></i>
                  </div>
                </div>
                </div>
            </div>
          </div>

      
            <!-- Right Side Content / End -->
            <div class="right-side">
              
            
              <!--  User Notifications -->
              <div class="header-widget hide-on-mobile">
                
                <!-- Notifications -->
                <div class="header-notifications">
      
                  <!-- Trigger -->
                  <div class="header-notifications-trigger">
                    <a href="#"><i class="fa fa-bell-o"></i><span>4</span></a>
                  </div>
      
                  <!-- Dropdown -->
                  <div class="header-notifications-dropdown">
      
                    <div class="header-notifications-headline">
                      <h4>Notifications</h4>
                    </div>
      
                    <div class="header-notifications-content">
                      <div class="header-notifications-scroll" data-simplebar>
                        <ul>
                          <!-- Notification -->
                          <li class="notifications-not-read">
                            <a href="#">
                              <span class="notification-icon"><i class="icon-material-outline-group"></i></span>
                              <span class="notification-text">
                                <strong>Michael Shannah</strong> applied for a job <span class="color">Full Stack Software Engineer</span>
                              </span>
                            </a>
                          </li>
      
                          <!-- Notification -->
                          <li>
                            <a href="#">
                              <span class="notification-icon"><i class=" icon-material-outline-gavel"></i></span>
                              <span class="notification-text">
                                <strong>Gilbert Allanis</strong> placed a bid on your <span class="color">iOS App Development</span> project
                              </span>
                            </a>
                          </li>
      
                          <!-- Notification -->
                          <li>
                            <a href="#">
                              <span class="notification-icon"><i class="icon-material-outline-autorenew"></i></span>
                              <span class="notification-text">
                                Your job listing <span class="color">Full Stack PHP Developer</span> is expiring.
                              </span>
                            </a>
                          </li>
      
                          <!-- Notification -->
                          <li>
                            <a href="#">
                              <span class="notification-icon"><i class="icon-material-outline-group"></i></span>
                              <span class="notification-text">
                                <strong>Sindy Forrest</strong> applied for a job <span class="color">Full Stack Software Engineer</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
      
                  </div>
      
                </div>
                
                <!-- Messages -->
                <div class="header-notifications">
                  <div class="header-notifications-trigger">
                    <a href="#"><i class="fa fa-envelope-o"></i><span>3</span></a>
                  </div>
      
                  <!-- Dropdown -->
                  <div class="header-notifications-dropdown">
      
                    <div class="header-notifications-headline">
                      <h4>Messages</h4>
                    </div>
      
                    <div class="header-notifications-content">
                      <div class="header-notifications-scroll" data-simplebar>
                        <ul>
                          <!-- Notification -->
                          <li class="notifications-not-read">
                            <a href="#">
                              <span class="notification-avatar status-online"><img src="img/user-avatar-small-02.jpg" alt=""></span>
                              <div class="notification-text">
                                <strong>David Peterson</strong>
                                <p class="notification-msg-text">Thanks for reaching out. I'm quite busy right now on many...</p>
                                <span class="color">4 hours ago</span>
                              </div>
                            </a>
                          </li>
      
                          <!-- Notification -->
                          <li class="notifications-not-read">
                            <a href="#">
                              <span class="notification-avatar status-offline"><img src="img/user-avatar-small-02.jpg" alt=""></span>
                              <div class="notification-text">
                                <strong>Sindy Forest</strong>
                                <p class="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on vacation until...</p>
                                <span class="color">Yesterday</span>
                              </div>
                            </a>
                          </li>
      
                          <!-- Notification -->
                          <li class="notifications-not-read">
                            <a href="#">
                              <span class="notification-avatar status-online"><img src="img/user-avatar-small-02.jpg" alt=""></span>
                              <div class="notification-text">
                                <strong>Marcin Kowalski</strong>
                                <p class="notification-msg-text">I received payment. Thanks for cooperation!</p>
                                <span class="color">Yesterday</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
      
                    <a href="messages.html" class="header-notifications-button ripple-effect button-sliding-icon">View All Messages<i class="icon-material-outline-arrow-right-alt"></i></a>
                  </div>
                </div>
      
              </div>
              <!--  User Notifications / End -->
      
              <!-- User Menu -->
              <div class="header-widget hide-on-mobile">
      
                    <a href="profile.html" class="profile-user">
                      <div class="user-avatar status-online">
                        <img src="img/profile.png" alt="">
                      </div>
                  </a>
              </div>
              <!-- User Menu / End -->
      
      
            </div>
            <!-- Right Side Content / End -->
      
          </div>
        </div>
        <!-- Header / End -->
      </header>
      
</template>

<script>
export default {

}
</script>

<style>

</style>