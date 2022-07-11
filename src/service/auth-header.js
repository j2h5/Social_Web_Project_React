export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    console.log(user.jwt);
    return { Authorization: 'Bearer ' + user.jwt };
  } else {
    return {};
  }
}