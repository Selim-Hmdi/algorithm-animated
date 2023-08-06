<template>
   <div>
    <HeaderTemplate></HeaderTemplate>
    <main>
        <router-view></router-view>
    </main>
    <FooterTemplate></FooterTemplate>
   </div>
</template>

<script>
import HeaderTemplate from "../layout/HeaderTemplate.vue";
import FooterTemplate from "../layout/FooterTemplate.vue";

export default {
    components: { 
        HeaderTemplate,
        FooterTemplate,
    }
};
</script>

<style scoped>
   
</style>