const COMMENT_DELETE_URL = "/comment/delete";

const onClickCommentDeleteBtn = async (commentPk, postPk) => {
  console.log(commentPk);
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  const { data } = await axios.post(COMMENT_DELETE_URL, {
    commentPk,
  });
  console.log(data);
  modify(data, postPk);
};
