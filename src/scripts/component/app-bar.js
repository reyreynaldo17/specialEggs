class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <div class="header">
    <div class="header_logo">
        <img src="../images/logo.png" alt="">
        <a href="#/home">SpecialEgg</a>
    </div>
    <button id="menu_toggle" class="menu_toggle" tabindex="0" aria-label="button to open side menu"><i class="fas fa-bars"></i></button>

    <nav id="drawer" class="header_nav">
        <ul class="nav_list">
            <li class="nav_item"><a href="#/home">Home</a></li>
            <li class="nav_item"><a href="#/favorite">Favorites</a></li>
            <li class="nav_item about_us"><a 
                target="_blank" 
                href="https://www.linkedin.com/in/reynaldo-suarez-wawan-45a878175?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4XuWpBGoQVuVOxHmfqC8tA%3D%3D"
                rel="noopener noreferrer">
                About Us</a>
            </li>
        </ul>
    </nav>  
</div>
    <section class="hero" id="hero">
        <div class="hero__inner">
            <h1 class="hero__title">SpecialEgg</h1>
            <p class="hero__tagline">Silahkan sarapan disini !</p>
        </div>
    </section>
    </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
