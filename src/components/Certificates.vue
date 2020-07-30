<template>
    <div>
        <h1>Certificates</h1>
        <hr>
        <ul>
            <li v-for="(certificate, x) in certificates" :key="x">
                <Certificate v-bind:certificate="certificate" />
            </li>
        </ul>
    </div>
</template>

<script>

    import Certificate from "./Certificate.vue";

    export default {
        name: "Certificates",
        props: ["certificates"],
        components: {
            Certificate
        },
    }

</script>