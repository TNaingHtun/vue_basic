import Header from "../../components/Header.vue"
import Second from "../../views/Second.vue"
import Content from "../../components/Content.vue"
import data from "../../assets/data.json"
export default {
    components: {
        Header,
        Second,
        Content
    },
    data() {
        return {
            books: []
        }
    },
    mounted() {
        this.books = data
    },
    methods: {
        showBookDetail(id) {
            this.$router.push({ name: "second", params: { id: id } });
        }
    }
}