<template>
  <div class="container">
    <Header title-name="Header Test"/>
    <div class="text-center justify-content-around first-ojt-content">
      <Content 
      v-for="(book, index) in books.length"
      :key="book.id"
      :index= index
      :names="books.map(a => a.title)"
      />
    </div>
    <Footer />
  </div>
</template>
<style scoped>
@import "../assets/css/views/first-ojt-content.css";
</style>
<script src="../services/views/first-ojt-content.js">
</script>
