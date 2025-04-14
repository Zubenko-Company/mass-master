import { ReactNode } from "react";
import "./pageContent.css";


export default function PageContent({ children }: { children: ReactNode }) {
    return (
        <div className="pageContent">
            {children}
        </div >
    );
}