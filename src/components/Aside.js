import { useState } from 'react';

const Categories = () => {
    const categories = [
        {id: 1, title: 'Все товары'},
        {id: 2, title: 'Футболки'},
        {id: 3, title: 'Тортики'},
        {id: 4, title: 'Картины'}
    ]
}

const handleClick = (id) => {
    setSelectedCategory(id);
};

function Aside() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <aside id="categories-aside">
            <h2>Категории</h2>
            <ul id="category-list">
                {categories.map((cat) => (
                    <li key={cat.id}>
                        <button onClick={() => handleClick(cat.id)} style={{backgroundColor: cat.id === selectedCategory ? '#ccc' : ''}}>
                            {cat.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

    export default Aside;