export const getPost = async (postId: string) => {
  try {
    const response = await fetch(
      `https://api1.ayyam.net/v2/mobile_apis/posts_apis/posts-list.php?single_post_id=${postId}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      const result = await response.json();
      return result.data;
    }
  } catch (err) {
    console.error(err);
  }
};
