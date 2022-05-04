<template>
    <form>
        <div class="mb-3">
            <label class="form-label">Email address</label>
            <postal-code v-model="postalCode"/>
        </div>
    </form>
</template>

<script>
import PostalCode from "@/components/PostalCode";

export default {
    name: "ParentComponent",

    components: {
        PostalCode
    },

    data(){
        return {
            postalCode: "23232",
        }
    }
}
</script>

<style scoped>

</style>
