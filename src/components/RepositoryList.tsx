import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useState, useEffect } from "react";


// https://api.github.com/orgs/rocketseat/repos 

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
            fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    console.log(repositories);
    // Cuidado para não deixar sem o segundo parametro
    // Não pode atualizar a variavel que esta uilizando como dependencia


      return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                { repositories.map(repository => {
                  return <RepositoryItem key={repository.name} repository={repository} />      
                })}
            </ul>
        </section>

    );
}