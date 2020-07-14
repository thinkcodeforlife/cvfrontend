<template>
    <div>
        <h3>{{ project.title }}</h3>
        <span>{{ formatted_date }}</span>
        <p>{{ project.details }}</p>
        <ul>
            <li v-for="(item, x) in project.stack" :key="x">
                <div>{{ item }}</div>
            </li>
        </ul>
    </div>
</template>

<script>

    // import { mapState } from 'vuex';

    export default {
        name: "Project",
        props: ["project"],
        data: () => ({
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            // formatted_date: this.months[new Date(this.$props.project.date).getMonth()]
        }),
        computed: {
            formatted_date() {
                return  this.months[new Date(this.$props.project.date).getMonth()] + " " + new Date(this.$props.project.date).getFullYear()
            }
        }
    }

</script>