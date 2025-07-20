export const Button = ({title}:{title: String}) => {
    return <button className="bg-greenish text-black font-heading py-2 px-4 rounded-full transition-all ease-in-out hover:drop-shadow-[0_0_15px_rgba(214,253,81,0.7)]">
        {title}
    </button>
}