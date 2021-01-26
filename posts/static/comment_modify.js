const modify = (data, postPk) => {
  const oldUl = document.querySelector(`#post-${postPk}`).querySelector("ul");
  const newUl = document.createElement("ul");
  newUl.className = "comment-container";

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element["id"], element["content"]);

    // comment가 담길 li에 대한 설정
    const newLi = document.createElement("li");
    newLi.className = "comment";
    newLi.id = `comment-${element["id"]}`;
    newLi.dataset.commentPk = element["id"];

    // comment의 content가 담길 span에 대한 설정
    const newSpan = document.createElement("span");
    newSpan.innerText = element["content"];

    // comment의 삭제 버튼이 담길 button에 대한 설정
    const newButton = document.createElement("button");
    newButton.onclick = (event) =>
      onClickCommentDeleteBtn(element["id"], postPk);
    newButton.innerText = "삭제";

    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
    newUl.appendChild(newLi);
  }
  oldUl.parentNode.replaceChild(newUl, oldUl);

  // data.comments.forEach((element) => {
  //   const newLi = document.createElement("li");
  //   newLi.className = "comment";
  //   newLi.id = `comment-${element[0]}`;
  //   const newSpan = document.createElement("span");
  //   newSpan.innerText = element[1];
  //   const newA = document.createElement("a");
  //   newA.innerText = "삭제";
  // });
  // post.parentNode.replaceChild(newUl, post);
};
