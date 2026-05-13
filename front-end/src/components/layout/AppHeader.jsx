import { useLocation } from "react-router";

export default function AppHeader() {
    const { pathname } = useLocation();

    const pageTitle = pathname.split("/")[1];

    return (
        <header className="container bg-white w-full py-4 border-b border-[#E2DDD8]">
            <h2 className="capitalize">{pageTitle}</h2>
        </header>
    );
}
