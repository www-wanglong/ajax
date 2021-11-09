<template>
  <Layout>
    <div>
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.content }}</p>
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    post (id: $id) {
      id,
      title,
      content
    }
  }
</page-query>

<script>
export default {
  name: 'PostPage',
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
  // metaInfo: {
  //   title:
  // }
}
</script>

<style>

</style>