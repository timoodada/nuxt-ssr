<template>
  <div class="default-layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
export default {
  components: { Footer, Header },
};
</script>
<style>

</style>
