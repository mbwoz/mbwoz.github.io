<template>
  <header>
    <div class="title">How It Works - Search Engine</div>
    <nav>
      <RouterLink class="nav-item" active-class="nav-item-active" to="/title-search">
        Titles
      </RouterLink>
      <RouterLink class="nav-item" active-class="nav-item-active" to="/tag-search">
        Tags
      </RouterLink>
    </nav>
  </header>

  <div class="content">
    <RouterView />
  </div>

  <footer>copyright &copy; 2023</footer>
</template>

<style scoped>
header {
  margin-bottom: 60px;
}

header .title {
  color: var(--accent_color);
  font-size: 30pt;
  font-weight: 700;
  text-align: center;
  padding: 30px 0;
}

header nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
}

nav .nav-item {
  width: 200px;
  height: 45px;
  color: var(--accent_color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-item-active {
  box-shadow: 0 3px var(--accent_color);
}

.content {
  width: 65vw;
  margin: auto;
}

footer {
  width: 100vw;
  color: var(--accent_color);
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding: 20px;
}
</style>
