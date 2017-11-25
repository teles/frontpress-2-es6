const PostAdapter = (postData) => {
    return {
      id: postData.id,
      title: postData.title.rendered,
      featuredMediaId: postData.featured_media,
      authorId: postData.author,
      format: postData.format,
      date: postData.date,
      slug: postData.slug,
      tagsIds: postData.tags,
      categoriesIds: postData.categories,
      content: postData.content,
      excerpt: postData.excerpt
  }
};
export default PostAdapter;
