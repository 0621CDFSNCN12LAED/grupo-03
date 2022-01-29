import ContentRowTop from "./contentRowTop/contentRowTop";
import ContentCard from "./contentCard/contentCard";
import ProductInDb from "./productInDb/productInDb";
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
              <ProductInDb />
            </ContentCard>

            <ContentCard title="Categories">
              <CategoriesInDb />
            </ContentCard>
          </div>
        </div>
  );
}
