<template>
    <div id="navigation">
        <h1 id="name-text"> {{ name }} </h1>
        <span id="title-text"> {{ title }} </span>
    </div>
</template>

<script>

    // import { mapState } from 'vuex';

    export default {
        name: "Navigation",
        props: ["name", "title"],
    }

</script>