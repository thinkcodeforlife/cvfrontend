<template>
    <div id="aboutme">
        <p id="aboutme-text"> {{ aboutme }} </p>
    </div>
</template>

<script>

    // import { mapState } from 'vuex';

    export default {
        name: "Aboutme",
        props: ["aboutme"],
    }

</script>