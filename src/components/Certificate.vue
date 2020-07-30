<template>
    <div>
        <h3>{{ certificate.title }}</h3>
        <span>{{ certificate.date }}</span>
        <div v-if="certificate.img">
            <img class="imgcert" v-bind:src="certificate.img" alt="certificate" />
        </div>
    </div>
</template>

<script>

    export default {
        name: "Certificate",
        props: ["certificate"],
    }

</script>

<style lang="css">
    .imgcert {
        max-height: 30px;
    }
</style>