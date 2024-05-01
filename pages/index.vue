<template>
  <section>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-[80%]">
        <PrimaryArticle />
        <div class="flex mx-4 gap-4">
          <SecondaryArticle />
          <SecondaryArticle />
        </div>
      </div>
      <div class="flex flex-col m-4 lg:justify-between lg:my-2">
        <TertiaryArticle />
        <TertiaryArticle />
        <TertiaryArticle />
        <TertiaryArticle />
        <TertiaryArticle />
        <TertiaryArticle />
        <TertiaryArticle />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="ts"></style>
