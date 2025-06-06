import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryModal } from "../../../../../redux/generic-slices/modals";
import Categories from "../../../sidenav/categories";
import PriceRange from "../../../sidenav/price-range";
import SortSelector from "../../header/sort-selector";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryModal } = useSelector(({ modal }) => modal);
  return (
    <div>
      <Modal
        onCancel={() => dispatch(setCategoryModal())}
        open={categoryModal}
        title="categories"
      >
        <Categories />
        <PriceRange />
        <SortSelector />
      </Modal>
    </div>
  );
};

export default Category;
