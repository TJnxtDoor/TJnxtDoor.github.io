fetch("https://api.github.com/users/tjnxtdoor/repos")
  .then(res => res.json())
  .then(repos => {
    const list = document.createElement("ul");
    repos.forEach(repo => {
      const li = document.createElement("li");
      li.textContent = repo.name;
      list.appendChild(li);
    });
    document.body.appendChild(list);
  })
  .catch(err => console.error(err));