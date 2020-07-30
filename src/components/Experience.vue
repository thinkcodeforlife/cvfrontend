<template>
    <div>
        <h3>{{ experience.title }}</h3>
        <span>{{ experience.date }}</span>
        <p>{{ experience.paragraph }}</p>
        <ul>
            <li v-for="(responsiblity, x) in experience.responsiblities" :key="x">
                {{ responsiblity }}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "Experience",
        props: ["experience"],
    }

</script>

<style lang="css">
    .du {
        max-height: 30px;
    }
</style>