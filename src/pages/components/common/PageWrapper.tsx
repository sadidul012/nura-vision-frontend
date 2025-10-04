import {useEffect, ReactNode} from "react";

interface PageProps {
    title: string;
    children: ReactNode;
}

function PageWrapper({title, children}: PageProps) {
    useEffect(() => {
        document.title = title + " | LivelinessCheck";
    }, [title]);

    return <>{children}</>;
}

export default PageWrapper;
