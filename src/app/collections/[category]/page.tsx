import AddButton from "@/components/AddButton";
import ListProduct from "@/components/ListProduct";
import Menu from "@/components/Menu";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params: { category } }: Props) {
  return {
    title: category,
  };
}

const CategoryPage = ({ params }: Props) => {
  // const productTotalCount = products.length;

  return (
    <main className="bg-orange-50">
      {/* Title */}
      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <h1 className="px-7 pt-10 text-2xl font-light uppercase md:px-10 md:text-3xl">
            {params.category}
          </h1>
          <AddButton category={params.category} />
        </div>
        <Menu />
      </div>
      <div className="w-full px-7 md:px-10">
        <ListProduct category={params.category} />
      </div>
    </main>
  );
};

export default CategoryPage;
