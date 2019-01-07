<template>
    <div id="cv-header" class="section row">
        <div id="picture" class="col-2">
            <img :src="getMedia(picture)" alt="me">
        </div>
        <div id="info" class="col-3">
             <p>{{name}}</p>
             <p>{{lastName}}</p>
        </div>
    </div>
</template>

<script>
import data from 'data/main';

export default {
    data: function() {
        return data
    }
}
</script>

