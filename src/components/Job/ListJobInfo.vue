<template>
    <div id="job-info">
        <JobInfo v-for="(job, id) in listJob" v-bind:key="id" v-bind:job="job.id"/>
    </div>
</template>

<script>
import JobInfo from './JobInfo.vue'
export default {
    props: {
        listJob: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    components: {
        JobInfo,
    }
}
</script>

<style>
</style>