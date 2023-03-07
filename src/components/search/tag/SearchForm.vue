<script setup lang="ts">
import SelectField from '@/components/form/SelectField.vue';
import SubmitButton from '@/components/form/SubmitButton.vue';
import RemovableTag from '@/components/search/tag/RemovableTag.vue';
import { type Ref, ref } from 'vue';

const props = defineProps<{
  form: { selectedTags: ReadonlyArray<string> };
  tags: ReadonlyArray<string>;
}>();
const emit = defineEmits<{
  (e: 'addTag', tag: string): void;
  (e: 'removeTag', tag: string): void;
}>();

const selectedTag: Ref<string> = ref('');

const updateSelectedTag = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  selectedTag.value = target.value;
};

const addTag = () => {
  const tag = selectedTag.value;
  if (tag !== '' && props.form.selectedTags.indexOf(tag) === -1) {
    selectedTag.value = '';
    emit('addTag', tag);
  }
};
</script>

<template>
  <div>
    <div class="form">
      <div class="tag-select">
        <SelectField :selected="selectedTag" :options="tags" @on-change="updateSelectedTag" />
      </div>
      <div class="tag-submit">
        <SubmitButton label="Add tag" @on-click="addTag" />
      </div>
    </div>
    <div :class="['tags', form.selectedTags.length > 0 ? 'tags-non-empty' : '']">
      <RemovableTag
        v-for="tag in form.selectedTags"
        :key="tag"
        :tag="tag"
        @remove-tag="(tag) => $emit('removeTag', tag)"
      />
    </div>
  </div>
</template>

<style scoped>
.form {
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.form .tag-select {
  flex-grow: 5;
}

.form .tag-submit {
  flex-grow: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tags-non-empty {
  margin-top: 20px;
}
</style>
