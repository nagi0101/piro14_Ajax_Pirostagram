const COMMENT_CREATE_URL = "/comment/create";

const onClickCommentCreateBtn = async (postPk) => {
  const textarea = document.querySelector(
    `#post-${postPk} .comment-input-container textarea`
  );
  const content = textarea.value;
  // axios의 request에 csrf token을 추가한다.
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  const { data } = await axios.post(COMMENT_CREATE_URL, {
    postPk,
    content,
  });
  // 최신의 comment data를 클라이언트 화면에 반영한다.
  modify(data, postPk);
  // 모든 작업이 끝나면 textarea를 공백으로 만들어준다.
  textarea.value = "";
};
