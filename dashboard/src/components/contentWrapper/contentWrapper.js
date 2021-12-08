import ContentRowTop from "./contentRowTop/contentRowTop";
import ContentCard from "./contentCard/contentCard";
import MovieDetail from "./movieDetail/movieDetail";
import CategoriesInDb from "./categoriesInDb/categoriesInDb";

export default function ContentWrapper() {
  return (
        <div class="container-fluid">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          <ContentRowTop />

          <div class="row">
            <ContentCard title="Last movie in Data Base">
              <MovieDetail />
            </ContentCard>

            <ContentCard title="Genres in Data Base">
              <CategoriesInDb />
            </ContentCard>
          </div>
        </div>
  );
}
