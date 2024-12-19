document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Validação simples
    if (username === "admin" && password === "1234") {
      document.getElementById("loginMessage").textContent = "Login bem-sucedido!";
      document.getElementById("loginMessage").style.color = "green";
      // Redirecionar ou carregar conteúdo
      setTimeout(() => {
        window.location.href = "./home.html";
      }, 1000);
    } else {
      document.getElementById("loginMessage").textContent = "Usuário ou senha incorretos!";
    }
  });
  
