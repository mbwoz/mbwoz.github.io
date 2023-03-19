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

  <footer></footer>
</template>

<style scoped>
header {
  margin-bottom: 60px;
}

header .title {
  color: var(--accent_color);
  font-size: 30pt;
  font-weight: 700;
  padding: 30px 0;
  text-align: center;
}

header nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding-bottom: 20px;
}

nav .nav-item {
  align-items: center;
  color: var(--accent_color);
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  width: 200px;
}

.nav-item-active {
  box-shadow: 0 3px var(--accent_color);
}

.content {
  margin: auto;
  width: 65vw;
}

footer {
  align-items: center;
  color: var(--accent_color);
  display: flex;
  justify-content: center;
  margin-top: 60px;
  opacity: 0.5;
  padding: 20px;
  width: 100vw;
}
</style>
