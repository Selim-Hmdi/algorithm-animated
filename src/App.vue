<template>
  <div>
    <HeaderTemplate></HeaderTemplate>
    <MainViewPage></MainViewPage>
    <FooterTemplate></FooterTemplate>
  </div>
</template>

<script>
import HeaderTemplate from "./components/layout/HeaderTemplate.vue";
import FooterTemplate from "./components/layout/FooterTemplate.vue";
import MainViewPage from "./components/view/MainViewPage.vue";


export default {
    name: "App",
    components: {
        FooterTemplate,
        HeaderTemplate,
        MainViewPage,
    }
};
</script> 

<style>

</style>
