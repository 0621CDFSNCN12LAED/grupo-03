import ContentCard from "../contentCard/contentCard";
import MovieDetail from "./movieDetail";

function MovieInDb () {
    return(
        <div>
            <ContentCard title="Last movie in Data Base">
              <MovieDetail />
            </ContentCard>
        </div>
    )
}

export default MovieInDb;