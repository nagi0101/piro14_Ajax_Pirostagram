const POST_LIKE_URL = "/post/like";

const LIKE_TRUE_MESSAGE = "이 게시물에 좋아요를 누르셨습니다!";
const LIKE_FALSE_MESSAGE = "게시물이 마음에 드시면 좋아요를 눌러주세요!";

const onClickLikeBtn = async (postPk) => {
  icon = document.querySelector(`#post-${postPk}`).querySelector(".fa-heart");
  span = icon.nextElementSibling;

  console.log(span);

  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  const { data } = await axios.post(POST_LIKE_URL, {
    postPk,
  });
  console.log(data);

  if (data) {
    span.innerText = LIKE_TRUE_MESSAGE;
  } else {
    span.innerText = LIKE_FALSE_MESSAGE;
  }

  icon.classList.toggle("fas");
  icon.classList.toggle("far");
};
