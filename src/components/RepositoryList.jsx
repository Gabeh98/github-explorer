import { RepositoryItem } from "./RepositoryItem";
const repository = {
  name: "Repositorio",
  description: "myRepo",
  link: "https://github.com/gabeh98",
};
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
