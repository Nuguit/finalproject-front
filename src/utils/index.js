export const getProfileDetails = (
    username, password, email
  ) => {
    return [
      { name: "Username", content: username },
      { name: "Password", content: password },
      { name: "Email", content: email },
        ]
  }