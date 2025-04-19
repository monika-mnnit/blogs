import MainHeader from "./MainHeader";
import { ReactNode } from "react";
type LayoutProps = {
    children: ReactNode;
};
  

function Layout({children} : LayoutProps) {
    return (
        <>
            <div className="sticky top-0 z-50 bg-white shadow-md">
                <MainHeader />
            </div>
            <main>
                <div className="container mx-auto p-4">
                    {children}
                </div>
            </main>
            
        </>
   )
}
export default Layout;