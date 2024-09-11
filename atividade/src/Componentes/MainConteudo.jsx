function MainConteudo({ children }) {
    return (
        <div className="w-full h-full flex flex-row flex-wrap p-20 justify-evenly">
            {children}
        </div>
    );
}
export default MainConteudo;