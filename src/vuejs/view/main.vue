<script>

import Compagny from 'src/vuejs/components/compagny';
import HeaderCv from 'src/vuejs/components/header';
import Menu from 'src/vuejs/components/menu';

export default {
    components: {
        HeaderCv,
        Compagny,
        Menu
    },
}
</script>


<template>
    <div id="main-view" class="container">
        <Menu></Menu>
        <header-cv></header-cv>
        <Compagny></Compagny>
    </div>
</template>
