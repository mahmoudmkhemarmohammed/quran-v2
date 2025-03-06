import { isString } from "@types";
import skeletons from "./skeletons/index"
import Error from "@pages/Error/Error";
type TLoadingProps = {
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
  children: React.ReactNode;
  type: keyof typeof skeletons
};
const Loading = ({ isLoading, isError, error, children , type }: TLoadingProps) => {
  if (isLoading) {
    const Compoents = skeletons[type]
    return <Compoents />;
  }
  if (isError) {
    return <Error message={isString(error) && error} />;
  }
  return <>{children}</>;
};

export default Loading;
