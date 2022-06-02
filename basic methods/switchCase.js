var user_type="sys admin"

switch (user_type) {
  case "admin":
    console.log("you get the full access")
    break;
    // without break, a phenomenon known as "fall-through occurs where all below statements execute without checking the below conditions"

  case "sys admin":
    console.log("you can edit and delete courses")
    break

  case "testprep":
    console.log("you can add and delete tests")
    break

  case "user":
    console.log("you can consume content")
    break

  default:
    console.log("you are not signed in user, please sign in :-)")
    break;

}
