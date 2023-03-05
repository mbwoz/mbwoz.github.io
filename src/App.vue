<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <RouterLink to="/title-search">Search by Title</RouterLink>
      <RouterLink to="/tag-search">Search by Tags</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
