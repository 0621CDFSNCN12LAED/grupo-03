import ContentCard from "../contentCard/contentCard";
import ProductDetail from "./productDetail";

function MovieInDb () {
    return(
        <div>
            <ContentCard title="Last movie in Data Base">
              <ProductDetail />
            </ContentCard>
        </div>
    )
}

export default MovieInDb;