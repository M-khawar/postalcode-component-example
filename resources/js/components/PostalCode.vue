<template>
    <div class="input-group  input-group-merge mb-3">
        <input
            v-model="postalCode"
            type="text" class="form-control"
            id="postal_code" name="postal_code"
        />
    </div>
</template>

<script>
export default {
    name: "PostalCode",

    props: {
        modelValue: String,
    },

    data() {
        return {
            postalCode: null
        }
    },

    watch: {
        // watching prop
        modelValue: {
            handler: function (newValue) {
                if (newValue) {
                    this.postalCode = newValue;
                }
            },
            immediate: true,
        },

        // watching data() property
        postalCode: {
            handler: function (newValue, old) {
                this.$emit('update:modelValue', newValue)
            },
            immediate: true
        }
    }
}
</script>
