<template>
  <main class="authors page">
    <section class="container mx-auto p-4">
      <h1 class="text-2xl mb-8">Authors</h1>

      <div class="grid md:grid-cols-3 gap-4">
        <!-- Author card -->
      </div>
    </section>
  </main>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup () {
    const store = useStore()

    const authors = computed(() => store.getters.authors)

    onMounted(() => {
      store.dispatch('FetchAuthors')
    })

    return {
      authors
    }
  }
}
</script>