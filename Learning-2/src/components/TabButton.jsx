export default function TabButton({children, onselect, isSelected}) {
    return (
       <li>
        <button className ={isSelected ? 'active' : undefined} onClick={onselect}>
            {children}
        </button>
       </li>
    )
}