import { useRecoilValue, useSetRecoilState } from "recoil";
import { aiState } from "./atoms/initialState";
import Image from "next/image";
import { LoaderIcon } from "lucide-react";
import { Skeleton } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Leaf = () => {
  const { image, isLoading } = useRecoilValue(aiState);
  console.log(image, isLoading);

  return (
    <div className=" mt-12 ">
      {isLoading && (
        <div className=" bg-slate-200  h-[370px] w-[370px]">
          <LoaderIcon className="w-20 h-20 animate-spin text-black relative top-[135px] left-[140px]" />
          <Skeleton active />;
        </div>
      )}
      {!isLoading && image !== "" && (
        <LazyLoadImage
          className=" border-slate-600 rounded-md"
          src={image}
          alt="x"
          height={370}
          width={370}
          loading="lazy"
          effect="blur"
        />
      )}
    </div>
  );
};

export default Leaf;
