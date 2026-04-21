// Simulated database (users table)
const usersTable = [
  {
    id: 1,
    username: "admin",
    password: "1234"
  },
  {
    id: 2,
    username: "user",
    password: "pass"
  }
];
// Generate fake JWT token
function generateFakeJWT(user) {
  const payload = {
    id: user.id,
    username: user.username,
    time: new Date().toISOString()
  };

  // Encode as base64 (fake token)
  return btoa(JSON.stringify(payload));
}

// Updated login with token
function login() {
  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;
  const message = document.querySelector(".footer");

  const user = authenticateUser(username, password);

  if (user) {
    const token = generateFakeJWT(user);

    // Store token (simulate session)
    localStorage.setItem("token", token);

    message.textContent = "Login success (token stored)";
    console.log("Fake JWT:", token);
  } else {
    message.textContent = "Invalid username or password!";
  }
}