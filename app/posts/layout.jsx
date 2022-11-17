import Counter from "./components/Counter"

export default function Layout({ children }) {
    return (
        <div>
            < Counter />
            {children}
        </div>
    )
}
