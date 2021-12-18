import ContentRowTop from "./contentRowTop/contentRowTop";
import ContentCard from "./contentCard/contentCard";
import ProductDetail from "./productDetail/productDetail";
import CategoriesInDb from "./categoriesInDb/categoriesInDb";

export default function ContentWrapper() {
  return (
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          <ContentRowTop />

          <div className="row">
            <ContentCard title="Last Created Product">
              <ProductDetail />
            </ContentCard>

            <ContentCard title="Categories">
              <CategoriesInDb />
            </ContentCard>
          </div>
        </div>
  );
}
