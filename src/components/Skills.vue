<template>
    <div>
        <h1>Skills</h1>
        <hr>
        <ul>
            <li v-for="(skill, x) in skills" :key="x">
                <Skill v-bind:skill="skill" />
            </li>
        </ul>
    </div>
</template>

<script>

    import Skill from "./Skill.vue";

    export default {
        name: "Skills",
        props: ["skills"],
        components: {
            Skill
        },
    }

</script>