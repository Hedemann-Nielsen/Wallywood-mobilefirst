import { Link } from "react-router-dom";

export const FallbackPage = () => {
  return (
<>
  <div className="flex flex-col justify-center items-center h-1/3">
    <h2 className="text-4xl">404...</h2>
    <p className="text-2xl pb-10">Siden du søgte efter findes ikke</p>
    <Link to="/home" className="no-underline text-black">Klik <span className="underline">her</span> for at komme til forsiden</Link>
  </div>
</>

  );
}
