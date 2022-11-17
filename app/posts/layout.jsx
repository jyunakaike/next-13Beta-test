 import Counter from "./components/Counter"

export default function Layout({ children }) {
    return (
        <div>
            {/* < Counter /> */}
            <small>home &bull; Posts</small>
            {children}
        </div>
    )
}
