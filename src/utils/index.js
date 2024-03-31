export const getProfileDetails = (
    username, password, email, avatar
  ) => {
    return [
      { name: "Username", content: username },
      { name: "Password", content: password },
      { name: "Email", content: email },
      {name: "Avatar", content: avatar}
        ]
  }