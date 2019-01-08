<script>
import serviceStore from 'src/services/store';

console.log(serviceStore.init);

export default {
    data: function () {
        return { main: serviceStore.getData('main') }
    }
}

</script>


<template>
    <div id="mavigation">
        <div>

        </div>
        <div id="menu-right">

        </div>
        <div class="wrapper-img">
            <img :src="main.logoUrl" alt="logo">
        </div>
        <div id="menu-left">

        </div>
    </div>
</template>

<style lang="scss" scoped>
    #menu-top {
        position: fixed;
        top:0 ;
        width: 100%;
        border-bottom: 1px #ccc solid;
    }
</style>
