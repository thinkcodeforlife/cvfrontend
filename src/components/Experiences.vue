<template>
    <div>
        <h1>Experiences</h1>
        <hr>
        <ul>
            <li v-for="(experience, x) in experiences" :key="x">
                <Experience v-bind:experience="experience" />
            </li>
        </ul>
    </div>
</template>

<script>

    import Experience from "./Experience.vue";

    export default {
        name: "Experiences",
        props: ["experiences"],
        components: {
            Experience
        },
    }

</script>