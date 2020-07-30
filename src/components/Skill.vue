<template>
    <div>
        <h3>{{ skill.tech }}</h3>
        <span>{{ skill.progress }}</span>
    </div>
</template>

<script>

    export default {
        name: "Skill",
        props: ["skill"],
    }

</script>

<style lang="css">
    .dur {
        max-height: 30px;
    }
</style>