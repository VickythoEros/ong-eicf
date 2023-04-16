import { useRouteError } from "react-router-dom";


//Page d'afficahge des erreurs
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container text-center py-5">
      <h1 className="text-danger" >Oops!</h1>
      <p className="fw-bolder py-3" >Attention, une erreur est survenue.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}