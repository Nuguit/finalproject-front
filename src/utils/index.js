export const getProfileDetails = (
    username, password, email, avatar
  ) => {
    return [
      { name: "Username", content: username },
      { name: "Email", content: email },
      {name: "Avatar", content: avatar}
        ]
  }