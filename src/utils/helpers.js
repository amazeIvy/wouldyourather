export function formatQuestion (question, author) {
  const { id, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    id,
    authorName: name,
    authorAvatar: avatarURL,
    optionOne: optionOne.text,
    optionTwo: optionTwo.text
  }
}