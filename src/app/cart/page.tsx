import { Suspense } from "react";
import CartPage from "./CartPage";

const page = () => {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <CartPage />
    </Suspense>
  )
}

export default page;
