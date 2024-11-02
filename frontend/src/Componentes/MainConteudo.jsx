function MainConteudo({ children }) {
    return (
        <div className="w-full h-full flex flex-row flex-wrap p-20 justify-evenly bg-slate-900">
            {children}
        </div>
    );
}
export default MainConteudo;