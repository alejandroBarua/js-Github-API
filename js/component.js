import lastDate from "./funciones.js";

export default function Component($div, json) {
    
    $div.innerHTML =`
            <div class="header-git">
                <img src="./images/github.png" alt="">
                <h2>GitHub API</h2>
            </div>
            <div class="user-github">
                <div>
                    <img class="avatar" src="${json.avatar_url}" alt="">
                    <h3>${json.name}</h3>
                </div>
                <div>
                    <div class="repo">
                        <img  src="./images/folder.png" alt="">
                        <h3>Repositorios<span>${json.public_repos}</span></h3>
                    </div>
                    <p>Ultimo commit ${lastDate(json.updated_at)}</p>
                    <a class="github-link" href="${json.html_url}">Ir a Github</a>
                </div>
            </div>`
}