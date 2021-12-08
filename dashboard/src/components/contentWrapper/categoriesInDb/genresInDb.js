import ContentCard from "../contentCard/contentCard";
import CategoriesInDb from "./categoriesInDb";

function GenresInDb () {
    return(
        <div>
            <ContentCard title="Genres in Data Base">
              <CategoriesInDb />
            </ContentCard>
        </div>
    )
}

export default GenresInDb;