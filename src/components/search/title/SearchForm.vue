<script setup lang="ts">
import CheckboxField from '@/components/form/CheckboxField.vue';
import TextInputField from '@/components/form/TextInputField.vue';

defineProps<{
  form: {
    searchText: string;
    includeTags: boolean;
  };
}>();
defineEmits<{
  (e: 'onSearchChange', event: Event): void;
  (e: 'onIncludeTags'): void;
}>();
</script>

<template>
  <div class="form">
    <TextInputField
      class="search-input"
      placeholder="nuclear power"
      :value="form.searchText"
      @on-input="(e) => $emit('onSearchChange', e)"
    />
    <CheckboxField
      class="tags-checkbox"
      :checked="form.includeTags"
      label="include tags"
      @on-change="$emit('onIncludeTags')"
    />
  </div>
</template>

<style scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.form .search-input {
  flex-grow: 3;
}

.form .tags-checkbox {
  flex-grow: 1;
}
</style>
