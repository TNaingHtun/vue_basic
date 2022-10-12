export default {
    data() {
        return {
            book: []
        }
    },
    mounted() {
        console.log(this.$route.params.id);
    }
}