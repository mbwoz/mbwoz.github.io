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
  <div>
    <TextInputField :value="form.searchText" @on-input="(e) => $emit('onSearchChange', e)" />
    <CheckboxField
      :checked="form.includeTags"
      label="include tags"
      @on-change="$emit('onIncludeTags')"
    />
  </div>
</template>
