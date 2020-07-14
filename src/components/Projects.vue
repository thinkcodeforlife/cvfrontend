<template>
    <div>
        <h1>Projects</h1>
        <hr>
        <ul>
            <li v-for="(project, x) in projects" :key="x">
                <Project v-bind:project="project" />
            </li>
        </ul>
    </div>
</template>

<script>

    import Project from "./Project.vue";

    // import { mapState } from 'vuex';

    export default {
        name: "Projects",
        props: ["projects"],
        components: {
            Project
        },
    }

</script>