import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "../../../../hooks/useSearchParams";
import { useAxios } from "../../../../hooks/useaxois";
import Card from "./card";
import Loading from "./card/loading";

const Body = () => {
  const axois = useAxios();
  const { getParams } = useSearchParams();
  const category = getParams("category") ?? "house-plants";

  const min = getParams("min") ?? 0;
  const max = getParams("max") ?? 1500;
  const sort = getParams("sort") ?? "default-sorting";
  const type = getParams("type") ?? "all-plants";

  const cashe_key = `category=${category}&min=${min}&max=${max}&sort=${sort}&type=${type}`;

  const { data, isLoading } = useQuery({
    queryKey: [cashe_key],
    queryFn: async () => {
      const { data } = await axois({
        url: `/flower/category/${category}`,
        params: {
          range_min: min,
          range_max: max,
          sort,
          type,
        },
      });
      return data.data;
    },
  });

  return (
    <div className="flex flex-wrap gap-4 ">
      {isLoading
        ? Array.from({ length: 15 }).map((_idx) => <Loading />)
        : data?.map((item) => <Card key={item.id} {...item} />)}
    </div>
  );
};
export default Body;
