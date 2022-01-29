import ContentCard from "../contentCard/contentCard";
import LastDbProduct from "./lastDbProduct/lastDbProduct";

function ProductInDb () {
    return(
        <div>
            <ContentCard title="Last product in Data Base">
              <LastDbProduct />
            </ContentCard>
        </div>
    )
}

export default ProductInDb;